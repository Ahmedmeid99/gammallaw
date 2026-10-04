import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { CAREER_CATALOG, NEWS_CATALOG } from "../data/contentCatalog";
import { PRACTICE_CATALOG } from "../data/practiceCatalog";
import { SITE_DATA } from "../data/siteData";
import { useLanguage } from "../i18n/LanguageContext";

const navItems = [
  ["Home", "الرئيسية", "/"],
  ["About", "عن المكتب", "/about"],
  ["Our Team", "فريق العمل", "/our-team"],
  ["Careers", "الوظائف", "/careers"],
  ["News", "الأخبار", "/news"],
  ["Contact Us", "اتصل بنا", "/contact-us"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<"home" | "practice" | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { isArabic, setLanguage } = useLanguage();
  const location = useLocation();
  const practiceActive =
    location.pathname.startsWith("/practice-areas") || location.pathname.startsWith("/services/");
  const careersActive =
    location.pathname === "/careers" || location.pathname.startsWith("/career/");
  const newsActive = location.pathname === "/news" || location.pathname.startsWith("/news/");
  const teamActive = location.pathname === "/our-team" || location.pathname.startsWith("/team/");

  const searchItems = [
    ...PRACTICE_CATALOG.map((item) => ({
      title: isArabic ? item.titleAr : item.titleEn,
      type: isArabic ? "مجال قانوني" : "Practice Area",
      href: item.href,
    })),
    ...CAREER_CATALOG.map((item, index) => ({
      title: isArabic ? SITE_DATA.careers[index]?.titleAr || item.title : item.title,
      type: isArabic ? "وظيفة" : "Career",
      href: item.href,
    })),
    ...NEWS_CATALOG.map((item, index) => ({
      title: isArabic ? SITE_DATA.news[index]?.titleAr || item.title : item.title,
      type: isArabic ? "خبر" : "News",
      href: item.href,
    })),
  ];
  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery
    ? searchItems.filter((item) =>
        `${item.title} ${item.type}`.toLowerCase().includes(normalizedQuery),
      )
    : [];

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSubmenu(null);
    setSearchOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.classList.add("menu-is-open");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a
        className="logo-link"
        href="/"
        aria-label={isArabic ? "الصفحة الرئيسية لمكتب إم جي لو" : "MG Law Firm home"}
        onClick={closeMenu}
      >
        <img src="/reference-assets/logo.png" alt="MG Law Firm" />
      </a>
      <button
        className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
        aria-label={isArabic ? "فتح قائمة التنقل" : "Toggle navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      {menuOpen && (
        <button
          className="menu-backdrop"
          type="button"
          aria-label={isArabic ? "إغلاق قائمة التنقل" : "Close navigation"}
          onClick={closeMenu}
        />
      )}
      <nav
        className={menuOpen ? "main-nav is-open" : "main-nav"}
        aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}
      >
        <div className="home-nav-item nav-dropdown-item">
          <div className="nav-parent-row">
            <a
              className={location.pathname === "/" ? "active" : ""}
              href={navItems[0][2]}
              aria-current={location.pathname === "/" ? "page" : undefined}
              onClick={closeMenu}
            >
              {isArabic ? navItems[0][1] : navItems[0][0]}
            </a>
            <button
              className="mobile-submenu-toggle"
              type="button"
              aria-label={isArabic ? "عرض أقسام الرئيسية" : "Toggle home sections"}
              aria-expanded={mobileSubmenu === "home"}
              onClick={() => setMobileSubmenu((value) => (value === "home" ? null : "home"))}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m7 9.5 5 5 5-5" />
              </svg>
            </button>
          </div>
          <div
            className={
              mobileSubmenu === "home"
                ? "home-dropdown nav-submenu is-mobile-open"
                : "home-dropdown nav-submenu"
            }
            aria-label={isArabic ? "أقسام الرئيسية" : "Home sections"}
          >
            <a href="/#clients" onClick={closeMenu}>
              {isArabic ? "عملاؤنا المميزون" : "Our Valued Clients"}
            </a>
            <a href="/#reviews" onClick={closeMenu}>
              {isArabic ? "آراء العملاء" : "Client Reviews"}
            </a>
          </div>
        </div>
        <a
          className={location.pathname === "/about" ? "active" : ""}
          href={navItems[1][2]}
          aria-current={location.pathname === "/about" ? "page" : undefined}
          onClick={closeMenu}
        >
          {isArabic ? navItems[1][1] : navItems[1][0]}
        </a>
        <div className="practice-nav-item nav-dropdown-item">
          <div className="nav-parent-row">
            <a
              className={practiceActive ? "active" : ""}
              href="/practice-areas"
              aria-current={practiceActive ? "page" : undefined}
              onClick={closeMenu}
            >
              {isArabic ? "مجالات العمل" : "Practice Areas"}
            </a>
            <button
              className="mobile-submenu-toggle"
              type="button"
              aria-label={isArabic ? "عرض مجالات العمل" : "Toggle practice areas"}
              aria-expanded={mobileSubmenu === "practice"}
              onClick={() =>
                setMobileSubmenu((value) => (value === "practice" ? null : "practice"))
              }
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m7 9.5 5 5 5-5" />
              </svg>
            </button>
          </div>
          <div
            className={
              mobileSubmenu === "practice"
                ? "practice-dropdown nav-submenu is-mobile-open"
                : "practice-dropdown nav-submenu"
            }
            aria-label={isArabic ? "مجالات العمل" : "Practice areas"}
          >
            {PRACTICE_CATALOG.map((area) => (
              <a key={area.id} href={area.href} onClick={closeMenu}>
                {isArabic ? area.titleAr : area.titleEn}
              </a>
            ))}
          </div>
        </div>
        {navItems.slice(2).map(([labelEn, labelAr, href]) => {
          const active =
            (labelEn === "Our Team" && teamActive) ||
            (labelEn === "Careers" && careersActive) ||
            (labelEn === "News" && newsActive) ||
            (labelEn === "Contact Us" && location.pathname === "/contact-us");

          return (
            <a
              key={labelEn}
              className={active ? "active" : ""}
              href={href}
              aria-current={active ? "page" : undefined}
              onClick={closeMenu}
            >
              {isArabic ? labelAr : labelEn}
            </a>
          );
        })}
        <div className="language-nav-item">
          <div
            className="language-switcher"
            role="group"
            aria-label={isArabic ? "اختيار اللغة" : "Choose language"}
          >
            <button
              className={!isArabic ? "active" : ""}
              type="button"
              aria-pressed={!isArabic}
              aria-label="English"
              onClick={() => {
                setLanguage("en");
                closeMenu();
              }}
            >
              EN
            </button>
            <button
              className={isArabic ? "active" : ""}
              type="button"
              aria-pressed={isArabic}
              aria-label="العربية"
              onClick={() => {
                setLanguage("ar");
                closeMenu();
              }}
            >
              AR
            </button>
          </div>
        </div>
        <div className={searchOpen ? "search-nav-item is-open" : "search-nav-item"}>
          <button
            className="search-trigger"
            type="button"
            aria-label={isArabic ? "البحث" : "Search"}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.2" />
              <path d="m15.4 15.4 4.5 4.5" />
            </svg>
          </button>
          {searchOpen && (
            <div className="site-search-panel">
              <div className="site-search-inner">
                <svg className="site-search-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="10.8" cy="10.8" r="6.2" />
                  <path d="m15.4 15.4 4.5 4.5" />
                </svg>
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={
                    isArabic
                      ? "ابحث في الوظائف والأخبار ومجالات العمل"
                      : "Search careers, news and practice areas"
                  }
                  aria-label={
                    isArabic
                      ? "ابحث في الوظائف والأخبار ومجالات العمل"
                      : "Search careers, news and practice areas"
                  }
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label={isArabic ? "إغلاق البحث" : "Close search"}
                >
                  ×
                </button>
              </div>
              <div className="site-search-results" aria-live="polite">
                {!normalizedQuery && (
                  <p>
                    {isArabic
                      ? "ابدأ الكتابة للبحث في الموقع."
                      : "Start typing to search the website."}
                  </p>
                )}
                {normalizedQuery && results.length === 0 && (
                  <p>{isArabic ? "لا توجد نتائج." : "No results found."}</p>
                )}
                {results.map((result) => (
                  <a key={`${result.type}-${result.href}`} href={result.href} onClick={closeMenu}>
                    <span>{result.title}</span>
                    <small>{result.type}</small>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <a
          className={location.pathname === "/appointments" ? "appointment active" : "appointment"}
          href="/appointments"
          aria-current={location.pathname === "/appointments" ? "page" : undefined}
          onClick={closeMenu}
        >
          {isArabic ? "حجز موعد" : "Appointment"}
        </a>
      </nav>
    </header>
  );
}
