import { createFileRoute } from "@tanstack/react-router";
import { OfficeMap } from "../components/ContactBlocks";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { useLanguage } from "../i18n/LanguageContext";
import { breadcrumbJsonLd, createSeoHead } from "../lib/seo";

export const Route = createFileRoute("/contact-us")({
  component: ContactUsPage,
  head: () =>
    createSeoHead({
      title: "Contact MG Law Firm | Lawyers in Cairo and Giza",
      description:
        "Contact MG Law Firm for legal assistance in Egypt. Reach our Cairo and Giza offices for corporate, litigation, contracts, employment, and other legal matters.",
      path: "/contact-us",
      keywords: ["contact lawyer Cairo", "law office Zamalek", "law office Mohandesin"],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact Us", path: "/contact-us" },
      ]),
    }),
});

function ContactUsPage() {
  const { isArabic } = useLanguage();
  return (
    <div id="top" className="site-shell inner-page contact-page">
      <SiteHeader />
      <main>
        <section className="inner-title-hero contact-title-hero" aria-labelledby="contact-title">
          <div className="inner-title-content">
            <h1 id="contact-title">{isArabic ? "اتصل بنا" : "Contact Us"}</h1>
            <div className="breadcrumbs" aria-label={isArabic ? "مسار الصفحة" : "Breadcrumb"}>
              <a href="/">{isArabic ? "الرئيسية" : "Home"}</a>
              <span aria-hidden="true">›</span>
              <strong>{isArabic ? "اتصل بنا" : "Contact Us"}</strong>
            </div>
          </div>
        </section>

        <section className="message-section" aria-labelledby="message-title">
          <h2 id="message-title">{isArabic ? "أرسل رسالة" : "Send a Message"}</h2>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              <span className="sr-only">{isArabic ? "الاسم" : "Your name"}</span>
              <input
                name="name"
                type="text"
                placeholder={isArabic ? "الاسم*" : "Your name*"}
                required
              />
            </label>
            <label>
              <span className="sr-only">{isArabic ? "البريد الإلكتروني" : "Your email"}</span>
              <input
                name="email"
                type="email"
                placeholder={isArabic ? "البريد الإلكتروني*" : "Your e-mail*"}
                required
              />
            </label>
            <label className="message-field">
              <span className="sr-only">{isArabic ? "الرسالة" : "Your message"}</span>
              <textarea
                name="message"
                placeholder={isArabic ? "رسالتك*" : "Your message*"}
                required
              />
            </label>
            <label className="consent-field">
              <input type="checkbox" required />
              <span>
                {isArabic
                  ? "أوافق على جمع البيانات المقدمة وحفظها."
                  : "I agree that my submitted data is being collected and stored."}
              </span>
            </label>
            <button type="submit">{isArabic ? "إرسال الرسالة" : "Send Message"}</button>
          </form>
        </section>
        <OfficeMap />
      </main>
      <SiteFooter />
    </div>
  );
}
