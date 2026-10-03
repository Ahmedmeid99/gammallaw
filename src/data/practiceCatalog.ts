import { SITE_DATA } from "./siteData";

const routeDetails = [
  ["corporate-commercial", "corporate_and_commercial", "practice-corporate.jpeg"],
  ["contracts-agreements", "contracts_and_agreements", "practice-contracts.jpeg"],
  ["civil-law-litigation", "civil_law_and_litigation", "practice-litigation.jpg"],
  ["labour-hr-services", "labour_law_and_hr_services", "practice-labour.jpg"],
  ["intellectual-property", "intellectual_property_protection", "practice-ip.jpeg"],
  ["real-estate", "real_estate", "practice-real-estate.jpeg"],
  ["licences-approvals", "licences_and_approvals", "practice-licences.jpeg"],
  ["legal-consultancy-research", "legal_consultancy_and_research", "practice-research.jpeg"],
  [
    "residency-dual-nationality",
    "residency_and_dual_nationality_passport",
    "practice-residency.jpg",
  ],
] as const;

export const PRACTICE_CATALOG = routeDetails.map(([id, serviceSlug, imageFile]) => {
  const area = SITE_DATA.practiceAreas.find((item) => item.id === id);
  if (!area) throw new Error(`Missing practice area: ${id}`);

  return {
    ...area,
    serviceSlug,
    localImage: `/reference-assets/${imageFile}`,
    href: `/services/${serviceSlug}`,
  };
});

export type PracticeCatalogItem = (typeof PRACTICE_CATALOG)[number];
