import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { TeamHero } from "../components/TeamHero";
import { TEAM_MEMBERS } from "../data/teamCatalog";

export const Route = createFileRoute("/team/$memberId")({
  component: TeamMemberPage,
  head: ({ params }) => {
    const member = TEAM_MEMBERS.find((item) => item.slug === params.memberId);
    return {
      meta: [
        { title: `${member?.name ?? "Team Member"} | MG LAW` },
        member
          ? { name: "description", content: `${member.name}, ${member.role} at MG Law Firm.` }
          : {},
      ],
    };
  },
});

function TeamMemberPage() {
  const { memberId } = Route.useParams();
  const member = TEAM_MEMBERS.find((item) => item.slug === memberId);

  if (!member) {
    return (
      <div id="top" className="site-shell">
        <SiteHeader />
        <main className="service-missing">
          <h1>Team member not found</h1>
          <a href="/our-team">Return to Our People</a>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div id="top" className="site-shell team-member-page">
      <SiteHeader />
      <main>
        <TeamHero title={member.name} memberName={member.name} />

        <article className="team-member-content">
          <header className="team-member-heading">
            <div>
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
            <a className="team-appointment" href="/appointments">
              Appointment
            </a>
          </header>

          <div className="team-member-layout">
            <img className="team-member-photo" src={member.image} alt={member.name} />
            <div className="team-member-biography">
              <p>{member.biography}</p>
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
