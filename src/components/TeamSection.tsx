import { SITE_DATA } from "../data/siteData";
import type { TeamMember } from "../data/siteData";

interface TeamSectionProps {
  lang: "en" | "ar";
  onSelectMember: (member: TeamMember) => void;
}

export function TeamSection({ lang, onSelectMember }: TeamSectionProps) {
  const isAr = lang === "ar";

  return (
    <section id="team" className="py-24 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase font-bold tracking-widest text-[#293d7a] bg-[#293d7a]/10 px-3.5 py-1.5 rounded-full mb-3">
            {isAr ? "الكوادر والقيادات" : "Attorneys & Counsel"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#16254f] mb-4">
            {isAr ? "فريق عملنا ونخبة المحامين" : "Our People"}
          </h2>
          <div className="w-20 h-1 bg-[#c5a880] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isAr
              ? "يضم مكتبنا نخبة من كبار المحامين والمستشارين القانونيين ذوي الخبرات الأكاديمية والميدانية المتميزة أمام أعلى المحاكم المصرية والدولية."
              : "Distinguished legal minds uniting decades of court advocacy, doctorate scholarship, and elite cross-border corporate expertise."}
          </p>
        </div>

        {/* Founder Highlight & Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_DATA.team.map((member, index) => {
            const isFounder = index === 0;
            return (
              <div
                key={member.id}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col group ${
                  isFounder
                    ? "border-[#c5a880] md:col-span-2 lg:col-span-1 ring-1 ring-[#c5a880]/30"
                    : "border-slate-200 hover:border-[#293d7a]/40"
                }`}
              >
                {/* Image Container with portrait ratio */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={isAr ? member.nameAr : member.nameEn}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {isFounder && (
                    <div className="absolute top-3 left-3 bg-[#c5a880] text-[#0d172e] text-[11px] font-bold px-3 py-1 rounded shadow">
                      {isAr ? "مؤسس المكتب" : "Founder & Chief Attorney"}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs text-[#c5a880] font-semibold tracking-wider uppercase block mb-0.5">
                      {isAr ? member.titleAr : member.titleEn}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
                      {isAr ? member.nameAr : member.nameEn}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {isAr ? member.bioAr : member.bioEn}
                    </p>

                    {/* Specialty tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {(isAr ? member.specialtiesAr : member.specialtiesEn).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-[11px] bg-slate-100 text-[#16254f] font-medium px-2 py-0.5 rounded border border-slate-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectMember(member)}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#f1f5f9] hover:bg-[#293d7a] text-[#16254f] hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-slate-200 hover:border-transparent group/btn"
                  >
                    <span>{isAr ? "السيرة الذاتية الكاملة" : "Learn more"}</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
