import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { NEWS_CATALOG } from "../data/contentCatalog";
import { SITE_DATA } from "../data/siteData";
import { useLanguage } from "../i18n/LanguageContext";
import { breadcrumbJsonLd, createSeoHead } from "../lib/seo";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () =>
    createSeoHead({
      title: "Egypt Legal News and Insights | MG Law Firm",
      description:
        "Read legal news, practical opinions, and updates on Egyptian corporate, commercial, intellectual property, and regulatory matters from MG Law Firm.",
      path: "/news",
      keywords: ["Egypt legal news", "Egyptian law updates", "legal opinions Egypt"],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "News", path: "/news" },
      ]),
    }),
});

function NewsPage() {
  const { isArabic } = useLanguage();
  return (
    <div id="top" className="site-shell news-page">
      <SiteHeader />
      <main>
        <section className="archive-title-hero news-title-hero" aria-labelledby="news-page-title">
          <div className="archive-title-inner">
            <h1 id="news-page-title">{isArabic ? "الأخبار" : "News"}</h1>
            <div className="breadcrumbs" aria-label={isArabic ? "مسار الصفحة" : "Breadcrumb"}>
              <a href="/">{isArabic ? "الرئيسية" : "Home"}</a>
              <span aria-hidden="true">›</span>
              <strong>{isArabic ? "الأخبار" : "News"}</strong>
            </div>
          </div>
        </section>

        <section className="content-archive news-archive" aria-labelledby="all-posts-title">
          <h2 id="all-posts-title">{isArabic ? "جميع المقالات" : "All Posts"}</h2>
          <div className="news-archive-grid">
            {NEWS_CATALOG.map((article, index) => (
              <article className="news-archive-card" key={article.id}>
                <a className="news-card-image" href={article.href}>
                  <img
                    src={article.image}
                    alt={isArabic ? SITE_DATA.news[index]?.titleAr : article.title}
                    loading="lazy"
                  />
                </a>
                <div className="news-card-copy">
                  <h3>
                    <a href={article.href}>
                      {isArabic ? SITE_DATA.news[index]?.titleAr : article.title}
                    </a>
                  </h3>
                  <div className="news-card-meta">
                    <a href={article.href}>
                      {isArabic ? SITE_DATA.news[index]?.categoryAr : article.category}
                    </a>
                    <span>{article.date}</span>
                    <span>{isArabic ? "بقلم فريق إم جي" : `by ${article.author}`}</span>
                  </div>
                  <p>{isArabic ? SITE_DATA.news[index]?.summaryAr : article.summary}</p>
                  <a className="read-more" href={article.href}>
                    {isArabic ? "اقرأ المزيد" : "Read more"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
