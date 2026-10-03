import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PRACTICE_CATALOG } from "../data/practiceCatalog";

export const Route = createFileRoute("/services/$serviceId")({
  component: ServiceDetailPage,
  head: ({ params }) => {
    const area = PRACTICE_CATALOG.find((item) => item.serviceSlug === params.serviceId);
    return { meta: [{ title: `${area?.titleEn ?? "Practice Area"} | MG LAW` }] };
  },
});

const corporateSections = [
  {
    title: "Company Incorporation",
    copy: "Establishing all types of companies within the Arab Republic of Egypt, including Holding Companies subject to the supervision of the Financial Regulatory Authority (FRA), and all types of Capital and Individual Companies, such as Joint-Stock companies, Limited Liability Companies, General Partnerships, Limited Partnerships, and Sole Proprietorship Companies.",
  },
  {
    title: "Offshore Company Incorporation",
    copy: "Establishing companies outside Egypt, conducting studies on the types of companies and their requirements, identifying the best countries for incorporation, and determining the appropriate legal structure for each company.",
  },
  {
    title: "NGO Establishment Services",
    copy: "Assisting in establishing non-governmental organizations (NGOs) under the supervision of the Ministry of Social Solidarity.",
  },
  {
    title: "Due Diligence and Structuring",
    copy: "Preparing studies and reports on various types of companies, opening branches and representative offices for foreign companies, and selecting the most appropriate legal form.",
  },
  {
    title: "Share Transfer and Ownership",
    copy: "Assisting clients in transferring company shares, ensuring compliance with legal requirements, and completing the process efficiently, including dealing with authorized banks, representing the company, and obtaining bank certificates.",
  },
  {
    title: "Preparation and Drafting of Corporate Documents",
    copy: "Attending and preparing ordinary, constituent, and extraordinary general assemblies; preparing board minutes; advising on corporate governance; and drafting administrative resolutions, owner decisions, shareholder lists, and related attachments.",
  },
  {
    title: "Regulatory Compliance",
    copy: "Supervising the submission and approval of all relevant documents by the General Authority for Investment and Free Zones (GAFI).",
  },
  {
    title: "Placing Companies Under Liquidation",
    copy: "Establishing exit mechanisms between partners and dealing with the relevant government agencies to complete the liquidation process.",
  },
  {
    title: "Capital Markets and Banking Services",
    copy: "Cooperating with brokerage and securities firms to prepare listing documents, representing companies before authorized banks, and obtaining the required bank certificates.",
  },
  {
    title: "Merger and Acquisition Processes",
    copy: "Managing legal due diligence, periodic reporting, shareholder guarantee agreements, merger and division contracts, post-merger integration, and the sale and transfer of shares.",
  },
  {
    title: "Egyptian Stock Exchange Listing",
    copy: "Listing joint-stock companies and dealing with the Egyptian Stock Exchange (EGX), the Financial Regulatory Authority (FRA), and other relevant authorities.",
  },
];

function ServiceDetailPage() {
  const { serviceId } = Route.useParams();
  const area = PRACTICE_CATALOG.find((item) => item.serviceSlug === serviceId);

  if (!area) {
    return (
      <div id="top" className="site-shell">
        <SiteHeader />
        <main className="service-missing">
          <h1>Practice area not found</h1>
          <a href="/practice-areas">Return to Practice Areas</a>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const sections =
    area.id === "corporate-commercial"
      ? corporateSections
      : area.detailsEn.map((copy, index) => ({
          title: serviceSectionTitles[area.id]?.[index] ?? `Our Service ${index + 1}`,
          copy,
        }));

  return (
    <div id="top" className="site-shell service-detail-page">
      <SiteHeader />
      <main>
        <section className="service-title-hero" aria-labelledby="service-page-title">
          <div className="service-title-inner">
            <h1 id="service-page-title">{area.titleEn}</h1>
            <div className="breadcrumbs service-breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <a href="/practice-areas">All Services</a>
              <span aria-hidden="true">›</span>
              <span aria-hidden="true">…</span>
              <span aria-hidden="true">›</span>
              <strong>{area.titleEn}</strong>
            </div>
          </div>
        </section>

        <div className="service-layout">
          <aside className="service-sidebar">
            <h2>Service List</h2>
            <nav aria-label="Service list">
              {PRACTICE_CATALOG.map((item) => (
                <a
                  className={item.serviceSlug === serviceId ? "active" : ""}
                  href={item.href}
                  key={item.id}
                  aria-current={item.serviceSlug === serviceId ? "page" : undefined}
                >
                  {item.titleEn}
                </a>
              ))}
            </nav>
          </aside>

          <article className="service-article">
            <img src={area.localImage} alt={area.titleEn} />
            <h2>{area.titleEn}</h2>
            <p className="service-intro">{area.shortDescEn}</p>
            <ol>
              {sections.map((section) => (
                <li key={section.title}>
                  <h3>{section.title}:</h3>
                  <p>{section.copy}</p>
                </li>
              ))}
            </ol>
            <p>
              MG Law Firm provides these services in compliance with relevant Egyptian laws and
              regulations and represents clients before the competent governmental and regulatory
              authorities.
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

const serviceSectionTitles: Record<string, string[]> = {
  "contracts-agreements": [
    "Commercial Agreements",
    "Corporate Arrangements",
    "Projects and Supply",
    "Contractual Risk",
  ],
  "civil-law-litigation": [
    "Court Representation",
    "Administrative Litigation",
    "Commercial Disputes",
    "Arbitration and Settlement",
  ],
  "labour-hr-services": [
    "Internal Regulations",
    "Employment Agreements",
    "Administrative Investigations",
    "Labour Disputes",
  ],
  "intellectual-property": [
    "Trademark Registration",
    "Oppositions and Appeals",
    "Anti-Counterfeiting",
    "Copyright Protection",
  ],
  "real-estate": [
    "Title Investigation",
    "Property Registration",
    "Real Estate Agreements",
    "Administrative Approvals",
  ],
  "licences-approvals": [
    "Import and Export Registration",
    "Industrial Licensing",
    "Pharmaceutical Approvals",
    "Specialized Permits",
  ],
  "legal-consultancy-research": [
    "Legal Opinions",
    "Compliance Audits",
    "Governance Policies",
    "Market Entry Studies",
  ],
  "residency-dual-nationality": [
    "Citizenship by Investment",
    "Investor Residency",
    "Dual Nationality",
    "Family Residency",
  ],
};
