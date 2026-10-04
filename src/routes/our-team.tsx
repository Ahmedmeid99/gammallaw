import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { TeamHero } from "../components/TeamHero";
import {
  TEAM_DIRECTORY_ORDER,
  TEAM_GROUPS,
  TEAM_MEMBERS,
  TEAM_TRANSLATIONS_AR,
  type TeamGroup,
  type TeamMember,
} from "../data/teamCatalog";
import { useLanguage } from "../i18n/LanguageContext";
import { breadcrumbJsonLd, createSeoHead } from "../lib/seo";

export const Route = createFileRoute("/our-team")({
  component: OurTeamPage,
  head: () =>
    createSeoHead({
      title: "Our Lawyers and Legal Team | MG Law Firm Egypt",
      description:
        "Meet the partners, counsel, associates, corporate lawyers, and litigation lawyers at MG Law Firm in Egypt.",
      path: "/our-team",
      keywords: ["lawyers in Egypt", "corporate legal team Cairo", "litigation team Egypt"],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Our Team", path: "/our-team" },
      ]),
    }),
});

function OurTeamPage() {
  const { isArabic } = useLanguage();
  const groupLabels: Record<string, string> = {
    "Founding and Managing Partner": "الشريك المؤسس والمدير",
    Partners: "الشركاء",
    Councels: "المستشارون",
    "Managing Associates": "المحامون المديرون",
    "Corporate Team": "فريق الشركات",
    "Litigation Team": "فريق التقاضي",
  };

  const membersFor = (group: TeamGroup) =>
    (TEAM_DIRECTORY_ORDER[group] ?? []).flatMap((slug) => {
      const member = TEAM_MEMBERS.find((item) => item.slug === slug);
      return member ? [member] : [];
    });

  const renderGroup = (group: TeamGroup, className = "") => (
    <section
      className={`team-group ${className}`.trim()}
      key={group}
      aria-labelledby={`group-${group}`}
    >
      <h2 id={`group-${group}`}>{isArabic ? groupLabels[group] : group}</h2>
      <div className="team-grid">
        {membersFor(group).map((member) => (
          <TeamDirectoryCard member={member} isArabic={isArabic} key={member.slug} />
        ))}
      </div>
    </section>
  );

  return (
    <div id="top" className="site-shell team-page">
      <SiteHeader />
      <TeamHero title={isArabic ? "فريق العمل" : "Our Team"} />
      <main className="team-directory">
        <div className="team-leadership-row">
          {renderGroup(TEAM_GROUPS[0], "team-group-founder")}
          {renderGroup(TEAM_GROUPS[1], "team-group-partners")}
        </div>
        {TEAM_GROUPS.slice(2).map((group) => renderGroup(group))}
      </main>
      <SiteFooter />
    </div>
  );
}

function TeamDirectoryCard({ member, isArabic }: { member: TeamMember; isArabic: boolean }) {
  const translation = TEAM_TRANSLATIONS_AR[member.slug];
  const name = isArabic ? translation?.name || member.name : member.name;
  const role = isArabic ? translation?.role || member.role : member.role;

  return (
    <a className="team-card" href={`/team/${member.slug}`}>
      <span className={member.image ? "team-card-image" : "team-card-image is-placeholder"}>
        {member.image ? <img src={member.image} alt={name} loading="lazy" /> : <span />}
        <span className="team-card-overlay">{isArabic ? "عرض الملف" : "View profile"}</span>
      </span>
      <h3>{name}</h3>
      <p>{role}</p>
    </a>
  );
}
