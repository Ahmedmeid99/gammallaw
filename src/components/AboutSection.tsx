import { useState } from "react";

interface AboutProps {
  lang: "en" | "ar";
}

export function AboutSection({ lang }: AboutProps) {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");
  const isAr = lang === "ar";

  const valuesList = [
    {
      nameEn: "Integrity",
      nameAr: "النزاهة والشفافية",
      descEn:
        "We uphold the highest ethical and professional standards in every matter entrusted to us.",
      descAr: "نلتزم بأعلى المعايير الأخلاقية والمهنية الصارمة في كل قضية ومعاملة نوكل بها.",
      icon: "⚖️",
    },
    {
      nameEn: "Excellence",
      nameAr: "التميز والجودة",
      descEn:
        "We pursue exceptional quality and meticulous precision in every legal action we handle.",
      descAr: "نسعى لتحقيق الجودة الاستثنائية والدقة المتناهية في صياغة الحلول والدفوع القانونية.",
      icon: "⭐",
    },
    {
      nameEn: "Client Focus",
      nameAr: "التركيز على الموكل",
      descEn:
        "We understand each client's unique objectives and provide solutions tailored specifically to their commercial goals.",
      descAr: "نتفهم بدقة أهداف كل موكل ونقدم حلولاً قانونية مخصصة تناسب استراتيجيته وتطلعاته.",
      icon: "🎯",
    },
    {
      nameEn: "Trust",
      nameAr: "الثقة المتبادلة",
      descEn:
        "We build enduring partnerships through unwavering transparency, strict confidentiality, and dependable counsel.",
      descAr: "نبني شراكات راسخة عبر الشفافية المطلقة، والسرية المصانة، والاعتمادية التي لا تتزعزع.",
      icon: "🤝",
    },
    {
      nameEn: "Innovation",
      nameAr: "الابتكار القانوني",
      descEn:
        "We adopt practical, modern, and forward-thinking approaches to solve multi-layered legal challenges.",
      descAr: "نبتكر حلولاً قانونية متطورة واستباقية لتجاوز العقبات الإجرائية المعقدة بحكمة.",
      icon: "💡",
    },
    {
      nameEn: "Commitment",
      nameAr: "الالتزام والتفاني",
      descEn:
        "We remain thoroughly dedicated, responsive, and accountable throughout every phase of representation.",
      descAr:
        "نكرس جهودنا ونبقى في أعلى درجات الاستجابة والمسؤولية عبر جميع مراحل التمثيل القانوني.",
      icon: "🔒",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#f4f7f7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase font-bold tracking-widest text-[#293d7a] bg-[#293d7a]/10 px-3.5 py-1.5 rounded-full mb-3">
            {isAr ? "عن مكتب إم جي لو" : "About MG Law Firm"}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#16254f] mb-6">
            {isAr ? "مكتب الدكتور محمد الجمال للمحاماة والاستشارات القانونية" : "MG Law Firm"}
          </h2>
          <div className="w-20 h-1 bg-[#c5a880] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {isAr
              ? "مكتب إم جي لو هو صرح قانوني مصري يقدم خدماته لنخبة واسعة ومتنوعة من الموكلين لأكثر من 25 عاماً، يشمل ذلك الشركات المحلية والدولية والشركات متعددة الجنسيات، والشركات الكبرى، والمؤسسات الصغيرة والمتوسطة والأفراد. نقدم خدماتنا القانونية محلياً ودولياً، وفق أعلى المعايير المصممة خصيصاً لتلبية متطلبات عملائنا."
              : "MG Law Firm is a premier Egyptian Law Firm that has been serving a diverse range of clients for over 25 years, including local, international, and multinational corporations, large enterprises, small and medium-sized enterprises (SMEs), and distinguished individuals. We offer our legal services locally and internationally, tailored to meet the specific needs of our clients."}
          </p>
        </div>

        {/* Strategic Pillars: Mission, Vision, Values */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden mb-12">
          {/* Tab Navigation Buttons */}
          <div className="grid grid-cols-3 border-b border-slate-200 bg-[#f8fafc]">
            <button
              onClick={() => setActiveTab("mission")}
              className={`py-4 sm:py-5 px-3 sm:px-6 text-xs sm:text-sm md:text-base font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "mission"
                  ? "bg-white text-[#293d7a] border-b-2 border-[#293d7a] shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>🎯</span>
              <span>{isAr ? "رسالتنا" : "Our Mission"}</span>
            </button>

            <button
              onClick={() => setActiveTab("vision")}
              className={`py-4 sm:py-5 px-3 sm:px-6 text-xs sm:text-sm md:text-base font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "vision"
                  ? "bg-white text-[#293d7a] border-b-2 border-[#293d7a] shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>🔭</span>
              <span>{isAr ? "رؤيتنا" : "Our Vision"}</span>
            </button>

            <button
              onClick={() => setActiveTab("values")}
              className={`py-4 sm:py-5 px-3 sm:px-6 text-xs sm:text-sm md:text-base font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "values"
                  ? "bg-white text-[#293d7a] border-b-2 border-[#293d7a] shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>💎</span>
              <span>{isAr ? "قيمنا الجوهرية" : "Our Values"}</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="p-6 sm:p-10">
            {activeTab === "mission" && (
              <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#293d7a]/10 text-[#293d7a] flex items-center justify-center text-3xl sm:text-4xl shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#16254f] mb-3">
                    {isAr ? "رسالة المكتب" : "Our Mission"}
                  </h3>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    {isAr
                      ? "تقديم حلول قانونية استراتيجية ومخصصة تركز على الواقع التجاري، لحماية مصالح موكلينا، ومواجهة تحدياتهم الفريدة، ودعم نجاحهم ونموهم المستدام على المدى الطويل."
                      : "To deliver strategic, tailored, and commercially focused legal solutions that protect our clients' interests, address their unique challenges, and support their long-term success."}
                  </p>
                </div>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center text-3xl sm:text-4xl shrink-0">
                  🔭
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#16254f] mb-3">
                    {isAr ? "رؤية المكتب" : "Our Vision"}
                  </h3>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    {isAr
                      ? "أن نكون الشريك القانوني الرائد والموثوق به، المعترف به بالتميز القانوني، والنزاهة المهنية، والتفكير الابتكاري، والالتزام الراسخ بنجاح عملائنا في مصر والمنطقة والعالم."
                      : "To be a leading and trusted law firm, recognized for legal excellence, professional integrity, innovative thinking, and an unwavering commitment to our clients."}
                  </p>
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {valuesList.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#293d7a]/30 hover:shadow-md transition-all group"
                  >
                    <div className="text-2xl mb-2">{val.icon}</div>
                    <h4 className="font-bold text-[#16254f] text-base mb-1.5 group-hover:text-[#293d7a] transition-colors">
                      {isAr ? val.nameAr : val.nameEn}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {isAr ? val.descAr : val.descEn}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#293d7a] text-white flex items-center justify-center shrink-0 font-bold">
              25+
            </div>
            <div>
              <h4 className="font-bold text-[#16254f] text-base mb-1">
                {isAr ? "خبرة عريقة متراكمة" : "Quarter Century Track Record"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {isAr
                  ? "أكثر من 25 عاماً من الترافع وصياغة الصفقات لكبرى الشركات والمستثمرين."
                  : "Over 25 years advising industry leaders, international investors, and government entities."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#c5a880] text-[#0d172e] flex items-center justify-center shrink-0 font-bold">
              ⚖️
            </div>
            <div>
              <h4 className="font-bold text-[#16254f] text-base mb-1">
                {isAr ? "ترافع أمام المحاكم العليا" : "High Courts Advocacy"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {isAr
                  ? "تمثيل موثوق أمام محكمة النقض، والمحكمة الإدارية العليا، ومراكز التحكيم."
                  : "Admitted before the Court of Cassation, Supreme Administrative Court, and arbitration tribunals."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#16254f] text-white flex items-center justify-center shrink-0 font-bold">
              🌐
            </div>
            <div>
              <h4 className="font-bold text-[#16254f] text-base mb-1">
                {isAr ? "معايير دولية وخدمة VIP" : "VIP Multilingual Standard"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {isAr
                  ? "صياغة واستشارات باللغتين العربية والإنجليزية لراحة المجموعات المتعددة الجنسيات."
                  : "Bilingual English and Arabic counsel serving foreign corporations and diplomatic expat missions."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
