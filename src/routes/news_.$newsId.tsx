import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { NEWS_CATALOG } from "../data/contentCatalog";

export const Route = createFileRoute("/news_/$newsId")({
  component: NewsDetailPage,
  head: ({ params }) => {
    const article = NEWS_CATALOG.find((item) => item.id === params.newsId);
    return { meta: [{ title: article?.title ?? "MG LAW News" }] };
  },
});

function NewsDetailPage() {
  const { newsId } = Route.useParams();
  const article = NEWS_CATALOG.find((item) => item.id === newsId);

  if (!article) {
    return (
      <div id="top" className="site-shell">
        <SiteHeader />
        <main className="service-missing">
          <h1>News article not found</h1>
          <a href="/news">Return to News</a>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div id="top" className="site-shell news-detail-page">
      <SiteHeader />
      <main>
        <section className="archive-title-hero news-title-hero" aria-labelledby="article-title">
          <div className="archive-title-inner">
            <h1 id="article-title">{article.title}</h1>
            <div className="breadcrumbs detail-breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <a href="/news">News</a>
              <span aria-hidden="true">›</span>
              <strong>{article.title}</strong>
            </div>
          </div>
        </section>

        <article className="news-detail-content">
          <img className="news-detail-image" src={article.image} alt={article.title} />
          <div className="news-detail-meta">
            <a href="/news">{article.category}</a>
            <span>{article.date}</span>
            <span>by {article.author}</span>
          </div>
          {newsId === "infringement-of-a-registered-trademark" ? (
            <TrademarkArticle />
          ) : (
            <CompanyArticle />
          )}
          <div className="news-tags">Tags: Agreements, Contracts</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

function TrademarkArticle() {
  return (
    <>
      <h2>Article No. (113) – Egyptian Intellectual Property Law No. 82 of 2002</h2>
      <p>
        Without prejudice to any stricter penalty under any other law, anyone who commits one of the
        following crimes shall be punishable by imprisonment for not less than two months and a fine
        of not less than five thousand pounds and not more than twenty thousand pounds, or by either
        of these two penalties:
      </p>
      <ul>
        <li>
          Counterfeiting a legally registered trademark or imitating it in a manner likely to
          mislead the public.
        </li>
        <li>Maliciously using a forged or imitated trademark.</li>
        <li>Maliciously affixing another person’s trademark to their own products.</li>
        <li>Selling, offering, trading, or possessing products bearing an infringing mark.</li>
      </ul>
      <h2>Article (115) – Precautionary Measures</h2>
      <p>
        Upon conviction, the court may order the closure of the facility used in committing the
        crime for a period not exceeding six months. The competent court may also prove the
        occurrence of infringement and conduct an inventory and detailed description of the tools,
        products, goods, invoices, correspondence, and advertising materials concerned.
      </p>
      <h2>Unfair Competition</h2>
      <p>
        Article 66 of Egyptian Trade Law No. 17 of 1999 considers any act that violates accepted
        commercial norms to be unfair competition. Every such act obliges the perpetrator to
        compensate for the resulting damage, and the court may order its removal and publication of
        a summary of the judgment.
      </p>
      <h2>Cancellation of Trademark Registration</h2>
      <p>
        Whoever registers a trademark becomes its owner, provided it is used within five years of
        registration, unless another party proves priority of use. Invalidity may be challenged
        without time limits where registration was associated with bad faith.
      </p>
      <h2>Required Documents to Initiate Legal Proceedings</h2>
      <ul>
        <li>The company’s commercial registry.</li>
        <li>An official general power of attorney.</li>
      </ul>
    </>
  );
}

function CompanyArticle() {
  return (
    <>
      <h2>First: Incorporation of a Joint-Stock Company</h2>
      <p>
        To incorporate a joint-stock company in Egypt, the General Authority for Investments and
        Free Zones (GAFI) requires a non-confusion certificate for the company name, determination
        of issued capital and share value, and a bank certificate proving the required capital
        deposit.
      </p>
      <ul>
        <li>A deposit of at least 10% of issued capital; a 25% deposit is preferable.</li>
        <li>Power of attorney from at least three founders or the legal representative.</li>
        <li>Copies of the founders’ personal identification documents.</li>
        <li>Auditor and lawyer certificates and details of the company’s legal adviser.</li>
      </ul>
      <p>Once all documents are ready, incorporation typically takes one working day at GAFI.</p>
      <h2>Second: Other Matters Related to Incorporation</h2>
      <p>
        Companies formed under the Free Zones System require the relevant GAFI or Council of
        Ministers approval. Conversions from partnerships also require valuation of in-kind shares,
        registered partnership documents, partners’ resolutions, and approved articles of
        association.
      </p>
      <h2>Third: Registration in the Importers Register</h2>
      <p>
        The company must be incorporated under Egyptian law with its head office in Egypt, include
        importation among its stated purposes, hold the necessary commercial and tax registrations,
        and submit the prescribed cash security or bank guarantee.
      </p>
      <ul>
        <li>
          The issued capital recorded in the commercial register must meet the legal threshold.
        </li>
        <li>
          The import manager must be Egyptian and complete the approved import practice course.
        </li>
        <li>
          Responsible persons must satisfy the applicable criminal-record and eligibility rules.
        </li>
      </ul>
    </>
  );
}
