import { SITE_DATA } from "../data/siteData";

interface ClientsShowcaseProps {
  lang: "en" | "ar";
}

export function ClientsShowcase({ lang }: ClientsShowcaseProps) {
  const isAr = lang === "ar";
  const clients = SITE_DATA.clients;

  return (
    <section id="clients" className="py-20 bg-[#ffffff] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs uppercase font-bold tracking-widest text-[#293d7a] bg-[#293d7a]/10 px-3.5 py-1.5 rounded-full mb-3">
            {isAr ? "شركاء النجاح" : "Corporate Trust"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#16254f] mb-3">
            {isAr ? "عملاؤنا المتميزون" : "Our Valued Clients"}
          </h2>
          <div className="w-16 h-1 bg-[#c5a880] mx-auto rounded-full mb-4" />
          <p className="text-slate-600 text-sm sm:text-base">
            {isAr
              ? "نفخر بتقديم الدعم القانوني الاستراتيجي المستمر لرواد الصناعة والتجارة والاستثمار والتعليم."
              : "Trusted by premier regional enterprises, multinational groups, institutions, and family offices."}
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="h-24 sm:h-28 p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-[#293d7a]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  // If image fails, show textual name in clean typography
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-xs font-bold text-slate-700 text-center">${client.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
