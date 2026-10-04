import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { CAREER_CATALOG } from "../data/contentCatalog";
import { SITE_DATA } from "../data/siteData";
import { useLanguage } from "../i18n/LanguageContext";
import { breadcrumbJsonLd, createSeoHead } from "../lib/seo";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () =>
    createSeoHead({
      title: "Legal Careers and Internships in Cairo | MG Law Firm",
      description:
        "Explore lawyer, legal associate, and internship opportunities with MG Law Firm in Cairo, Egypt.",
      path: "/careers",
      keywords: ["legal jobs Cairo", "law firm careers Egypt", "legal internship Egypt"],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Careers", path: "/careers" },
      ]),
    }),
});

function CareersPage() {
  const { isArabic } = useLanguage();
  const arabicCareer = (id: string) => SITE_DATA.careers.find((item) => id.includes(item.id));
  return (
    <div id="top" className="site-shell careers-page">
      <SiteHeader />
      <main>
        <section
          className="archive-title-hero career-title-hero"
          aria-labelledby="career-page-title"
        >
          <div className="archive-title-inner">
            <h1 id="career-page-title">{isArabic ? "فرص العمل" : "Career Opportunities"}</h1>
            <div className="breadcrumbs" aria-label={isArabic ? "مسار الصفحة" : "Breadcrumb"}>
              <a href="/">{isArabic ? "الرئيسية" : "Home"}</a>
              <span aria-hidden="true">›</span>
              <strong>{isArabic ? "فرص العمل" : "Career Opportunities"}</strong>
            </div>
          </div>
        </section>

        <section className="content-archive" aria-labelledby="all-careers-title">
          <h2 id="all-careers-title">{isArabic ? "جميع فرص العمل" : "All Career Opportunities"}</h2>
          <div className="career-grid">
            {CAREER_CATALOG.map((career) => (
              <a className="career-archive-card" href={career.href} key={career.id}>
                <img
                  src={career.image}
                  alt={isArabic ? arabicCareer(career.id)?.titleAr : career.title}
                />
                <h3>{isArabic ? arabicCareer(career.id)?.titleAr : career.title}</h3>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
