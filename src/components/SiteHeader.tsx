import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { CAREER_CATALOG, NEWS_CATALOG } from "../data/contentCatalog";
import { PRACTICE_CATALOG } from "../data/practiceCatalog";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Our Team", "/our-team"],
  ["Careers", "/careers"],
  ["News", "/news"],
  ["Contact Us", "/contact-us"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<"home" | "practice" | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const practiceActive =
    location.pathname.startsWith("/practice-areas") || location.pathname.startsWith("/services/");
  const careersActive =
    location.pathname === "/careers" || location.pathname.startsWith("/career/");
  const newsActive = location.pathname === "/news" || location.pathname.startsWith("/news/");
  const teamActive = location.pathname === "/our-team" || location.pathname.startsWith("/team/");

  const searchItems = [
    ...PRACTICE_CATALOG.map((item) => ({
      title: item.titleEn,
      type: "Practice Area",
      href: item.href,
    })),
    ...CAREER_CATALOG.map((item) => ({ title: item.title, type: "Career", href: item.href })),
    ...NEWS_CATALOG.map((item) => ({ title: item.title, type: "News", href: item.href })),
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
      <a className="logo-link" href="/" aria-label="MG Law Firm home" onClick={closeMenu}>
        <img src="/reference-assets/logo.png" alt="MG Law Firm" />
      </a>
      <button
        className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
        aria-label="Toggle navigation"
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
          aria-label="Close navigation"
          onClick={closeMenu}
        />
      )}
      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        <div className="home-nav-item nav-dropdown-item">
          <div className="nav-parent-row">
            <a
              className={location.pathname === "/" ? "active" : ""}
              href={navItems[0][1]}
              aria-current={location.pathname === "/" ? "page" : undefined}
              onClick={closeMenu}
            >
              Home
            </a>
            <button
              className="mobile-submenu-toggle"
              type="button"
              aria-label="Toggle home sections"
              aria-expanded={mobileSubmenu === "home"}
              onClick={() => setMobileSubmenu((value) => (value === "home" ? null : "home"))}
            >
              <span>⌄</span>
            </button>
          </div>
          <div
            className={
              mobileSubmenu === "home"
                ? "home-dropdown nav-submenu is-mobile-open"
                : "home-dropdown nav-submenu"
            }
            aria-label="Home sections"
          >
            <a href="/#clients" onClick={closeMenu}>
              Our Valued Clients
            </a>
            <a href="/#reviews" onClick={closeMenu}>
              Client Reviews
            </a>
          </div>
        </div>
        <a
          className={location.pathname === "/about" ? "active" : ""}
          href={navItems[1][1]}
          aria-current={location.pathname === "/about" ? "page" : undefined}
          onClick={closeMenu}
        >
          About
        </a>
        <div className="practice-nav-item nav-dropdown-item">
          <div className="nav-parent-row">
            <a
              className={practiceActive ? "active" : ""}
              href="/practice-areas"
              aria-current={practiceActive ? "page" : undefined}
              onClick={closeMenu}
            >
              Practice Areas
            </a>
            <button
              className="mobile-submenu-toggle"
              type="button"
              aria-label="Toggle practice areas"
              aria-expanded={mobileSubmenu === "practice"}
              onClick={() =>
                setMobileSubmenu((value) => (value === "practice" ? null : "practice"))
              }
            >
              <span>⌄</span>
            </button>
          </div>
          <div
            className={
              mobileSubmenu === "practice"
                ? "practice-dropdown nav-submenu is-mobile-open"
                : "practice-dropdown nav-submenu"
            }
            aria-label="Practice areas"
          >
            {PRACTICE_CATALOG.map((area) => (
              <a key={area.id} href={area.href} onClick={closeMenu}>
                {area.titleEn}
              </a>
            ))}
          </div>
        </div>
        {navItems.slice(2).map(([label, href]) => {
          const active =
            (label === "Our Team" && teamActive) ||
            (label === "Careers" && careersActive) ||
            (label === "News" && newsActive) ||
            (label === "Contact Us" && location.pathname === "/contact-us");

          return (
            <a
              key={label}
              className={active ? "active" : ""}
              href={href}
              aria-current={active ? "page" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          );
        })}
        <div className="language-nav-item">
          <span className="language" aria-label="English language selected">
            <img src="/reference-assets/flag-en.png" alt="" />
            <span>EN</span>
          </span>
        </div>
        <button
          className="search-trigger"
          type="button"
          aria-label="Search"
          aria-expanded={searchOpen}
          onClick={() => setSearchOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.2" />
            <path d="m15.4 15.4 4.5 4.5" />
          </svg>
        </button>
        <a
          className={location.pathname === "/appointments" ? "appointment active" : "appointment"}
          href="/appointments"
          aria-current={location.pathname === "/appointments" ? "page" : undefined}
          onClick={closeMenu}
        >
          Appointment
        </a>
      </nav>
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
              placeholder="Search careers, news and practice areas"
              aria-label="Search careers, news and practice areas"
            />
            <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
              ×
            </button>
          </div>
          <div className="site-search-results" aria-live="polite">
            {!normalizedQuery && <p>Start typing to search the website.</p>}
            {normalizedQuery && results.length === 0 && <p>No results found.</p>}
            {results.map((result) => (
              <a key={`${result.type}-${result.href}`} href={result.href} onClick={closeMenu}>
                <span>{result.title}</span>
                <small>{result.type}</small>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
