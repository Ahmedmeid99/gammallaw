import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PRACTICE_CATALOG } from "../data/practiceCatalog";
import { useLanguage } from "../i18n/LanguageContext";
import { breadcrumbJsonLd, createSeoHead } from "../lib/seo";

export const Route = createFileRoute("/practice-areas")({
  component: PracticeAreasPage,
  head: () =>
    createSeoHead({
      title: "Legal Practice Areas in Egypt | MG Law Firm",
      description:
        "Explore MG Law Firm's legal services in Egypt, including corporate and commercial law, litigation, contracts, labour, intellectual property, real estate, licensing, and residency.",
      path: "/practice-areas",
      keywords: ["legal services Egypt", "practice areas Egyptian law"],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Practice Areas", path: "/practice-areas" },
      ]),
    }),
});

function PracticeAreasPage() {
  const { isArabic } = useLanguage();
  return (
    <div id="top" className="site-shell practice-page">
      <SiteHeader />
      <main>
        <section className="practice-title-hero" aria-labelledby="practice-page-title">
          <div className="practice-title-inner">
            <h1 id="practice-page-title">{isArabic ? "مجالات العمل" : "Practice Areas"}</h1>
            <div className="breadcrumbs" aria-label={isArabic ? "مسار الصفحة" : "Breadcrumb"}>
              <a href="/">{isArabic ? "الرئيسية" : "Home"}</a>
              <span aria-hidden="true">›</span>
              <strong>{isArabic ? "مجالات العمل" : "Practice Areas"}</strong>
            </div>
          </div>
        </section>

        <section className="practice-list" aria-labelledby="our-areas-title">
          <h2 id="our-areas-title">{isArabic ? "مجالاتنا القانونية" : "Our Areas"}</h2>
          <div className="practice-grid">
            {PRACTICE_CATALOG.map((area) => (
              <a className="practice-card" id={area.id} key={area.id} href={area.href}>
                <img
                  src={area.localImage}
                  alt={isArabic ? area.titleAr : area.titleEn}
                  loading="lazy"
                />
                <h3>{isArabic ? area.titleAr : area.titleEn}</h3>
                <span className="sr-only">
                  {isArabic ? `افتح ${area.titleAr}` : `Open ${area.titleEn}`}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
