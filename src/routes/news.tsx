import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { NEWS_CATALOG } from "../data/contentCatalog";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({ meta: [{ title: "Our Latest News And Announcements | MG LAW" }] }),
});

function NewsPage() {
  return (
    <div id="top" className="site-shell news-page">
      <SiteHeader />
      <main>
        <section className="archive-title-hero news-title-hero" aria-labelledby="news-page-title">
          <div className="archive-title-inner">
            <h1 id="news-page-title">News</h1>
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <strong>News</strong>
            </div>
          </div>
        </section>

        <section className="content-archive news-archive" aria-labelledby="all-posts-title">
          <h2 id="all-posts-title">All Posts</h2>
          <div className="news-archive-grid">
            {NEWS_CATALOG.map((article) => (
              <article className="news-archive-card" key={article.id}>
                <a className="news-card-image" href={article.href}>
                  <img src={article.image} alt={article.title} />
                </a>
                <div className="news-card-copy">
                  <h3>
                    <a href={article.href}>{article.title}</a>
                  </h3>
                  <div className="news-card-meta">
                    <a href={article.href}>{article.category}</a>
                    <span>{article.date}</span>
                    <span>by {article.author}</span>
                  </div>
                  <p>{article.summary}</p>
                  <a className="read-more" href={article.href}>
                    Read more
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
