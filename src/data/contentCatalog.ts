export interface CareerEntry {
  id: string;
  title: string;
  href: string;
  image: string;
  imagePosition?: string;
}

export interface NewsEntry {
  id: string;
  title: string;
  href: string;
  image: string;
  category: string;
  date: string;
  author: string;
  summary: string;
}

export const CAREER_CATALOG: CareerEntry[] = [
  {
    id: "legal-associate-position",
    title: "Legal Associate Position",
    href: "/career/legal-associate-position",
    image: "/reference-assets/career-associate.jpg",
  },
  {
    id: "legal-internship-program",
    title: "Legal Internship Program",
    href: "/career/legal-internship-program",
    image: "/reference-assets/career-internship.jpg",
  },
];

export const NEWS_CATALOG: NewsEntry[] = [
  {
    id: "infringement-of-a-registered-trademark",
    title: "Infringement of a Registered Trademark",
    href: "/news/infringement-of-a-registered-trademark",
    image: "/reference-assets/news-trademark-v2.jpg",
    category: "Intellectual Property",
    date: "23 March 2025",
    author: "admin",
    summary:
      "Article No. (113) of Egyptian Intellectual Property Law No. 82 of 2002 sets out the criminal penalties and protective measures available for trademark infringement.",
  },
  {
    id: "joint-stock-company-and-importers-register",
    title:
      "Requirements, Procedures, Timeline, and Options for establishing a Joint Stock Company and Registering in the Importers Register",
    href: "/news/joint-stock-company-and-importers-register",
    image: "/reference-assets/news-company-v2.jpg",
    category: "Contracts and Agreements",
    date: "27 May 2017",
    author: "admin",
    summary:
      "A practical legal opinion covering the documents, capital requirements, approvals, timeline, and registration steps for investors in Egypt.",
  },
];
