import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { CAREER_CATALOG } from "../data/contentCatalog";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({ meta: [{ title: "Career Opportunities | MG LAW" }] }),
});

function CareersPage() {
  return (
    <div id="top" className="site-shell careers-page">
      <SiteHeader />
      <main>
        <section
          className="archive-title-hero career-title-hero"
          aria-labelledby="career-page-title"
        >
          <div className="archive-title-inner">
            <h1 id="career-page-title">Career Opportunities</h1>
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <strong>Career Opportunities</strong>
            </div>
          </div>
        </section>

        <section className="content-archive" aria-labelledby="all-careers-title">
          <h2 id="all-careers-title">All Career Opportunities</h2>
          <div className="career-grid">
            {CAREER_CATALOG.map((career) => (
              <a className="career-archive-card" href={career.href} key={career.id}>
                <img src={career.image} alt={career.title} />
                <h3>{career.title}</h3>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
