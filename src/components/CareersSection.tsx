import { SITE_DATA } from "../data/siteData";
import type { CareerOpportunity } from "../data/siteData";

interface CareersSectionProps {
  lang: "en" | "ar";
  onApply: (career: CareerOpportunity) => void;
}

export function CareersSection({ lang, onApply }: CareersSectionProps) {
  const isAr = lang === "ar";
  const careers = SITE_DATA.careers;

  return (
    <section id="careers" className="py-20 bg-[#f4f7f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs uppercase font-bold tracking-widest text-[#293d7a] bg-[#293d7a]/10 px-3.5 py-1.5 rounded-full mb-3">
            {isAr ? "الانضمام لفريقنا" : "Join Our Team"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#16254f] mb-3">
            {isAr ? "فرص التوظيف والتدريب" : "Career Opportunities"}
          </h2>
          <div className="w-16 h-1 bg-[#c5a880] mx-auto rounded-full mb-4" />
          <p className="text-slate-600 text-sm sm:text-base">
            {isAr
              ? "نبحث دوماً عن الكفاءات القانونية المتميزة والواعدة للانضمام إلى صرحنا والمشاركة في قضايا وصفقات كبرى."
              : "We invite ambitious legal practitioners and aspiring graduates to build exceptional legal careers at MG Law Firm."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {careers.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#293d7a]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <span className="text-xs font-bold text-[#293d7a] bg-[#293d7a]/10 px-3 py-1 rounded-full">
                    {isAr ? item.typeAr : item.typeEn}
                  </span>
                  <span className="text-xs text-slate-500">{item.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#16254f] mb-3">
                  {isAr ? item.titleAr : item.titleEn}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{isAr ? item.locationAr : item.locationEn}</span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onApply(item)}
                  className="px-5 py-2.5 rounded-lg bg-[#293d7a] hover:bg-[#1e73be] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-2"
                >
                  <span>{isAr ? "قدّم طلبك الآن" : "Apply Now"}</span>
                  <span>&rarr;</span>
                </button>
                <a
                  href={`mailto:careers@gammallaw.com?subject=Application for ${item.titleEn}`}
                  className="text-xs text-slate-500 hover:text-[#293d7a] transition-colors"
                >
                  careers@gammallaw.com
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
