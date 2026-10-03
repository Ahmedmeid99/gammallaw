import { SITE_DATA } from "../data/siteData";
import type { NewsArticle } from "../data/siteData";

interface NewsSectionProps {
  lang: "en" | "ar";
  onSelectArticle: (article: NewsArticle) => void;
}

export function NewsSection({ lang, onSelectArticle }: NewsSectionProps) {
  const isAr = lang === "ar";
  const articles = SITE_DATA.news;

  return (
    <section id="news" className="py-24 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase font-bold tracking-widest text-[#293d7a] bg-[#293d7a]/10 px-3.5 py-1.5 rounded-full mb-3">
            {isAr ? "رؤى وأبحاث" : "Legal Insights"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#16254f] mb-4">
            {isAr ? "الأخبار والآراء القانونية" : "News and Legal Opinions"}
          </h2>
          <div className="w-20 h-1 bg-[#c5a880] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isAr
              ? "تحليلات تشريعية معمقة وأحدث التطورات القانونية الصادرة من الإدارة القانونية بمكتب إم جي لو."
              : "Timely statutory analyses, regulatory commentaries, and procedural guides authored by our specialized practice groups."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#293d7a]/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => onSelectArticle(item)}
            >
              {/* Image banner */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={isAr ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80";
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#16254f]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm">
                  {isAr ? item.categoryAr : item.categoryEn}
                </div>
              </div>

              {/* Meta & title */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {item.date}
                    </span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#16254f] group-hover:text-[#293d7a] transition-colors leading-snug mb-3">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {isAr ? item.summaryAr : item.summaryEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#293d7a] group-hover:text-[#c5a880] transition-colors flex items-center gap-1">
                    <span>{isAr ? "اقرأ المقال كاملاً" : "Read full analysis"}</span>
                    <span>&rarr;</span>
                  </span>
                  <span className="text-[11px] text-slate-400">{item.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
