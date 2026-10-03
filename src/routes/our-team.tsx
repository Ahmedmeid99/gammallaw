import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { TeamHero } from "../components/TeamHero";
import { TEAM_GROUPS, TEAM_MEMBERS } from "../data/teamCatalog";

export const Route = createFileRoute("/our-team")({
  component: OurTeamPage,
  head: () => ({
    meta: [
      { title: "Team Of Professionals | MG LAW" },
      {
        name: "description",
        content:
          "Meet the lawyers, consultants, associates, interns, and administrative professionals of MG Law Firm.",
      },
    ],
  }),
});

function OurTeamPage() {
  return (
    <div id="top" className="site-shell team-page">
      <SiteHeader />
      <TeamHero title="Our Team" />
      <main className="team-directory">
        <header className="team-directory-heading">
          <h2>Our People</h2>
        </header>

        {TEAM_GROUPS.map((group) => {
          const members = TEAM_MEMBERS.filter((member) => member.group === group);

          return (
            <section className="team-group" key={group} aria-labelledby={`group-${group}`}>
              <h2 id={`group-${group}`}>{group}</h2>
              <div className="team-grid">
                {members.map((member) => (
                  <a className="team-card" href={`/team/${member.slug}`} key={member.slug}>
                    <span className="team-card-image">
                      <img src={member.image} alt={member.name} loading="lazy" />
                      <span className="team-card-overlay">View profile</span>
                    </span>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <SiteFooter />
    </div>
  );
}
