import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { CAREER_CATALOG } from "../data/contentCatalog";

export const Route = createFileRoute("/career/$careerId")({
  component: CareerDetailPage,
  head: ({ params }) => {
    const career = CAREER_CATALOG.find((item) => item.id === params.careerId);
    return { meta: [{ title: `${career?.title ?? "Career Opportunity"} | MG LAW` }] };
  },
});

function CareerDetailPage() {
  const { careerId } = Route.useParams();
  const career = CAREER_CATALOG.find((item) => item.id === careerId);

  if (!career) {
    return (
      <div id="top" className="site-shell">
        <SiteHeader />
        <main className="service-missing">
          <h1>Career opportunity not found</h1>
          <a href="/careers">Return to Career Opportunities</a>
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
            <h1 id="career-title">{career.title}</h1>
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <a href="/careers">Careers</a>
              <span aria-hidden="true">›</span>
              <strong>{career.title}</strong>
            </div>
          </div>
        </section>

        <article className="career-detail-content">
          <img src={career.image} alt={career.title} />
          <p>
            Stay tuned! This is where you’ll find our career opportunities and training programs
            when they become available.
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
