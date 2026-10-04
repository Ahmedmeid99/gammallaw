import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";
import { LanguageProvider } from "../i18n/LanguageContext";
import type { SiteLanguage } from "../i18n/LanguageContext";
import { DEFAULT_KEYWORDS, DEFAULT_SOCIAL_IMAGE, ORGANIZATION_JSON_LD } from "../lib/seo";

import appCss from "../styles.css?url";

const getInitialLanguage = createServerFn({ method: "GET" }).handler((): SiteLanguage =>
  getCookie("mg-law-language") === "ar" ? "ar" : "en",
);

export const Route = createRootRoute({
  loader: () => getInitialLanguage(),
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "MG Law Firm | Corporate & Litigation Lawyers in Cairo, Egypt",
      },
      {
        name: "description",
        content:
          "MG Law Firm is a Cairo-based Egyptian law firm advising companies and individuals on corporate, commercial, litigation, contracts, employment, intellectual property, real estate, licensing, and residency matters.",
      },
      {
        name: "keywords",
        content: DEFAULT_KEYWORDS.join(", "),
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1",
      },
      {
        name: "author",
        content: "MG Law Firm",
      },
      {
        property: "og:site_name",
        content: "MG Law Firm",
      },
      {
        property: "og:image",
        content: DEFAULT_SOCIAL_IMAGE,
      },
      {
        name: "theme-color",
        content: "#1d2d5b",
      },
      {
        "script:ld+json": ORGANIZATION_JSON_LD,
      },
    ],
    links: [
      {
        rel: "icon",
        href: "https://gammallaw.com/wp-content/uploads/2025/02/cropped-MG-Logo-Blue.jpeg-32x32.jpg",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const language = Route.useLoaderData();

  return (
    <html lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
      <head>
        <HeadContent />
      </head>
      <body>
        <LanguageProvider initialLanguage={language}>{children}</LanguageProvider>
        <Scripts />
      </body>
    </html>
  );
}
