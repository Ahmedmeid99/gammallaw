import { createFileRoute } from "@tanstack/react-router";
import { ContactHelp, OfficeMap } from "../components/ContactBlocks";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const Route = createFileRoute("/contact-us")({
  component: ContactUsPage,
  head: () => ({ meta: [{ title: "Contact Us | We’re Here To Assist You" }] }),
});

function ContactUsPage() {
  return (
    <div id="top" className="site-shell inner-page contact-page">
      <SiteHeader />
      <main>
        <section className="inner-title-hero contact-title-hero" aria-labelledby="contact-title">
          <div className="inner-title-content">
            <h1 id="contact-title">Contact Us</h1>
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <strong>Contact Us</strong>
            </div>
          </div>
        </section>

        <section className="message-section" aria-labelledby="message-title">
          <h2 id="message-title">Send a Message</h2>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              <span className="sr-only">Your name</span>
              <input name="name" type="text" placeholder="Your name*" required />
            </label>
            <label>
              <span className="sr-only">Your email</span>
              <input name="email" type="email" placeholder="Your e-mail*" required />
            </label>
            <label className="message-field">
              <span className="sr-only">Your message</span>
              <textarea name="message" placeholder="Your message*" required />
            </label>
            <label className="consent-field">
              <input type="checkbox" required />
              <span>I agree that my submitted data is being collected and stored.</span>
            </label>
            <button type="submit">Send Message</button>
          </form>
        </section>
        <OfficeMap />
        <ContactHelp />
      </main>
      <SiteFooter />
    </div>
  );
}
