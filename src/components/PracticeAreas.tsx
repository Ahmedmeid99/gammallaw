import { useState } from "react";
import { SITE_DATA } from "../data/siteData";
import type { PracticeArea } from "../data/siteData";

interface PracticeAreasProps {
  lang: "en" | "ar";
  onSelectArea: (area: PracticeArea) => void;
  onOpenAppointment: () => void;
}

export function PracticeAreas({ lang, onSelectArea, onOpenAppointment }: PracticeAreasProps) {
  const [filter, setFilter] = useState<string>("all");
  const isAr = lang === "ar";

  const categories = [
    { id: "all", labelEn: "All Areas (9)", labelAr: "كافة المجالات (9)" },
    { id: "corporate", labelEn: "Corporate & Contracts", labelAr: "الشركات والعقود" },
    { id: "litigation", labelEn: "Litigation & Labour", labelAr: "التقاضي والعمل" },
    { id: "ip-realestate", labelEn: "IP & Real Estate", labelAr: "الملكية الفكرية والعقارات" },
    { id: "licences-residency", labelEn: "Licensing & Residency", labelAr: "التراخيص والإقامة" },
  ];

  const filteredAreas = SITE_DATA.practiceAreas.filter((area) => {
    if (filter === "all") return true;
    if (
      filter === "corporate" &&
      (area.id === "corporate-commercial" ||
        area.id === "contracts-agreements" ||
        area.id === "legal-consultancy-research")
    )
      return true;
    if (
      filter === "litigation" &&
      (area.id === "civil-law-litigation" || area.id === "labour-hr-services")
    )
      return true;
    if (
      filter === "ip-realestate" &&
      (area.id === "intellectual-property" || area.id === "real-estate")
    )
      return true;
    if (
      filter === "licences-residency" &&
      (area.id === "licences-approvals" || area.id === "residency-dual-nationality")
    )
      return true;
    return false;
  });

  return (
    <section id="practice-areas" className="py-24 bg-[#14234b] text-white relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#14234b] via-[#101c3d] to-[#0c142b] z-0" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#293d7a]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs uppercase font-bold tracking-widest text-[#c5a880] bg-[#c5a880]/10 px-3.5 py-1.5 rounded-full mb-3 border border-[#c5a880]/20">
            {isAr ? "خدماتنا وتخصصاتنا" : "What We Offer"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {isAr ? "مجالات تخصصنا القانوني" : "Our Areas"}
          </h2>
          <div className="w-20 h-1 bg-[#c5a880] mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {isAr
              ? "نغطي مجموعة شاملة من الخدمات القانونية التخصصية لدعم الشركات والمستثمرين والأفراد محلياً ودولياً وفق أرقى المعايير القانونية."
              : "Comprehensive specialized legal counsel engineered to protect corporations, entrepreneurs, and global investors under Egyptian and international jurisdiction."}
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === cat.id
                  ? "bg-[#c5a880] text-[#0d172e] shadow-md scale-105"
                  : "bg-[#1b2b57] text-slate-300 hover:text-white hover:bg-[#233870] border border-[#2b417e]/40"
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="bg-[#182752] rounded-xl overflow-hidden border border-[#273a6f] hover:border-[#c5a880]/50 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with mask and hover effect */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                <img
                  src={area.image}
                  alt={isAr ? area.titleAr : area.titleEn}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if original image fails
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182752] via-transparent to-black/20" />

                {/* Tag pill */}
                <div className="absolute top-3 left-3 bg-[#0d172e]/80 backdrop-blur-sm border border-[#c5a880]/30 text-[#c5a880] text-[11px] font-semibold px-2.5 py-1 rounded">
                  {isAr ? area.tagAr : area.tagEn}
                </div>
              </div>

              {/* Content info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-wider mb-1.5">
                    {isAr ? "ما نقدمه" : "What we offer"}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#c5a880] transition-colors leading-snug">
                    {isAr ? area.titleAr : area.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {isAr ? area.shortDescAr : area.shortDescEn}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#25376a] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectArea(area)}
                    className="text-xs sm:text-sm font-bold text-[#c5a880] hover:text-white transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>{isAr ? "المزيد من التفاصيل" : "More info"}</span>
                    <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">
                      &rarr;
                    </span>
                  </button>

                  <button
                    onClick={onOpenAppointment}
                    className="text-xs bg-[#24376c] hover:bg-[#c5a880] text-slate-200 hover:text-[#0d172e] px-3 py-1.5 rounded transition-all font-medium"
                  >
                    {isAr ? "استشارة" : "Consult"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practice area bottom banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#1b2b57] to-[#121c3b] border border-[#2b417e] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              {isAr
                ? "هل تحتاج إلى استشارة في مسألة قانونية خاصة؟"
                : "Need specialized counsel for your corporate or personal case?"}
            </h3>
            <p className="text-sm text-slate-300">
              {isAr
                ? "فريقنا من كبار المحامين والمستشارين متاح لتقييم موقفك القانوني وتحديد الإجراءات الفعالة."
                : "Our senior partners and legal consultants are prepared to provide immediate statutory assessment."}
            </p>
          </div>
          <button
            onClick={onOpenAppointment}
            className="px-6 py-3 rounded-lg bg-[#c5a880] hover:bg-[#d8bb93] text-[#0d172e] font-bold text-sm tracking-wide shrink-0 transition-all shadow-md"
          >
            {isAr ? "احجز موعد استشارة الآن" : "Schedule a Consultation"}
          </button>
        </div>
      </div>
    </section>
  );
}
