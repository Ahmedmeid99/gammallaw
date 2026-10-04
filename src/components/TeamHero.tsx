type TeamHeroProps = {
  title: string;
  memberName?: string;
};

export function TeamHero({ title, memberName }: TeamHeroProps) {
  const { isArabic } = useLanguage();
  return (
    <section className="team-hero" aria-labelledby="team-hero-title">
      <div className="team-hero-inner">
        <h1 id="team-hero-title">{title}</h1>
        <div className="breadcrumbs" aria-label={isArabic ? "مسار الصفحة" : "Breadcrumb"}>
          <a href="/">{isArabic ? "الرئيسية" : "Home"}</a>
          <span aria-hidden="true">›</span>
          {memberName ? (
            <>
              <a href="/our-team">{isArabic ? "فريق العمل" : "Our Team"}</a>
              <span aria-hidden="true">›</span>
              <strong>{memberName}</strong>
            </>
          ) : (
            <strong>{isArabic ? "فريق العمل" : "Our Team"}</strong>
          )}
        </div>
      </div>
    </section>
  );
}
import { useLanguage } from "../i18n/LanguageContext";
