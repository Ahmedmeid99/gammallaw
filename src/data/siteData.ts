export interface PracticeArea {
  id: string;
  titleEn: string;
  titleAr: string;
  image: string;
  shortDescEn: string;
  shortDescAr: string;
  detailsEn: string[];
  detailsAr: string[];
  tagEn: string;
  tagAr: string;
}

export interface ClientReview {
  id: string;
  authorEn: string;
  authorAr: string;
  companyEn: string;
  companyAr: string;
  roleEn: string;
  roleAr: string;
  reviewEn: string;
  reviewAr: string;
  logo: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  nameEn: string;
  nameAr: string;
  titleEn: string;
  titleAr: string;
  image: string;
  bioEn: string;
  bioAr: string;
  specialtiesEn: string[];
  specialtiesAr: string[];
}

export interface CareerOpportunity {
  id: string;
  titleEn: string;
  titleAr: string;
  typeEn: string;
  typeAr: string;
  date: string;
  locationEn: string;
  locationAr: string;
  descEn: string;
  descAr: string;
}

export interface NewsArticle {
  id: string;
  titleEn: string;
  titleAr: string;
  date: string;
  author: string;
  categoryEn: string;
  categoryAr: string;
  image: string;
  summaryEn: string;
  summaryAr: string;
  readTime: string;
}

