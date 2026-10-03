type TeamHeroProps = {
  title: string;
  memberName?: string;
};

export function TeamHero({ title, memberName }: TeamHeroProps) {
  return (
    <section className="team-hero" aria-labelledby="team-hero-title">
      <div className="team-hero-inner">
        <h1 id="team-hero-title">{title}</h1>
        <div className="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          {memberName ? (
            <>
              <a href="/our-team">Our Team</a>
              <span aria-hidden="true">›</span>
              <strong>{memberName}</strong>
            </>
          ) : (
            <strong>Our Team</strong>
          )}
        </div>
      </div>
    </section>
  );
}
