import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { TeamHero } from "../components/TeamHero";
import { TEAM_MEMBERS, TEAM_TRANSLATIONS_AR } from "../data/teamCatalog";
import { useLanguage } from "../i18n/LanguageContext";
import { SITE_URL, breadcrumbJsonLd, createSeoHead } from "../lib/seo";

export const Route = createFileRoute("/team/$memberId")({
  component: TeamMemberPage,
  head: ({ params }) => {
    const member = TEAM_MEMBERS.find((item) => item.slug === params.memberId);
    const name = member?.name ?? "MG Law Firm Team Member";
    const path = `/team/${params.memberId}`;
    const image = member?.image ? `${SITE_URL}${member.image}` : undefined;
    return createSeoHead({
      title: `${name} | ${member?.role ?? "Legal Professional"} at MG Law Firm`,
      description: member
        ? `Learn about ${member.name}, ${member.role} at MG Law Firm in Egypt, including experience, practice focus, and professional background.`
        : "Meet the legal professionals of MG Law Firm in Egypt.",
      path,
      image,
      type: "profile",
      keywords: member ? [`${member.name} lawyer`, `${member.role} Egypt`] : [],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          name,
          jobTitle: member?.role,
          image,
          url: `${SITE_URL}${path}`,
          worksFor: { "@id": `${SITE_URL}/#organization` },
        },
        breadcrumb: breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Team", path: "/our-team" },
          { name, path },
        ]),
      },
    });
  },
});

function TeamMemberPage() {
  const { isArabic } = useLanguage();
  const { memberId } = Route.useParams();
  const member = TEAM_MEMBERS.find((item) => item.slug === memberId);
  const localizedMember = TEAM_TRANSLATIONS_AR[memberId];

  if (!member) {
    return (
      <div id="top" className="site-shell">
        <SiteHeader />
        <main className="service-missing">
          <h1>{isArabic ? "عضو الفريق غير موجود" : "Team member not found"}</h1>
          <a href="/our-team">{isArabic ? "العودة إلى فريق العمل" : "Return to Our People"}</a>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div id="top" className="site-shell team-member-page">
      <SiteHeader />
      <main>
        <TeamHero
          title={isArabic && localizedMember ? localizedMember.name : member.name}
          memberName={isArabic && localizedMember ? localizedMember.name : member.name}
        />

        <article className="team-member-content">
          <header className="team-member-heading">
            <div>
              <h2>{isArabic && localizedMember ? localizedMember.name : member.name}</h2>
              <p>{isArabic && localizedMember ? localizedMember.role : member.role}</p>
            </div>
            <a className="team-appointment" href="/appointments">
              {isArabic ? "حجز موعد" : "Appointment"}
            </a>
          </header>

          <div className="team-member-layout">
            {member.image ? (
              <img
                className="team-member-photo"
                src={member.image}
                alt={isArabic && localizedMember ? localizedMember.name : member.name}
              />
            ) : (
              <div className="team-member-photo team-member-photo-placeholder" aria-hidden="true">
                <span>MG</span>
              </div>
            )}
            <div className="team-member-biography">
              <p>{isArabic && localizedMember ? localizedMember.biography : member.biography}</p>
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
