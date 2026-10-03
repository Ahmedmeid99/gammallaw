import { SITE_DATA } from "../data/siteData";
import type { PracticeArea } from "../data/siteData";

interface FooterProps {
  lang: "en" | "ar";
  onSelectPracticeArea: (area: PracticeArea) => void;
  onOpenAppointment: () => void;
}

export function Footer({ lang, onSelectPracticeArea, onOpenAppointment }: FooterProps) {
  const isAr = lang === "ar";

  return (
    <footer className="bg-[#090f20] text-slate-400 border-t border-[#1b2b54] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#18264d]">
          {/* Brand info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1e326e] to-[#0c142b] p-1 border border-[#c5a880]/40 flex items-center justify-center">
                <span className="font-serif font-bold text-[#c5a880] text-lg">MG</span>
              </div>
              <div>
                <span className="text-white font-serif font-bold text-xl tracking-wider block">
                  MG LAW FIRM
                </span>
                <span className="text-[11px] text-[#c5a880] tracking-wider block font-medium">
                  {isAr ? SITE_DATA.brand.taglineAr : SITE_DATA.brand.taglineEn}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {isAr
                ? "مكتب مصري عريق يقدم خدماته لنخبة من كبرى الشركات المحلية ومتعددة الجنسيات والمستثمرين لأكثر من 25 عاماً في كافة فروع القانون المصري والتحكيم الدولي."
                : "A premier Egyptian law practice delivering elite corporate, commercial, and high-court litigation representation to multinational corporations, institutions, and high-net-worth investors."}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="bg-[#c5a880] hover:bg-[#d4b993] text-[#0d172e] text-xs font-bold px-4 py-2 rounded shadow transition-all"
              >
                {isAr ? "احجز موعد استشارة" : "Request Consultation"}
              </button>
            </div>
          </div>

          {/* Practice Areas (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white mb-4 border-b border-[#1f305e] pb-2">
              {isAr ? "مجالات التخصص" : "Practice Areas"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SITE_DATA.practiceAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => onSelectPracticeArea(area)}
                  className="text-left hover:text-[#c5a880] transition-colors py-1 truncate text-slate-300 flex items-center gap-1 group"
                >
                  <span className="text-[#c5a880] text-[10px] group-hover:translate-x-0.5 transition-transform">
                    ›
                  </span>
                  <span className="truncate">{isAr ? area.titleAr : area.titleEn}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick links & Offices (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-white mb-4 border-b border-[#1f305e] pb-2">
                {isAr ? "المقرات وساعات العمل" : "Our Cairo Offices"}
              </h4>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-semibold text-slate-200">
                    {isAr ? "مكتب الزمالك:" : "Zamalek Office:"}
                  </div>
                  <div className="text-slate-400">35B Mohamed Mazhar St., Zamalek, Cairo</div>
                  <div className="text-[#c5a880]" dir="ltr">
                    +20 2 2735 3328
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-slate-200">
                    {isAr ? "مكتب المهندسين:" : "Mohandesin Office:"}
                  </div>
                  <div className="text-slate-400">54 Lebanon Street, Mohandesin, Giza</div>
                  <div className="text-[#c5a880]" dir="ltr">
                    +20 2 3344 3648
                  </div>
                </div>

                <div className="pt-1 text-slate-400">
                  <span className="font-semibold text-slate-300">
                    {isAr ? "ساعات العمل: " : "Hours: "}
                  </span>
                  {isAr ? SITE_DATA.brand.workingHoursAr : SITE_DATA.brand.workingHoursEn}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-xs uppercase font-bold text-slate-300 mb-2">
                {isAr ? "تابعنا على" : "Follow Us"}
              </div>
              <div className="flex items-center gap-2">
                {["LinkedIn", "Facebook", "Twitter", "YouTube"].map((network) => (
                  <a
                    key={network}
                    href="https://gammallaw.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded bg-[#152347] hover:bg-[#c5a880] text-slate-300 hover:text-[#0d172e] flex items-center justify-center text-xs font-bold transition-all"
                  >
                    {network[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>El Gammal &copy; 2026. All rights reserved. MG LAW FIRM.</div>
          <div className="flex gap-4">
            <a href="#hero" className="hover:text-slate-300 transition-colors">
              {isAr ? "الرئيسية" : "Home"}
            </a>
            <a href="#about" className="hover:text-slate-300 transition-colors">
              {isAr ? "عن المكتب" : "About"}
            </a>
            <a href="#practice-areas" className="hover:text-slate-300 transition-colors">
              {isAr ? "المجالات" : "Practice Areas"}
            </a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              {isAr ? "اتصل بنا" : "Contact"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
