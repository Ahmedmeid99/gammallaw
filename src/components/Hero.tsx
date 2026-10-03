import { SITE_DATA } from "../data/siteData";

interface HeroProps {
  lang: "en" | "ar";
  onOpenAppointment: () => void;
}

export function Hero({ lang, onOpenAppointment }: HeroProps) {
  const isAr = lang === "ar";

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 bg-[#0c142b] overflow-hidden"
    >
      {/* Background textured gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#14234b]/90 via-[#0c142b]/95 to-[#090e1f] z-0" />

      {/* Subtle radial glow effects */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#293d7a]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Geometric background lines for architectural prestige */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        {/* Prestige badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b2a54]/80 border border-[#c5a880]/40 text-[#c5a880] text-xs sm:text-sm font-medium tracking-wide mb-8 shadow-sm backdrop-blur-sm animate-fade-in">
          <svg className="w-4 h-4 text-[#c5a880]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>
            {isAr
              ? "أكثر من 25 عاماً من التميز القانوني والريادة في مصر والشرق الأوسط"
              : "Over 25 Years of Serving Local, International & Multinational Clients"}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mb-6">
          {isAr ? (
            <>
              التميز القانوني <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9be9b] via-[#c5a880] to-[#f4dfc2]">
                مُصمم خصيصاً لك
              </span>
            </>
          ) : (
            <>
              Legal Excellence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9be9b] via-[#c5a880] to-[#f4dfc2]">
                Tailored to You
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          {isAr
            ? "نقدم حلولاً قانونية استراتيجية ومخصصة تحمي مصالحكم وتدعم طموحاتكم في كافة مجالات الشركات، والتقاضي، والاستثمار."
            : "We provide strategic, personalized legal solutions that protect your interests and support your ambitions across corporate, commercial, and high-court litigation."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 mb-16">
          <button
            onClick={onOpenAppointment}
            className="px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#c5a880] to-[#b38f59] hover:from-[#d2b68f] hover:to-[#c5a880] text-[#0d172e] font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] duration-200 flex items-center gap-2"
          >
            <span>{isAr ? "احجز استشارة قانونية" : "Book a Consultation"}</span>
            <svg
              className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>

          <a
            href="#practice-areas"
            className="px-6 py-3.5 rounded-lg bg-[#18264e]/80 hover:bg-[#203264] text-white border border-[#2b3e75] hover:border-[#c5a880]/50 font-semibold text-sm sm:text-base tracking-wide transition-all duration-200"
          >
            {isAr ? "استكشف مجالات العمل" : "Explore Practice Areas"}
          </a>

          <a
            href={`tel:${SITE_DATA.brand.phoneRaw}`}
            className="px-5 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-slate-700 font-medium text-sm sm:text-base tracking-wide transition-all flex items-center gap-2"
            dir="ltr"
          >
            <svg
              className="w-4 h-4 text-[#c5a880]"
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
            <span>{SITE_DATA.brand.phone}</span>
          </a>
        </div>

        {/* Stats Strip */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-800/80">
          {SITE_DATA.stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-[#142042]/50 border border-[#213366]/40 backdrop-blur-sm hover:border-[#c5a880]/30 transition-all text-center group"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#c5a880] mb-1 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                {isAr ? stat.labelAr : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom subtle wave separator */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#f4f7f7] to-transparent pointer-events-none" />
    </section>
  );
}
