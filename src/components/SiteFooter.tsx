import { useEffect, useState } from "react";

type SocialNetwork = "facebook" | "linkedin" | "instagram";

function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 8.2V6.5c0-.8.5-1 1-1h2.6V1.2L14.2 1C10.6 1 9 3.1 9 6.1v2.1H6.4v5H9V23h5.2v-9.8h3.5l.6-5h-4.1Z" />
      </svg>
    );
  }

  if (network === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.1 7.8H1V23h4.1V7.8ZM3 1A2.4 2.4 0 1 0 3 5.8 2.4 2.4 0 0 0 3 1Zm8.7 6.8H7.8V23h4.1v-7.5c0-2 .4-3.9 2.8-3.9 2.4 0 2.5 2.3 2.5 4V23h4.1v-8.3c0-4.1-.9-7.3-5.7-7.3-2.3 0-3.8 1.3-4.4 2.5h-.1l.6-2.1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.2" y="2.2" width="19.6" height="19.6" rx="5.4" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.8" cy="6.3" r="1.15" className="instagram-dot" />
    </svg>
  );
}

function ContactIcon({ type }: { type: "pin" | "phone" | "mail" | "clock" }) {
  const paths = {
    pin: (
      <>
        <path d="M12 21s6.5-5 6.5-11.2a6.5 6.5 0 1 0-13 0C5.5 16 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.1" />
      </>
    ),
    phone: (
      <path d="m6 3 3 5-2.1 1.8c1.5 3 3.7 5.2 6.8 6.7l1.8-2.1 5 3-.9 3c-.2.8-1 1.4-1.9 1.4C9.3 21.8 2.2 14.7 2.2 6.3c0-.9.6-1.7 1.4-1.9L6 3Z" />
    ),
    mail: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
        <path d="m3.5 6 8.5 7 8.5-7" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9.5" />
        <path d="M12 6.5V12l3.7 2.1" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export function SiteFooter() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const syncBackToTop = () => setShowBackToTop(window.scrollY > 520);
    syncBackToTop();
    window.addEventListener("scroll", syncBackToTop, { passive: true });
    return () => window.removeEventListener("scroll", syncBackToTop);
  }, []);

  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-intro">
            <img src="/reference-assets/logo.png" alt="MG Law Firm" />
            <div className="footer-brand-copy">
              <span>MG LAW FIRM</span>
              <h2>Comprehensive Legal Services Across Our Offices</h2>
              <p>
                Strategic legal counsel built on integrity, precision, and more than 25 years of
                trusted experience.
              </p>
              <a className="footer-cta" href="/appointments">
                Book a consultation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="footer-branches" aria-label="Our offices">
            <article className="footer-office-card">
              <div className="footer-office-title">
                <span className="footer-office-icon">
                  <ContactIcon type="pin" />
                </span>
                <div>
                  <small>Zamalek, Cairo</small>
                  <h3>Mazhar Office</h3>
                </div>
              </div>
              <address>35B Mohamed Mazhar St., Zamalek, Cairo</address>
              <div className="footer-contact-line">
                <ContactIcon type="phone" />
                <a href="tel:+20227353328">+202-27353328</a>
              </div>
              <div className="footer-contact-line">
                <ContactIcon type="mail" />
                <a href="mailto:info@gammallaw.com">info@gammallaw.com</a>
              </div>
              <div className="footer-contact-line">
                <ContactIcon type="clock" />
                <span>Sun–Thu · 9:00 am–6:00 pm</span>
              </div>
            </article>

            <article className="footer-office-card">
              <div className="footer-office-title">
                <span className="footer-office-icon">
                  <ContactIcon type="pin" />
                </span>
                <div>
                  <small>Mohandesin, Giza</small>
                  <h3>Mohandesin Office</h3>
                </div>
              </div>
              <address>54 Lebanon Street, Mohandesin, Giza</address>
              <div className="footer-contact-line">
                <ContactIcon type="phone" />
                <a href="tel:+20233443648">+02-33443648</a>
              </div>
              <div className="footer-contact-line">
                <ContactIcon type="mail" />
                <a href="mailto:info@gammallaw.com">info@gammallaw.com</a>
              </div>
              <div className="footer-contact-line">
                <ContactIcon type="clock" />
                <span>Sun–Thu · 9:00 am–6:00 pm</span>
              </div>
            </article>
          </div>

          <div className="footer-lower">
            <div className="footer-follow">
              <span>Follow Us</span>
              <div className="footer-social-links">
                <a href="https://facebook.com/profile.php?id=61576418064605" aria-label="Facebook">
                  <SocialIcon network="facebook" />
                </a>
                <a href="https://linkedin.com/company/elgammal-law" aria-label="LinkedIn">
                  <SocialIcon network="linkedin" />
                </a>
                <a href="https://instagram.com/mglawfirm.eg" aria-label="Instagram">
                  <SocialIcon network="instagram" />
                </a>
              </div>
            </div>
            <div className="footer-navigation">
              <span>Explore</span>
              <nav className="footer-nav" aria-label="Footer navigation">
                <a href="/about">About</a>
                <a href="/practice-areas">Practice Areas</a>
                <a href="/our-team">Our Team</a>
                <a href="/careers">Careers</a>
                <a href="/news">News</a>
                <a href="/contact-us">Contact Us</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>El Gammal © 2026. All rights reserved.</span>
          <span>Strategic counsel. Enduring partnerships.</span>
        </div>
      </footer>
      <button
        className={showBackToTop ? "back-to-top is-visible" : "back-to-top"}
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 14 6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
