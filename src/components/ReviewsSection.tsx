import { useState } from "react";
import { SITE_DATA } from "../data/siteData";

interface ReviewsSectionProps {
  lang: "en" | "ar";
}

export function ReviewsSection({ lang }: ReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAr = lang === "ar";
  const reviews = SITE_DATA.reviews;
  const current = reviews[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-[#ffffff] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4f7f7] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase font-bold tracking-widest text-[#293d7a] bg-[#293d7a]/10 px-3.5 py-1.5 rounded-full mb-3">
            {isAr ? "شهادات موكلينا" : "Testimonials"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#16254f] mb-4">
            {isAr ? "آراء عملائنا وشركاء النجاح" : "Client Reviews"}
          </h2>
          <div className="w-20 h-1 bg-[#c5a880] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isAr
              ? "نعتز بثقة كبرى المؤسسات الوطنية والدولية ورجال الأعمال الذين واكبنا نجاحهم لأكثر من عقدين."
              : "Endorsements from corporate chairs, multinational directors, and esteemed enterprises who rely on MG Law Firm."}
          </p>
        </div>

        {/* Featured Testimonial Highlight Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#16254f] to-[#0e1938] text-white rounded-2xl p-8 sm:p-12 shadow-2xl border border-[#2a3c72] relative mb-12">
          {/* Large Quote Mark */}
          <div className="absolute top-6 right-8 text-[#c5a880]/20 font-serif text-8xl leading-none select-none pointer-events-none">
            “
          </div>

          {/* Star rating */}
          <div className="flex items-center gap-1 mb-6 text-[#c5a880]">
            {[...Array(current.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Review Text */}
          <blockquote className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-200 mb-8 italic">
            "{isAr ? current.reviewAr : current.reviewEn}"
          </blockquote>

          {/* Review Author & Company */}
          <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#293d7a]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white p-1 border-2 border-[#c5a880] shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={current.logo}
                  alt={isAr ? current.companyAr : current.companyEn}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#c5a880]">
                  {isAr ? current.authorAr : current.authorEn}
                </h4>
                <div className="text-xs sm:text-sm text-slate-300">
                  <span>{isAr ? current.roleAr : current.roleEn}</span> •{" "}
                  <span className="text-white font-medium">
                    {isAr ? current.companyAr : current.companyEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
                }
                className="w-10 h-10 rounded-full bg-[#20346b] hover:bg-[#c5a880] text-white hover:text-[#0d172e] flex items-center justify-center transition-all"
                aria-label="Previous Review"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
                }
                className="w-10 h-10 rounded-full bg-[#20346b] hover:bg-[#c5a880] text-white hover:text-[#0d172e] flex items-center justify-center transition-all"
                aria-label="Next Review"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip of all 6 Clients */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {reviews.map((rev, idx) => (
            <button
              key={rev.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-2 group ${
                currentIndex === idx
                  ? "bg-[#f4f7f7] border-[#293d7a] shadow-md ring-2 ring-[#293d7a]/20"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div className="w-10 h-10 rounded-lg p-1 bg-white border border-slate-200 flex items-center justify-center">
                <img
                  src={rev.logo}
                  alt={isAr ? rev.companyAr : rev.companyEn}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <span
                className={`text-[11px] font-semibold truncate max-w-full ${
                  currentIndex === idx ? "text-[#293d7a]" : "text-slate-600"
                }`}
              >
                {isAr ? rev.companyAr : rev.companyEn}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
