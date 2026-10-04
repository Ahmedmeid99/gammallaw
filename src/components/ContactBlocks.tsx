type ContactIconType = "pin" | "phone" | "mail" | "clock";

function ContactIcon({ type }: { type: ContactIconType }) {
  const paths = {
    pin: (
      <>
        <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.3" />
      </>
    ),
    phone: (
      <path d="M6.5 3.5 9 8 6.9 9.7c1.4 3 3.8 5.4 6.8 6.8l1.8-2.2 4.5 2.5-.8 3c-.3 1-1.2 1.7-2.3 1.7C9 21.5 2.5 15 2.5 7.1c0-1 .7-2 1.7-2.3l2.3-1.3Z" />
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
        <path d="M12 6.5V12l3.8 2.2" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export function OfficeMap() {
  return (
    <div className="inner-map" aria-label="Map showing MG Law Firm in Zamalek">
      <iframe
        title="MG Law Firm location"
        loading="lazy"
        src="https://www.google.com/maps?cid=14159121067538588790&output=embed"
      />
    </div>
  );
}

export function ContactHelp() {
  return (
    <section className="inner-contact-help" aria-labelledby="contact-help-title">
      <h2 id="contact-help-title">We are here to help you</h2>
      <div className="inner-contact-grid">
        <div>
          <span className="inner-contact-icon">
            <ContactIcon type="pin" />
          </span>
          <strong>
            35B Mohamed Mazhar St.,
            <br />
            Zamalek, Cairo
          </strong>
        </div>
        <div>
          <span className="inner-contact-icon">
            <ContactIcon type="phone" />
          </span>
          <a href="tel:+20227353328">+202-27353328</a>
        </div>
        <div>
          <span className="inner-contact-icon">
            <ContactIcon type="mail" />
          </span>
          <a href="mailto:info@gammallaw.com">info@gammallaw.com</a>
        </div>
        <div>
          <span className="inner-contact-icon">
            <ContactIcon type="clock" />
          </span>
          <strong>Sun - Thu: 9:00am - 6:00pm</strong>
        </div>
      </div>
    </section>
  );
}
