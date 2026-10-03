import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PRACTICE_CATALOG } from "../data/practiceCatalog";

export const Route = createFileRoute("/practice-areas")({
  component: PracticeAreasPage,
  head: () => ({
    meta: [{ title: "Our Areas Of Specialization | MG LAW" }],
  }),
});

function PracticeAreasPage() {
  return (
    <div id="top" className="site-shell practice-page">
      <SiteHeader />
      <main>
        <section className="practice-title-hero" aria-labelledby="practice-page-title">
          <div className="practice-title-inner">
            <h1 id="practice-page-title">Practice Areas</h1>
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <strong>Practice Areas</strong>
            </div>
          </div>
        </section>

        <section className="practice-list" aria-labelledby="our-areas-title">
          <h2 id="our-areas-title">Our Areas</h2>
          <div className="practice-grid">
            {PRACTICE_CATALOG.map((area) => (
              <a className="practice-card" id={area.id} key={area.id} href={area.href}>
                <img src={area.localImage} alt={area.titleEn} loading="lazy" />
                <h3>{area.titleEn}</h3>
                <span className="sr-only">Open {area.titleEn}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