export const SITE_DATA = {
  brand: {
    name: "MG LAW",
    taglineEn: "The Best In Legal Services",
    taglineAr: "الأفضل في الخدمات القانونية",
    logoImage: "https://gammallaw.com/wp-content/uploads/2026/09/download-1.png",
    logoBlue: "https://gammallaw.com/wp-content/uploads/2025/02/MG-Logo-Blue.jpeg.jpg",
    phone: "+20 2 2735 3328",
    phoneRaw: "+20227353328",
    altPhone: "+20 2 3344 3648",
    email: "info@gammallaw.com",
    workingHoursEn: "Sun - Thu: 9:00am - 6:00pm",
    workingHoursAr: "الأحد - الخميس: 9:00 ص - 6:00 م",
  },
  stats: [
    { value: "25+", labelEn: "Years of Experience", labelAr: "عاماً من الخبرة" },
    { value: "500+", labelEn: "Legal Matters & Cases", labelAr: "قضية واستشارة منجزة" },
    { value: "100+", labelEn: "Multinational & Corporate Clients", labelAr: "عميل مؤسسي ودولي" },
    {
      value: "2",
      labelEn: "Offices in Cairo (Zamalek & Mohandesin)",
      labelAr: "مقران في القاهرة (الزمالك والمهندسين)",
    },
  ],
  offices: [
    {
      nameEn: "Mazhar Office (Zamalek)",
      nameAr: "مكتب مظهر (الزمالك)",
      addressEn: "35B Mohamed Mazhar St., Zamalek, Cairo, Egypt",
      addressAr: "35 ب شارع محمد مظهر، الزمالك، القاهرة، مصر",
      phone: "+20 2 2735 3328",
      email: "info@gammallaw.com",
      hoursEn: "Sun - Thu: 9:00 am – 6:00 pm",
      hoursAr: "الأحد - الخميس: 9:00 ص – 6:00 م",
      mapUrl: "https://maps.google.com/?q=35B+Mohamed+Mazhar+St+Zamalek+Cairo",
    },
    {
      nameEn: "Mohandesin Office",
      nameAr: "مكتب المهندسين",
      addressEn: "54 Lebanon Street, Mohandesin, Giza, Egypt",
      addressAr: "54 شارع لبنان، المهندسين، الجيزة، مصر",
      phone: "+20 2 3344 3648",
      email: "info@gammallaw.com",
      hoursEn: "Sun - Thu: 9:00 am – 6:00 pm",
      hoursAr: "الأحد - الخميس: 9:00 ص – 6:00 م",
      mapUrl: "https://maps.google.com/?q=54+Lebanon+Street+Mohandesin",
    },
  ],
  practiceAreas: [
    {
      id: "residency-dual-nationality",
      titleEn: "Residency and Dual Nationality Passport",
      titleAr: "الإقامة وجواز السفر والجنسية المزدوجة",
      image: "https://gammallaw.com/wp-content/uploads/2017/07/pexels-fauxels-3183197-370x211.jpg",
      tagEn: "Immigration & Nationality",
      tagAr: "الهجرة والجنسية",
      shortDescEn:
        "Comprehensive legal assistance for foreign investors, dual nationality acquisition, Egyptian citizenship programs, and executive residency permits.",
      shortDescAr:
        "خدمات شاملة للمستثمرين الأجانب للحصول على الإقامة، واكتساب الجنسية المزدوجة وبرامج الجنسية المصرية.",
      detailsEn: [
        "Citizenship by investment programs and real estate acquisition processing",
        "Investor work and residence permits representation before GAFI and Interior Ministry",
        "Dual nationality declarations, exemptions, and consular validations",
        "Family residency permits and international expatriate corporate relocation",
      ],
      detailsAr: [
        "برامج الحصول على الجنسية المصرية عبر الاستثمار وشراء العقارات",
        "استخراج وتجديد إقامات وتصاريح عمل المستثمرين أمام هيئة الاستثمار ووزارة الداخلية",
        "توفيق أوضاع الجنسية المزدوجة والإعفاءات الرسمية وتوثيقها بالقنصليات",
        "إقامات أسر المستثمرين والكوادر الأجنبية للمجموعات متعددة الجنسيات",
      ],
    },
    {
      id: "corporate-commercial",
      titleEn: "Corporate and Commercial",
      titleAr: "الشركات والقانون التجاري",
      image: "https://gammallaw.com/wp-content/uploads/2017/07/AdobeStock_484646577-370x211.jpeg",
      tagEn: "Corporate Law",
      tagAr: "قانون الشركات",
      shortDescEn:
        "End-to-end corporate structuring, incorporation of Joint Stock & LLC entities, M&A due diligence, and regulatory governance.",
      shortDescAr:
        "تأسيس الشركات بكافة أنواعها، والشركات المساهمة، وعمليات الاندماج والاستحواذ، والحوكمة المؤسسية.",
      detailsEn: [
        "Incorporation of Joint Stock Companies (JSC), LLCs, branch offices, and foreign rep offices",
        "Structuring Ordinary and Extraordinary General Assemblies (OGM / EGM) and Board resolutions",
        "Mergers & Acquisitions (M&A) legal due diligence and equity restructuring",
        "Capital increase, stock issuance, commercial register updates, and GAFI compliance",
      ],
      detailsAr: [
        "تأسيس الشركات المساهمة وذات المسؤولية المحدودة والفروع ومكاتب التمثيل الأجنبية",
        "تنظيم واعتماد الجمعيات العامة العادية وغير العادية ومجالس الإدارة",
        "الفحص النافي للجهالة لصفقات الاندماج والاستحواذ وإعادة هيكلة رؤوس الأموال",
        "إجراءات زيادة رأس المال وإصدار الأسهم وتعديل السجلات التجارية أمام هيئة الاستثمار",
      ],
    },
    {
      id: "contracts-agreements",
      titleEn: "Contracts and Agreements",
      titleAr: "العقود والاتفاقيات",
      image: "https://gammallaw.com/wp-content/uploads/2017/07/AdobeStock_360266061-370x211.jpeg",
      tagEn: "Commercial Contracts",
      tagAr: "العقود التجارية",
      shortDescEn:
        "Precision drafting and negotiation of complex commercial agreements, shareholder pacts, supply chains, and international trade contracts.",
      shortDescAr:
        "صياغة وتدقيق العقود التجارية المعقدة، واتفاقيات المساهمين، وعقود التوريد والتجارة الدولية.",
      detailsEn: [
        "Bespoke drafting and bilingual negotiation of commercial, distribution, and franchise contracts",
        "Shareholder agreements, joint venture pacts, and non-disclosure arrangements",
        "Supply chain, procurement, EPC agreements, and concession contracts",
        "Contractual risk assessment, dispute prevention clauses, and jurisdiction analysis",
      ],
      detailsAr: [
        "صياغة وتفاوض العقود التجارية وعقود التوزيع والامتياز التجاري (الفرنشايز) باللغتين",
        "اتفاقيات المساهمين والمشاريع المشتركة واتفاقيات السرية وعدم المنافسة",
        "عقود التوريد والمقاولات والإنشاءات والتشغيل",
        "تقييم المخاطر التعاقدية ووضع بنود فض المنازعات وحماية حقوق الموكل",
      ],
    },
    {
      id: "civil-law-litigation",
      titleEn: "Civil Law and Litigation",
      titleAr: "القانون المدني والتقاضي",
      image:
        "https://gammallaw.com/wp-content/uploads/2017/07/WhatsApp-Image-2025-06-01-at-11.53.25_792964e6-370x211.jpg",
      tagEn: "Litigation & Dispute Resolution",
      tagAr: "التقاضي وفض النزاعات",
      shortDescEn:
        "Aggressive courtroom advocacy and representation before all judicial bodies including the Court of Cassation and Supreme Administrative Court.",
      shortDescAr:
        "تمثيل قانوني رفيع المستوى أمام المحاكم بجميع درجاتها ومحكمة النقض والمحكمة الإدارية العليا.",
      detailsEn: [
        "Representation before Court of First Instance, Courts of Appeal, and Court of Cassation",
        "Litigation before the State Council (Supreme Administrative Court) and administrative bodies",
        "Commercial dispute resolution, urgent precautionary seizures, and execution of judgments",
        "Domestic and international arbitration representation and settlement negotiation",
      ],
      detailsAr: [
        "المرافعة والتمثيل أمام المحاكم الابتدائية والاستئناف ومحكمة النقض",
        "التقاضي أمام محاكم مجلس الدولة والمحكمة الإدارية العليا في المنازعات الحكومية والإدارية",
        "إجراءات الحجز التحفظي والتنفيذي وتحصيل الحقوق وتنفيذ الأحكام القضائية",
        "التمثيل في قضايا التحكيم التجاري المحلي والدولي والمفاوضات الودية",
      ],
    },
    {
      id: "labour-hr-services",
      titleEn: "Labour Law and HR Services",
      titleAr: "قانون العمل والموارد البشرية",
      image:
        "https://gammallaw.com/wp-content/uploads/2025/02/pexels-tima-miroshnichenko-7009611-370x211.jpg",
      tagEn: "Employment & Labour",
      tagAr: "العمل والعمال",
      shortDescEn:
        "Complete employment regulatory compliance, drafting compliant HR bylaws, administrative investigations, and labor dispute resolution.",
      shortDescAr:
        "الامتثال لقوانين العمل ولوائح الموارد البشرية، وإجراء التحقيقات الإدارية وفض المنازعات العمالية.",
      detailsEn: [
        "Formulation of certified internal work regulations and sanction lists approved by the Labour Office",
        "Drafting executive employment agreements, confidentiality covenants, and non-compete clauses",
        "Conducting formal administrative investigations and managing disciplinary procedures",
        "Defending corporations against unlawful termination lawsuits and social insurance audit claims",
      ],
      detailsAr: [
        "إعداد واعتماد لوائح العمل والجزاءات الداخلية من وزارة القوى العاملة ومكاتب العمل",
        "صياغة عقود العمل للكوادر التنفيذية وبنود المحافظة على السرية وعدم المنافسة",
        "إدارة التحقيقات الإدارية مع الموظفين وتطبيق الإجراءات التأديبية القانونية",
        "التمثيل والدفاع في الدعاوى العمالية والنزاعات مع التأمينات الاجتماعية",
      ],
    },
    {
      id: "intellectual-property",
      titleEn: "Intellectual Property Protection",
      titleAr: "حماية الملكية الفكرية",
      image: "https://gammallaw.com/wp-content/uploads/2017/07/AdobeStock_315171499-370x211.jpeg",
      tagEn: "IP & Trademarks",
      tagAr: "العلامات والملكية الفكرية",
      shortDescEn:
        "Safeguarding valuable brands, trademark registration across Egypt & MENA, anti-counterfeiting enforcement, and patent protection.",
      shortDescAr:
        "حماية وتسجيل العلامات التجارية وبراءات الاختراع ومكافحة التعدي والتقليد في مصر والمنطقة.",
      detailsEn: [
        "Filing, tracking, and securing trademark registrations at the Egyptian Trademark Office",
        "Oppositions, cancelation actions, and appellate defense against trademark infringements",
        "Combating counterfeiting and unauthorized brand utilization through law enforcement raids",
        "Copyright registrations for creative, software, and technological assets",
      ],
      detailsAr: [
        "تسجيل ومتابعة وحماية العلامات التجارية لدى مصلحة التسجيل التجاري بمصر",
        "تقديم المعارضات والطعون القضائية ضد محاولات سرقة أو تشابه العلامات التجارية",
        "اتخاذ الإجراءات الجنائية والمدنية وضبط البضائع المقلدة وحماية سمعة العلامة",
        "تسجيل حقوق المؤلف والمصنفات الفنية والبرمجيات",
      ],
    },
    {
      id: "real-estate",
      titleEn: "Real Estate",
      titleAr: "العقارات والاستثمار العقاري",
      image: "https://gammallaw.com/wp-content/uploads/2025/02/AdobeStock_409566193-370x211.jpeg",
      tagEn: "Real Estate & Notarization",
      tagAr: "التسجيل والشهر العقاري",
      shortDescEn:
        "Strategic advisory on high-value property acquisitions, title deeds investigation, Real Estate Registry notarization, and leasing contracts.",
      shortDescAr:
        "استشارات الصفقات العقارية الكبرى، وفحص الملكية، وإجراءات الشهر العقاري والتوثيق، وعقود الإيجار والتطوير.",
      detailsEn: [
        "Title investigation, chain-of-title verification, and encumbrance searches across land registries",
        "Registration of commercial and residential assets under Law 9 of 2022 (Real Estate Notarization)",
        "Drafting sale and purchase agreements (SPA), lease agreements, and construction developer pacts",
        "Handling administrative approvals with the New Urban Communities Authority (NUCA)",
      ],
      detailsAr: [
        "الفحص القانوني لحجج الملكية وسلسلة العقود والتأكد من خلو العقار من أي رهون أو نزاعات",
        "إجراءات التسجيل والشهر العقاري طبقا لأحدث التعديلات التشريعية (القانون 9 لسنة 2022)",
        "صياغة عقود البيع والشراء والإيجار والاتفاقيات مع المطورين العقاريين",
        "إنهاء الإجراءات والتراخيص مع هيئة المجتمعات العمرانية الجديدة والأجهزة المحلية",
      ],
    },
    {
      id: "licences-approvals",
      titleEn: "Licences And Approvals",
      titleAr: "التراخيص والموافقات الحكومية",
      image: "https://gammallaw.com/wp-content/uploads/2017/07/AdobeStock_379265482-370x211.jpeg",
      tagEn: "Regulatory & Licensing",
      tagAr: "التراخيص والجهات الرسمية",
      shortDescEn:
        "Navigating governmental approvals, industrial licenses, EDA pharmaceutical clearances, and registration in the Importers Register.",
      shortDescAr:
        "استخراج التراخيص الصناعية والتجارية، وموافقات هيئة الدواء، والقيد في سجل المستوردين والمصدرين.",
      detailsEn: [
        "Registration in the Importers Register (General Organization for Export and Import Control - GOEIC)",
        "Industrial Development Authority (IDA) operating licenses and industrial registry permits",
        "Egyptian Drug Authority (EDA) regulatory approvals for pharmaceutical and health sectors",
        "Tourism, environmental, and specialized ministerial permits",
      ],
      detailsAr: [
        "القيد وتجديد القيد في سجل المستوردين والمصدرين بالهيئة العامة للرقابة على الصادرات والواردات",
        "استخراج رخص التشغيل والسجل الصناعي من الهيئة العامة للتنمية الصناعية",
        "موافقات هيئة الدواء المصرية (EDA) لشركات الأدوية والمستلزمات الطبية",
        "تراخيص المنشآت السياحية والبيئية والموافقات الوزارية المتخصصة",
      ],
    },
    {
      id: "legal-consultancy-research",
      titleEn: "Legal Consultancy and Research",
      titleAr: "الاستشارات القانونية والبحوث",
      image: "https://gammallaw.com/wp-content/uploads/2017/05/AdobeStock_276969060-370x211.jpeg",
      tagEn: "Advisory & Research",
      tagAr: "الاستشارات والأبحاث",
      shortDescEn:
        "In-depth legal opinions, compliance audits, legislative risk evaluation, and bespoke institutional advisory for executive leadership.",
      shortDescAr:
        "تقديم الآراء القانونية المتعمقة، والتدقيق النظامي، وتقييم المخاطر التشريعية للإدارات التنفيذية.",
      detailsEn: [
        "Written expert legal opinions on ambiguous statutory interpretations and emerging jurisprudence",
        "Corporate compliance audits ensuring conformity with Egyptian and international regulatory frameworks",
        "Drafting internal policy charters, corporate governance codes, and compliance manuals",
        "Legal feasibility studies for international corporations entering the Egyptian market",
      ],
      detailsAr: [
        "تقديم فتاوى وآراء قانونية معتمدة حول المسائل المعقدة والمستحدثة في القانون المصري",
        "إجراء المراجعات القانونية الدورية للتأكد من توافق أعمال الشركة مع القوانين والقرارات الوزارية",
        "صياغة مذكرات الحوكمة وأدلة الامتثال المؤسسي",
        "دراسات الجدوى القانونية للمستثمرين الدوليين الراغبين في دخول السوق المصري",
      ],
    },
  ],
  reviews: [
    {
      id: "el-sirgany",
      authorEn: "Mahmoud El Sirgany",
      authorAr: "محمود السرجاني",
      companyEn: "Mahmoud El Sirgany Joailleries",
      companyAr: "محمود السرجاني للمجوهرات",
      roleEn: "Managing Director",
      roleAr: "المدير العام",
      logo: "https://gammallaw.com/wp-content/uploads/2025/06/تصميم-بدون-عنوان-30-90x90.png",
      rating: 5,
      reviewEn:
        "We at Mahmoud El Sirgany Joailleries would like to express our deep appreciation for the outstanding legal support provided by Mohamed Mostafa El Gammal Lawyer Office. Since 2024 and until today, we have maintained a strong and successful working relationship built on trust, professionalism, and efficiency. The firm has consistently supported us in various legal matters, handling contracts, consultations, protecting our brand and trademark, ensuring our rights are well preserved in a competitive market or urgent matters. Their responses have always been timely and solutions-oriented.",
      reviewAr:
        "نود نحن في مجوهرات محمود السرجاني أن نعرب عن عميق تقديرنا للدعم القانوني المتميز المقدم من مكتب الدكتور محمد مصطفى الجمال. منذ عام 2024 وحتى اليوم، نحافظ على علاقة عمل قوية وناجحة مبنية على الثقة والاحترافية والكفاءة. لقد دعمنا المكتب باستمرار في مختلف المسائل القانونية، وصياغة العقود، وحماية علامتنا التجارية، مما يضمن صون حقوقنا دائماً.",
    },
    {
      id: "ims",
      authorEn: "Dr. Ahmed Taher",
      authorAr: "د. أحمد طاهر",
      companyEn: "Integrated Marketing Solutions",
      companyAr: "إنتيجريتد ماركتنج سوليوشنز",
      roleEn: "Chairman & CEO",
      roleAr: "رئيس مجلس الإدارة والرئيس التنفيذي",
      logo: "https://gammallaw.com/wp-content/uploads/2025/06/تصميم-بدون-عنوان-28-90x90.png",
      rating: 5,
      reviewEn:
        "Dr. Mohamed ElGammal and his associates at MG Law have consistently handled all our corporate and personal legal matters with exceptional precision, efficiency, and excellence. Their VIP-level service isn't an exception—it's their standard approach to every client interaction. Beyond their legal expertise, the intellectual professional exchanges are genuinely enjoyable and add tremendous value to our business relationship. Working with MG Law feels like joining an elite business club. Their 25-year track record speaks for itself.",
      reviewAr:
        "لقد تعامل الدكتور محمد الجمال وفريق عمله في إم جي لو باستمرار مع جميع شؤوننا القانونية المؤسسية والشخصية بدقة وكفاءة وتميز استثنائي. خدمتهم ذات المستوى الرفيع VIP ليست استثناءً بل هي نهجهم القياسي المعتاد. علاوة على خبرتهم القانونية العميقة، فإن العمل معهم يمنحك شعور الشراكة الراقية والاطمئنان الكامل، وتاريخهم الممتد لأكثر من 25 عاماً يتحدث عن نفسه.",
    },
    {
      id: "aug-pharma",
      authorEn: "AUG Pharma Executive Board",
      authorAr: "الإدارة التنفيذية لشركة أوغ فارما",
      companyEn: "AUG Pharma",
      companyAr: "أوغ فارما للأدوية",
      roleEn: "Pharmaceutical Leaders",
      roleAr: "قيادة قطاع الأدوية",
      logo: "https://gammallaw.com/wp-content/uploads/2025/05/تصميم-بدون-عنوان-36-90x90.png",
      rating: 5,
      reviewEn:
        "I would like to express my sincere appreciation for the outstanding legal services provided by MG LAW FIRM. The firm has consistently demonstrated the highest levels of professionalism, efficiency, and reliability in all our interactions. In particular, I would like to extend my gratitude to Mr. Ahmed El-Gamal and the corporate team whose dedication, expertise, and collaborative spirit have been instrumental in supporting us through various corporate structuring procedures. Their deep legal insight made a significant difference.",
      reviewAr:
        "أود أن أعرب عن خالص تقديري للخدمات القانونية المتميزة التي تقدمها شركة إم جي لو للمحاماة، حيث أظهرت الشركة باستمرار أعلى مستويات المهنية والكفاءة والموثوقية في جميع تعاملاتنا. ونخص بالشكر الأستاذ أحمد الجمال والفريق القانوني الذين كان لتفانيهم ورؤيتهم القانونية العميقة أثر بالغ في إنجاز إجراءات إعادة الهيكلة بنجاح باهر.",
    },
    {
      id: "tuv-nord",
      authorEn: "TUV NORD Regional Directorate",
      authorAr: "الإدارة الإقليمية لتوف نورد",
      companyEn: "TUV NORD",
      companyAr: "توف نورد العالمية",
      roleEn: "International Certification Group",
      roleAr: "مجموعة الاعتماد الدولي",
      logo: "https://gammallaw.com/wp-content/uploads/2025/05/تصميم-بدون-عنوان-24-90x90.png",
      rating: 5,
      reviewEn:
        "El Gammal Law Office has been an invaluable partner for our company, providing expert legal guidance with professionalism and efficiency. Their deep understanding of corporate law and proactive approach have consistently delivered favorable outcomes, making them a trusted resource for navigating complex legal challenges. I highly recommend their services to any business seeking reliable and comprehensive legal support.",
      reviewAr:
        "كان مكتب الجمال للمحاماة شريكاً لا غنى عنه لشركتنا، حيث يقدم التوجيه القانوني المتخصص بمهنية وكفاءة عالية. إن فهمهم العميق لقانون الشركات ونهجهم الاستباقي يحقق دائماً أفضل النتائج القانونية، مما يجعلهم السند الموثوق لمواجهة التحديات المعقدة. أوصي بشدة بخدماتهم لأي شركة تبحث عن دعم قانوني شامل وموثوق.",
    },
    {
      id: "habitat",
      authorEn: "Habitat Egypt Leadership",
      authorAr: "إدارة شركة هابيتات مصر",
      companyEn: "Habitat",
      companyAr: "هابيتات للمراتب والمفروشات",
      roleEn: "Leading Manufacturing & Retail",
      roleAr: "رائدة الصناعة والتجزئة",
      logo: "https://gammallaw.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-19-at-22.57.44_3372a7e8-90x90.jpg",
      rating: 5,
      reviewEn:
        "The MG Law team consistently supports us in establishing branch companies, handling labor-related cases, and representing us during internal administrative investigations. They have also efficiently managed all procedures related to obtaining work residencies for our investors. Furthermore, the firm has taken full responsibility for organizing and overseeing our ordinary and extraordinary general assemblies, as well as property acquisitions.",
      reviewAr:
        "يدعمنا فريق إم جي لو باستمرار في تأسيس فروع الشركات، وإدارة القضايا العمالية والتحقيقات الإدارية الداخلية، بالإضافة إلى استخراج إقامات العمل للمستثمرين. كما تولى المكتب بكفاءة تنظيم وإشراف الجمعيات العامة العادية وغير العادية، وتقديم المشورة في الاستحواذ على العقارات الاستراتيجية في مصر وخارجها.",
    },
    {
      id: "eslsca",
      authorEn: "ESLSCA University Administration",
      authorAr: "إدارة جامعة إسلسكا مصر",
      companyEn: "ESLSCA University",
      companyAr: "جامعة إسلسكا الفرنسية",
      roleEn: "Higher Education Institution",
      roleAr: "مؤسسة التعليم العالي الدولية",
      logo: "https://gammallaw.com/wp-content/uploads/2025/03/تصميم-بدون-عنوان-18-90x90.png",
      rating: 5,
      reviewEn:
        "We have been collaborating with MG for 10 years, and they have provided outstanding legal support for our institution's expansion. Their team guided us through complex contract negotiations and ensured full compliance with local regulations. Their professionalism and responsiveness set them apart from other firms we've worked with.",
      reviewAr:
        "لقد تعاونا مع مكتب إم جي لو لأكثر من 10 سنوات، وقدموا دعماً قانونياً رائعاً لتوسعات مؤسستنا التعليمية. قادنا فريقهم خلال مفاوضات العقود المعقدة وضمن الامتثال التام للوائح والقرارات التنظيمية، وتميزهم وسرعة استجابتهم تجعلهم الشريك الأمثل.",
    },
  ],
  team: [
    {
      id: "mohammed-el-gammal",
      nameEn: "Dr. Mohammed El-Gammal",
      nameAr: "د. محمد الجمال",
      titleEn: "Chief Attorney & Founder",
      titleAr: "المحامي بالنقض ومؤسس المكتب",
      image: "https://gammallaw.com/wp-content/uploads/2017/07/A1-2-1.jpg",
      bioEn:
        "Dr. Mohamed El-Gammal is a seasoned attorney with over 20 years of experience. He holds a Bachelor of Laws from Cairo University, followed by a Master of Public Law and a Ph.D. in Law from Tanta University. Dr. El-Gammal has effectively represented multinational corporations and prominent figures in high-profile lawsuits before high courts, showcasing his exceptional legal skills, scholarly depth, and strategic vision.",
      bioAr:
        "الدكتور محمد الجمال محامٍ بالنقض يتمتع بخبرة تزيد عن 20 عاماً. حاصل على ليسانس الحقوق من جامعة القاهرة، ثم ماجستير في القانون العام، ودكتوراه في القانون من جامعة طنطا. مثل كبرى الشركات الدولية والمحلية في قضايا بارزة أمام المحاكم العليا ومحكمة النقض برؤية استراتيجية متمكنة.",
      specialtiesEn: [
        "High-Profile Litigation",
        "Constitutional & Public Law",
        "Corporate Strategy",
        "High Courts Advocacy",
      ],
      specialtiesAr: [
        "التقاضي أمام المحاكم العليا",
        "القانون العام والدستوري",
        "استراتيجيات الشركات",
        "المرافعة أمام محكمة النقض",
      ],
    },
    {
      id: "mohamed-fathy",
      nameEn: "Mohamed Fathy",
      nameAr: "محمد فتحي",
      titleEn: "Executive Counsel",
      titleAr: "المستشار التنفيذي",
      image: "https://gammallaw.com/wp-content/uploads/2017/07/13.jpg",
      bioEn:
        "Mr. Mohamed Fathy is an experienced attorney specializing in corporate law, real estate matters, and notarization procedures. He holds a Bachelor of Laws from Cairo University and has been actively practicing law since 2002. Throughout his career, he has proven his proficiency in negotiating and drafting civil and commercial contracts, guiding large property registrations and statutory approvals.",
      bioAr:
        "الأستاذ محمد فتحي محامٍ ومستشار تنفيذي متخصص في قانون الشركات والشؤون العقارية والتوثيق. حاصل على ليسانس الحقوق من جامعة القاهرة ويمارس المحاماة منذ عام 2002. أثبت كفاءة مشهودة في صياغة العقود التجارية والمدنية وإجراءات الشهر العقاري والموافقات الرسمية.",
      specialtiesEn: [
        "Real Estate Law",
        "Corporate Structuring",
        "Notarization & Title Deeds",
        "Commercial Agreements",
      ],
      specialtiesAr: [
        "القانون العقاري",
        "هيكلة الشركات",
        "التوثيق والشهر العقاري",
        "العقود التجارية",
      ],
    },
    {
      id: "ahmed-fathy-el-gammal",
      nameEn: "Ahmed Fathy El-Gammal",
      nameAr: "أحمد فتحي الجمال",
      titleEn: "Executive Counsel",
      titleAr: "المستشار التنفيذي",
      image: "https://gammallaw.com/wp-content/uploads/2017/07/9.jpg",
      bioEn:
        "Mr. Ahmed El-Gammal combines high academic achievement with extensive commercial legal experience. He graduated from Cairo University Faculty of Law (English Department) and has been practicing since 2009. He specializes in corporate law, cross-border M&A transactions, legal due diligence, and regulatory compliance for international entities.",
      bioAr:
        "الأستاذ أحمد فتحي الجمال يجمع بين التميز الأكاديمي والخبرة العملية الواسعة. تخرج من كلية الحقوق بجامعة القاهرة (قسم اللغة الإنجليزية) ويمارس المحاماة منذ 2009. خبير في صياغة العقود، وصفقات الاندماج والاستحواذ، والفحص النافي للجهالة، والامتثال التنظيمي للشركات متعددة الجنسيات.",
      specialtiesEn: [
        "Mergers & Acquisitions",
        "Cross-Border Transactions",
        "Due Diligence",
        "Bilingual Contract Drafting",
      ],
      specialtiesAr: [
        "الاندماج والاستحواذ",
        "المعاملات الدولية",
        "الفحص النافي للجهالة",
        "صياغة العقود بالإنجليزية",
      ],
    },
    {
      id: "alaa-mandour",
      nameEn: "Alaa Mandour",
      nameAr: "علاء مندور",
      titleEn: "Legal Consultant",
      titleAr: "المستشار القانوني بالنقض",
      image: "https://gammallaw.com/wp-content/uploads/2025/02/01030030127-14.jpg",
      bioEn:
        "Mr. Alaa Mandour is a veteran legal consultant with over three decades of distinguished practice. Holding a Bachelor of Laws from Cairo University, he has litigated numerous complex civil, commercial, and administrative cases before the Supreme Administrative Court and the Court of Cassation.",
      bioAr:
        "الأستاذ علاء مندور مستشار قانوني مخضرم يتمتع بأكثر من 30 عاماً من الخبرة في محراب العدالة. حاصل على ليسانس الحقوق من جامعة القاهرة، وترافع بنجاح في مئات القضايا المدنية والتجارية والإدارية أمام المحكمة الإدارية العليا ومحكمة النقض.",
      specialtiesEn: [
        "Court of Cassation Appeals",
        "Supreme Administrative Court",
        "Complex Civil Disputes",
        "Strategic Arbitration",
      ],
      specialtiesAr: [
        "طعون محكمة النقض",
        "المحكمة الإدارية العليا",
        "المنازعات المدنية الكبرى",
        "التحكيم التجاري",
      ],
    },
    {
      id: "hend-zain",
      nameEn: "Hend Zain",
      nameAr: "هند زين",
      titleEn: "Admin Manager",
      titleAr: "مدير الشؤون الإدارية",
      image: "https://gammallaw.com/wp-content/uploads/2025/03/475.jpg",
      bioEn:
        "An experienced administrative executive with a proven track record in organizational management and client coordination. Previously held key roles at Harvest British College and Prime Holding before joining MG Law Firm to oversee administration, client onboarding, and seamless office operations.",
      bioAr:
        "خبيرة في الإدارة التنفيذية وإدارة العمليات والتنسيق مع كبار العملاء. شغلت مناصب قيادية في مؤسسات بارزة ككلية هارفست البريطانية وبرايم القابضة قبل توليها إدارة الشؤون الإدارية في إم جي لو.",
      specialtiesEn: [
        "Executive Operations",
        "Client Relations",
        "Legal Practice Management",
        "Administrative Governance",
      ],
      specialtiesAr: [
        "العمليات التنفيذية",
        "علاقات الموكلين",
        "إدارة مكاتب المحاماة",
        "التنسيق الإداري",
      ],
    },
  ],
  clients: [
    {
      name: "ESLSCA University",
      logo: "https://gammallaw.com/wp-content/uploads/2025/03/تصميم-بدون-عنوان-18.png",
    },
    {
      name: "Habitat",
      logo: "https://gammallaw.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-19-at-22.57.44_3372a7e8.jpg",
    },
    {
      name: "AUG Pharma",
      logo: "https://gammallaw.com/wp-content/uploads/2025/03/تصميم-بدون-عنوان-9.png",
    },
    {
      name: "TUV NORD",
      logo: "https://gammallaw.com/wp-content/uploads/2025/05/تصميم-بدون-عنوان-24-90x90.png",
    },
    {
      name: "Mahmoud El Sirgany",
      logo: "https://gammallaw.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-19-at-22.57.43_74874700.jpg",
    },
    {
      name: "Majid Al Futtaim",
      logo: "https://gammallaw.com/wp-content/uploads/2025/05/تصميم-بدون-عنوان-27.png",
    },
    {
      name: "Elrawas",
      logo: "https://gammallaw.com/wp-content/uploads/2025/05/تصميم-بدون-عنوان-26.png",
    },
    {
      name: "IGI",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_5a8d52036c2741ba86b112970ad862bfmv2.png",
    },
    {
      name: "EcoConServ",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_66723751e4564f4cac6b2d2f164a3809mv2.png",
    },
    {
      name: "Nawa",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_06ca4835d2e64b428bc2dede1256bademv2.png",
    },
    {
      name: "Moharram Bakhoum",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_d1d0feb06e7a415d9e3ce5e559d7069amv2.png",
    },
    {
      name: "EgyLand",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_77aec1963c224c9b8db5a3717d521b4bmv2.png",
    },
    {
      name: "Mabany Edris",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_2110644200634a9dba1fac63d8f69d85mv2.png",
    },
    {
      name: "Milano",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_6ab7290428884c22b12345bccce4d025mv2.png",
    },
    {
      name: "EgyTrans",
      logo: "https://gammallaw.com/wp-content/uploads/2025/03/تصميم-بدون-عنوان-15.png",
    },
    {
      name: "MCS",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_8b7b992dbdb444c581e7a736f54d47efmv2.png",
    },
    {
      name: "Wadi El Nile",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_66fcf9c6198c415b836be584a3d092ffmv2.png",
    },
    {
      name: "Transsion",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_d1b54fd4aa9045b8b2a26f5401c0fdd9mv2.png",
    },
    {
      name: "Sisban",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_b7d0529b89814a72b734432925f353cdmv2.png",
    },
    {
      name: "Seoudi Supermarkets",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_72d036b090424e41812ac4176ea801a3mv2.png",
    },
    {
      name: "Prime Holding",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_6e871f62041b4e4d998dee55d8f2432bmv2.png",
    },
    {
      name: "Petzone",
      logo: "https://gammallaw.com/wp-content/uploads/2025/02/9488f5_a73df0fbc2b34bae9fb5c648b456d9e7mv2.png",
    },
  ],
  careers: [
    {
      id: "internship",
      titleEn: "Legal Internship Program",
      titleAr: "برنامج التدريب الصيفي والقانوني",
      typeEn: "Internship / Full-time opportunity",
      typeAr: "تدريب عملي / فرصة توظيف",
      date: "7 March 2025",
      locationEn: "Cairo, Egypt (Zamalek Office)",
      locationAr: "القاهرة، مصر (مكتب الزمالك)",
      descEn:
        "Comprehensive training for high-achieving law graduates and senior students across corporate law, contracts review, research, and courtroom procedure exposure under senior partners.",
      descAr:
        "تدريب عملي شامل لحديثي التخرج وطلاب السنوات النهائية بكليات الحقوق في مجالات قانون الشركات وصياغة العقود والأبحاث القضائية تحت إشراف نخبة من كبار المحامين.",
    },
    {
      id: "associate",
      titleEn: "Legal Associate Position",
      titleAr: "وظيفة محامٍ ومستشار قانوني مشارك",
      typeEn: "Full-Time",
      typeAr: "دوام كامل",
      date: "7 March 2025",
      locationEn: "Cairo, Egypt (Zamalek & Mohandesin)",
      locationAr: "القاهرة، مصر (الزمالك والمهندسين)",
      descEn:
        "Seeking an ambitious Associate with 2-5 years experience in corporate drafting, GAFI and EDA procedures, commercial litigation support, and fluent bilingual Arabic/English proficiency.",
      descAr:
        "مطلوب محامٍ مشارك بخبرة من سنتين إلى 5 سنوات في قانون الشركات والتعامل مع هيئة الاستثمار وهيئة الدواء، وصياغة العقود باللغتين العربية والإنجليزية.",
    },
  ],
  news: [
    {
      id: "trademark-infringement",
      titleEn: "Infringement of a Registered Trademark: Protection & Enforcement",
      titleAr: "التعدي على العلامة التجارية المسجلة: آليات الحماية والملاحقة القضائية",
      date: "23 March 2025",
      author: "MG Law Editorial",
      categoryEn: "Intellectual Property",
      categoryAr: "الملكية الفكرية",
      image: "https://gammallaw.com/wp-content/uploads/2017/07/AdobeStock_315171499-570x305.jpeg",
      summaryEn:
        "An in-depth legal analysis of brand preservation, criminal counterfeiting claims under Egyptian IP Law 82/2002, urgent injunctions, and financial compensation benchmarks.",
      summaryAr:
        "تحليل قانوني تفصيلي لآليات حماية العلامات التجارية والطعن الجنائي في التقليد وفق قانون حماية الملكية الفكرية رقم 82 لسنة 2002 وضوابط التعويض المالي.",
      readTime: "5 min read",
    },
    {
      id: "joint-stock-company",
      titleEn:
        "Requirements, Timeline & Procedures for Establishing a Joint Stock Company & Importers Register",
      titleAr: "إجراءات ومتطلبات تأسيس شركة مساهمة والقيد في سجل المستوردين",
      date: "27 May 2017 (Updated 2025)",
      author: "Corporate Department",
      categoryEn: "Corporate & Commercial",
      categoryAr: "الشركات والتجارة",
      image: "https://gammallaw.com/wp-content/uploads/2017/05/AdobeStock_276969060-570x305.jpeg",
      summaryEn:
        "Step-by-step roadmap for investors establishing an Egyptian JSC, required share capital, GAFI electronic approval timeline, and obtaining import registry licenses.",
      summaryAr:
        "دليل متكامل خطوة بخطوة لتأسيس الشركات المساهمة برأس المال المطلوب، وإجراءات هيئة الاستثمار، والقيد الرسمي في سجل المستوردين.",
      readTime: "7 min read",
    },
    {
      id: "internship-program-details",
      titleEn: "Developing Tomorrow's Advocates: MG Law Internship Experience",
      titleAr: "إعداد رواد المحاماة: برنامج التدريب القانوني المتقدم في إم جي لو",
      date: "7 March 2025",
      author: "Human Capital",
      categoryEn: "Firm News & Careers",
      categoryAr: "أخبار المكتب والمهنة",
      image:
        "https://gammallaw.com/wp-content/uploads/2025/03/pexels-fauxels-3184292-1-570x305.jpg",
      summaryEn:
        "Inside MG Law Firm's commitment to nurturing elite legal minds through hands-on corporate case exposure, moot negotiations, and judicial proceedings.",
      summaryAr:
        "نظرة على منهجية إم جي لو في رعاية الكفاءات القانونية الواعدة من خلال المشاركة الحية في المعاملات المؤسسية والمرافعات القضائية.",
      readTime: "4 min read",
    },
  ],
};
