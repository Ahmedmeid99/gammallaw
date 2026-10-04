import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { CAREER_CATALOG } from "../data/contentCatalog";
import { SITE_DATA } from "../data/siteData";
import { useLanguage } from "../i18n/LanguageContext";
import { SITE_URL, breadcrumbJsonLd, createSeoHead } from "../lib/seo";

export const Route = createFileRoute("/career/$careerId")({
  component: CareerDetailPage,
  head: ({ params }) => {
    const career = CAREER_CATALOG.find((item) => item.id === params.careerId);
    const title = career?.title ?? "Legal Career Opportunity";
    const path = `/career/${params.careerId}`;
    return createSeoHead({
      title: `${title} in Cairo | MG Law Firm`,
      description: `Learn about the ${title} at MG Law Firm and opportunities to build a legal career in Cairo, Egypt.`,
      path,
      image: career ? `${SITE_URL}${career.image}` : undefined,
      keywords: [`${title} Cairo`, "law firm jobs Egypt"],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Careers", path: "/careers" },
        { name: title, path },
      ]),
    });
  },
});

function CareerDetailPage() {
  const { isArabic } = useLanguage();
  const { careerId } = Route.useParams();
  const career = CAREER_CATALOG.find((item) => item.id === careerId);
  const localizedCareer = SITE_DATA.careers.find((item) => careerId.includes(item.id));

  if (!career) {
    return (
      <div id="top" className="site-shell">
        <SiteHeader />
        <main className="service-missing">
          <h1>{isArabic ? "فرصة العمل غير موجودة" : "Career opportunity not found"}</h1>
          <a href="/careers">
            {isArabic ? "العودة إلى فرص العمل" : "Return to Career Opportunities"}
          </a>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div id="top" className="site-shell career-detail-page">
      <SiteHeader />
      <main>
        <section className="archive-title-hero career-title-hero" aria-labelledby="career-title">
          <div className="archive-title-inner">
            <h1 id="career-title">
              {isArabic && localizedCareer ? localizedCareer.titleAr : career.title}
            </h1>
            <div className="breadcrumbs" aria-label={isArabic ? "مسار الصفحة" : "Breadcrumb"}>
              <a href="/">{isArabic ? "الرئيسية" : "Home"}</a>
              <span aria-hidden="true">›</span>
              <a href="/careers">{isArabic ? "الوظائف" : "Careers"}</a>
              <span aria-hidden="true">›</span>
              <strong>
                {isArabic && localizedCareer ? localizedCareer.titleAr : career.title}
              </strong>
            </div>
          </div>
        </section>

        <article className="career-detail-content">
          <img
            src={career.image}
            alt={isArabic && localizedCareer ? localizedCareer.titleAr : career.title}
          />
          <p>
            {isArabic && localizedCareer
              ? localizedCareer.descAr
              : "Stay tuned! This is where you’ll find our career opportunities and training programs when they become available."}
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
