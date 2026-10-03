import { SITE_DATA } from "./siteData";

const routeDetails = [
  ["corporate-commercial", "corporate_and_commercial", "practice-corporate-v2.jpg"],
  ["contracts-agreements", "contracts_and_agreements", "practice-contracts-v2.jpg"],
  ["civil-law-litigation", "civil_law_and_litigation", "practice-litigation-v2.jpg"],
  ["labour-hr-services", "labour_law_and_hr_services", "practice-labour-v2.jpg"],
  ["intellectual-property", "intellectual_property_protection", "practice-ip-v2.jpg"],
  ["real-estate", "real_estate", "practice-real-estate-v2.jpg"],
  ["licences-approvals", "licences_and_approvals", "practice-licences-v2.jpg"],
  ["legal-consultancy-research", "legal_consultancy_and_research", "practice-research-v2.jpg"],
  [
    "residency-dual-nationality",
    "residency_and_dual_nationality_passport",
    "practice-residency-v2.jpg",
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
