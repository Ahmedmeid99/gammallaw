export const SITE_URL = "https://gammallaw.com";
export const SITE_NAME = "MG Law Firm";
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/reference-assets/team-header-cover-1920.jpg`;

export const DEFAULT_KEYWORDS = [
  "MG Law Firm",
  "El Gammal Law Firm",
  "law firm in Egypt",
  "law firm in Cairo",
  "Egyptian lawyers",
  "corporate lawyer Egypt",
  "commercial law firm Cairo",
  "litigation lawyer Egypt",
  "contracts lawyer Egypt",
  "real estate lawyer Cairo",
  "intellectual property lawyer Egypt",
  "labour law Egypt",
  "legal consultation Cairo",
  "مكتب محاماة في مصر",
  "محامي شركات في القاهرة",
  "استشارات قانونية في مصر",
];

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  keywords?: string[];
  jsonLd?: Record<string, unknown>;
};

export function createSeoHead({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  type = "website",
  keywords = [],
  jsonLd,
}: SeoOptions) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const meta: Array<Record<string, unknown>> = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: [...keywords, ...DEFAULT_KEYWORDS].join(", ") },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: `${SITE_NAME} in Cairo, Egypt` },
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "ar_EG" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  if (jsonLd) meta.push({ "script:ld+json": jsonLd });

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["MG LAW", "El Gammal Law Firm", "مكتب إم جي للمحاماة"],
      url: SITE_URL,
      logo: `${SITE_URL}/reference-assets/logo.png`,
      image: DEFAULT_SOCIAL_IMAGE,
      description:
        "Egyptian law firm in Cairo providing corporate, commercial, litigation, contracts, employment, intellectual property, real estate, licensing, residency, and legal consultancy services.",
      email: "info@gammallaw.com",
      telephone: "+20-2-2735-3328",
      areaServed: ["Egypt", "Cairo", "Middle East"],
      knowsLanguage: ["en", "ar"],
      sameAs: [
        "https://www.google.com/maps?cid=14159121067538588790",
        "https://facebook.com/profile.php?id=61576418064605",
        "https://linkedin.com/company/elgammal-law",
        "https://instagram.com/mglawfirm.eg",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Legal Services",
        itemListElement: [
          "Corporate and Commercial Law",
          "Contracts and Agreements",
          "Civil Law and Litigation",
          "Labour Law and HR Services",
          "Intellectual Property Protection",
          "Real Estate Law",
          "Licences and Approvals",
          "Legal Consultancy and Research",
          "Residency and Dual Nationality",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#zamalek-office`,
      name: "MG Law Firm — Zamalek Office",
      url: `${SITE_URL}/contact-us`,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      image: DEFAULT_SOCIAL_IMAGE,
      telephone: "+20-2-2735-3328",
      email: "info@gammallaw.com",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "35B Mohamed Mazhar Street, Zamalek",
        addressLocality: "Cairo",
        addressCountry: "EG",
      },
      areaServed: { "@type": "Country", name: "Egypt" },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#mohandesin-office`,
      name: "MG Law Firm — Mohandesin Office",
      url: `${SITE_URL}/contact-us`,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      image: DEFAULT_SOCIAL_IMAGE,
      telephone: "+20-2-3344-3648",
      email: "info@gammallaw.com",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "54 Lebanon Street, Mohandesin",
        addressLocality: "Giza",
        addressCountry: "EG",
      },
      areaServed: { "@type": "Country", name: "Egypt" },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "MG LAW",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en", "ar"],
    },
  ],
};
