import { useState, useEffect } from "react";
import { SITE_DATA } from "../data/siteData";
import type { PracticeArea } from "../data/siteData";

interface HeaderProps {
  lang: "en" | "ar";
  onToggleLang: (lang: "en" | "ar") => void;
  onOpenAppointment: () => void;
  onSelectPracticeArea: (area: PracticeArea) => void;
}

export function Header({
  lang,
  onToggleLang,
  onOpenAppointment,
  onSelectPracticeArea,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAr = lang === "ar";

  const navLinks = [
    { href: "#hero", labelEn: "Home", labelAr: "الرئيسية" },
    { href: "#about", labelEn: "About", labelAr: "من نحن" },
    {
      href: "#practice-areas",
      labelEn: "Practice Areas",
      labelAr: "مجالات العمل",
      hasDropdown: true,
    },
    { href: "#clients", labelEn: "Our Valued Clients", labelAr: "عملاؤنا" },
    { href: "#reviews", labelEn: "Client Reviews", labelAr: "آراء العملاء" },
    { href: "#team", labelEn: "Our Team", labelAr: "فريق العمل" },
    { href: "#careers", labelEn: "Careers", labelAr: "الوظائف" },
    { href: "#news", labelEn: "News & Opinions", labelAr: "الأخبار والمقالات" },
    { href: "#contact", labelEn: "Contact Us", labelAr: "اتصل بنا" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top utility bar */}
      <div className="bg-[#121c38] text-slate-300 text-xs border-b border-[#243566]/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center gap-3">
          {/* Left info: Working hours and phone */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <svg
                className="w-3.5 h-3.5 text-[#c5a880]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{isAr ? SITE_DATA.brand.workingHoursAr : SITE_DATA.brand.workingHoursEn}</span>
            </div>

            <a
              href={`tel:${SITE_DATA.brand.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#c5a880] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-[#c5a880]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium tracking-wider" dir="ltr">
                {SITE_DATA.brand.phone}
              </span>
            </a>

            <a
              href={`mailto:${SITE_DATA.brand.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#c5a880] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-[#c5a880]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{SITE_DATA.brand.email}</span>
            </a>
          </div>

          {/* Right actions: Appointment trigger and Language switch */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="bg-[#c5a880] hover:bg-[#d8bb93] text-[#0d172e] px-3 py-1 rounded text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow"
            >
              {isAr ? "طلب موعد استشارة" : "Book Appointment"}
            </button>

            {/* Language toggle */}
            <div className="flex items-center border border-slate-700 rounded overflow-hidden text-xs">
              <button
                onClick={() => onToggleLang("en")}
                className={`px-2 py-0.5 transition-colors font-medium ${
                  lang === "en" ? "bg-[#293d7a] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onToggleLang("ar")}
                className={`px-2 py-0.5 transition-colors font-medium ${
                  lang === "ar" ? "bg-[#293d7a] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                عربي
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#16254f]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-[#293d7a]/50"
            : "bg-[#16254f] py-4 border-b border-[#243566]/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-[#1e326e] to-[#0c142b] p-1 border border-[#c5a880]/40 shadow-inner flex items-center justify-center overflow-hidden">
              <img
                src={SITE_DATA.brand.logoImage}
                alt="MG LAW"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if image blocked
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="font-serif font-bold text-[#c5a880] text-lg tracking-wider">MG</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold text-lg sm:text-xl tracking-wider font-serif">
                  MG LAW
                </span>
                <span className="text-[#c5a880] text-xs font-semibold uppercase tracking-widest hidden sm:inline">
                  FIRM
                </span>
              </div>
              <span className="text-slate-300 text-[10px] sm:text-xs tracking-wider font-medium">
                {isAr ? SITE_DATA.brand.taglineAr : SITE_DATA.brand.taglineEn}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setPracticeDropdownOpen(true)}
                    onMouseLeave={() => setPracticeDropdownOpen(false)}
                  >
                    <a
                      href={item.href}
                      className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-200 hover:text-[#c5a880] transition-colors rounded flex items-center gap-1 group"
                    >
                      <span>{isAr ? item.labelAr : item.labelEn}</span>
                      <svg
                        className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#c5a880] transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>

                    {/* Dropdown Menu */}
                    {practiceDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-[#121c38] border border-[#2a3c74] rounded-lg shadow-2xl py-2 mt-1 z-50 backdrop-blur-lg animate-fade-in">
                        <div className="px-3 py-1.5 border-b border-slate-700/50 mb-1">
                          <span className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-wider">
                            {isAr ? "مجالات التخصص القانوني" : "All Practice Areas"}
                          </span>
                        </div>
                        {SITE_DATA.practiceAreas.map((area) => (
                          <button
                            key={area.id}
                            onClick={() => {
                              setPracticeDropdownOpen(false);
                              onSelectPracticeArea(area);
                            }}
                            className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-[#1f3061] transition-colors flex items-center justify-between group"
                          >
                            <span>{isAr ? area.titleAr : area.titleEn}</span>
                            <span className="text-[10px] text-slate-400 group-hover:text-[#c5a880]">
                              &rarr;
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium text-slate-200 hover:text-[#c5a880] transition-colors rounded"
                >
                  {isAr ? item.labelAr : item.labelEn}
                </a>
              );
            })}
          </div>

          {/* Quick CTA button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="bg-transparent border border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0d172e] px-4 py-2 rounded text-xs xl:text-sm font-semibold tracking-wide transition-all shadow-sm duration-200"
            >
              {isAr ? "استشارة فورية" : "Consultation"}
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu slideout */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121c38] border-b border-[#293d7a] px-4 pt-3 pb-6 shadow-2xl animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-[#1a2954] hover:text-[#c5a880] rounded transition-colors"
                >
                  {isAr ? item.labelAr : item.labelEn}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-700/60 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full bg-[#c5a880] text-[#0d172e] py-2.5 rounded font-semibold text-sm shadow text-center"
                >
                  {isAr ? "احجز استشارة قانونية" : "Book Legal Consultation"}
                </button>
                <div className="flex justify-between items-center text-xs text-slate-400 pt-1">
                  <span>{isAr ? "لغات الموقع:" : "Switch Language:"}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onToggleLang("en")}
                      className={`px-2.5 py-1 rounded text-xs ${
                        lang === "en" ? "bg-[#293d7a] text-white font-bold" : "text-slate-400"
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => onToggleLang("ar")}
                      className={`px-2.5 py-1 rounded text-xs ${
                        lang === "ar" ? "bg-[#293d7a] text-white font-bold" : "text-slate-400"
                      }`}
                    >
                      العربية
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
