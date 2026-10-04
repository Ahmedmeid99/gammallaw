export type TeamGroup =
  | "Founding and Managing Partner"
  | "Partners"
  | "Councels"
  | "Managing Associates"
  | "Corporate Team"
  | "Litigation Team"
  | "Administration";

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  group: TeamGroup;
  image: string;
  email: string;
  biography: string;
}

export interface TeamMemberTranslation {
  name: string;
  role: string;
  biography: string;
}

const image = (name: string) => `/reference-assets/team/${name}`;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "mohammed-elgammal",
    name: "Mohamed El Gammal",
    role: "Founding and Managing Partner",
    group: "Founding and Managing Partner",
    image: image("mohammed-elgammal.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Dr. Mohamed El-Gammal is a seasoned attorney with over 20 years of experience. He holds a Bachelor of Laws from Cairo University and then completed his studies with a Master of Public Law and a Ph.D. in Law from Tanta University. Dr. El-Gammal has effectively represented clients in high-profile lawsuits, showcasing his exceptional legal skills and strategic vision. His leadership and expertise have contributed significantly to the success and expansion of MG Law Firm. Since 2013, Dr. El-Gammal has been registered with the Court of Cassation, the Supreme Administrative Court, and the Supreme Constitutional Court. A member of the Bar Association since 1996, he is also registered with the Registry of Patents & Trademarks Agents.",
  },
  {
    slug: "mohamed-fathy",
    name: "Mohamed Fathy",
    role: "Partner - Head of Litigation and Real Estate",
    group: "Partners",
    image: image("mohamed-fathy.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Mr. Mohamed Fathy is an experienced attorney specializing in corporate law, real estate issues, and notarization procedures. He holds a Bachelor of Laws from Cairo University and has been actively practicing law since 2002. Throughout his career, he has proven his proficiency in negotiating and drafting a variety of civil and commercial contracts, ranging from simple agreements to complex commercial transactions, helping clients achieve their business goals and overcome complex legal obstacles. Since his graduation in 2002, Mr. Fathy has been a member of the Bar Association. His legal expertise and commitment to client satisfaction have made him an integral member of the MG Law Firm.",
  },
  {
    slug: "ahmed-fathy-elgammal",
    name: "Ahmed El Gammal",
    role: "Partner - Head of Corporate and Contracts",
    group: "Partners",
    image: image("ahmed-fathy-elgammal.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Mr. Ahmed El-Gammal is a talented lawyer combining academic knowledge with practical legal experience. He holds his Bachelor of Laws from Cairo University (English Department) and has been practicing law since 2009. He has extensive experience in corporate law, particularly in contract drafting, mergers and acquisitions, due diligence, and compliance. In addition to his corporate specialization, Mr. Ahmed El-Gammal has extensive experience in labor law and intellectual property, and has expertly managed complex legal cases. Prior to joining MG Law Firm, he served as a legal lecturer and Assistant Teacher at the American Bar Association and the Arab Academy for Science, Technology & Maritime Transport. His experience in legal education and guidance enables him to provide insightful and effective legal counsel.",
  },
  {
    slug: "alaa-mandour",
    name: "Alaa Mandour",
    role: "Of Counsel",
    group: "Councels",
    image: image("alaa-mandour.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Mr. Alaa Mandour is an experienced attorney with over three decades of experience in the legal field. He holds a Bachelor of Laws from Cairo University. Since joining Dr. Mohamed El-Gammal law firm, he has successfully litigated numerous civil and administrative cases before various courts, including the Supreme Administrative Court and Court of Cassation. His expertise lies in resolving complex legal disputes and achieving positive outcomes for his clients. Mr. Alaa has been a member of the Bar Association since 1992 and is a registered member of the Court of Cassation. He has participated in numerous high-profile criminal and civil cases, as well as cases before the State Council.",
  },
  {
    slug: "mahmoud-salah-el-din-el-sayed",
    name: "Mahmoud Salah",
    role: "Senior Associate",
    group: "Litigation Team",
    image: image("mahmoud-salah.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Mahmoud Salah El-Din El-Sayed is a skilled specialist in civil, commercial, and labor law, with extensive experience in contract drafting, legal research, and misdemeanor cases. He obtained his law degree from Cairo University in 2017 and has since built a distinguished career in litigation and legal advisory services. Since June 2023, Mahmoud has been practicing at Dr. Mohamed El-Gammal Law Office, providing tailored legal solutions to meet his clients’ unique needs. Languages: Arabic and English.",
  },
  {
    slug: "mohamed-marzouk",
    name: "Mohamed Marzouk",
    role: "Managing Associate - Litigation",
    group: "Managing Associates",
    image: image("mohamed-marzouk.avif"),
    email: "info@gammallaw.com",
    biography:
      "Mr. Mohamed Marzouk is a skilled attorney with extensive experience in litigation, real estate, and document notarization. He holds a Bachelor of Law from Al-Azhar University and has been practicing law since 2018. Mr. Marzouk has extensive experience in civil, commercial, labor, and corporate disputes. He also specializes in the real estate sector, with a proven track record of successfully handling complex cases involving the Ministry of Housing, Utilities, and Urban Development. He has been a member of the Bar Association since 2018.",
  },
  {
    slug: "tarek-yehia-fahmy-zakher",
    name: "Tarek Yehia",
    role: "Senior Associate",
    group: "Litigation Team",
    image: image("tarek-yahia.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Tarek Yehia is a dedicated litigation and real estate lawyer with extensive experience in civil, labor, commercial, and criminal law. He has extensive experience in contract drafting, legal research, and dispute resolution, with a particular focus on conciliation. Tarek holds a law degree from Cairo University (2021), complementing his previous studies at the Faculty of Arts, English Department. With a meticulous approach and in-depth knowledge of legal frameworks, Tarek is committed to providing comprehensive legal solutions to clients across various sectors. Languages: Arabic and English.",
  },
  {
    slug: "hosseiny-ahmed-haiba",
    name: "Husseiny Ahmed",
    role: "Associate",
    group: "Litigation Team",
    image: image("hosseiny-ahmed.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Hosseiny Ahmed is an experienced litigation lawyer specializing in civil, commercial, corporate, criminal, labor, and real estate law. He has extensive experience pleading before the courts of first instance and a deep understanding of litigation and administrative procedures. Hosseiny holds a bachelor’s degree in Sharia and Law from Al-Azhar University (2020), graduating with honors, and a Master degree in Private Law and International Trade from Ain Shams University (2023). He is skilled in drafting and reviewing contracts, legal claims, defense memoranda, and case analysis.",
  },
  {
    slug: "aly-younis",
    name: "Aly Younis",
    role: "Associate",
    group: "Corporate Team",
    image: image("aly-younis.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Aly has been an associate attorney in the Commercial & Contracts Department at MG Law Firm since January 2024. Prior to joining MG Law, he interned at several prestigious law firms in Egypt, gaining extensive experience in corporate and commercial law. His practice covers drafting and reviewing agreements, legal research, legal opinions, company incorporation, liquidation, restructuring, corporate resolutions, regulatory matters, and due diligence procedures. He holds an LL.B. from the English Department, Faculty of Law, Ain Shams University. Languages: Arabic and English.",
  },
  {
    slug: "abdelrahman-mohamed",
    name: "Abdelrahman Mohamed",
    role: "Associate",
    group: "Litigation Team",
    image: image("abdelrahman-mohamed.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Abdelrahman specializes in litigation before district, primary, and high appeal courts, with a focus on criminal, civil, and labor disputes. He provides expert legal consultations, attends court sessions, and handles legal administrative tasks. He is experienced in real estate registration, contract drafting, and preparing legal pleadings and defense memoranda.",
  },
  {
    slug: "rehab-sultan",
    name: "Rehab Sultan",
    role: "Managing Associate - Litigation / IP",
    group: "Managing Associates",
    image: image("rehab-sultan.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Rehab has worked with the legal advisory and Intellectual Property Departments at MG Law Firm since February 2024. Before joining MG Law, she trained and worked at several leading law firms in Egypt, gaining experience particularly in civil law and intellectual property. Her practice includes court administration, drafting and reviewing contracts, legal research, legal opinions, trademark registration, interim orders concerning trademark infringement, Economic Court matters, and regulatory work. She holds a Bachelor of Laws, a Master of Private Law from Ain Shams University (2024), and a Master of Public Law from Assiut University (2018).",
  },
  {
    slug: "amr-elkhouly",
    name: "Amr El Khouly",
    role: "Associate",
    group: "Litigation Team",
    image: image("amr-elkhouly.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Amr graduated from Cairo University in 2020 and has extensive experience in litigation before Summary Courts, Courts of First Instance, and Courts of Appeal, particularly in labor disputes involving unfair dismissal, wage claims, and social insurance. He handles all aspects of labor cases, from court representation to legal advice for employers and employees. His experience also covers civil and criminal litigation, legal research, court sessions, administrative work, and drafting contracts, legal memoranda, and statements of claim.",
  },
  {
    slug: "mahmoud-shalaany",
    name: "Mahmoud Shalakany",
    role: "Associate",
    group: "Litigation Team",
    image: image("mahmoud-shalaany.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Mahmoud graduated from Helwan University in 2018 and has substantial experience in litigation before criminal courts, primary and summary courts, courts of appeal, and the State Council. He is particularly skilled in criminal cases, public prosecution proceedings, compensation claims, family law disputes, and civil litigation. His experience also includes labor cases, legal research, court sessions, legal administration, and drafting contracts, legal memoranda, and statements of claim.",
  },
  {
    slug: "kareem-ragab-2",
    name: "Kareem Ragab",
    role: "Associate",
    group: "Corporate Team",
    image: image("kareem-ragab.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Kareem Ragab is a dynamic lawyer with extensive experience in commercial and civil law, specializing in the pharmaceutical industry. He graduated from Helwan University in 2023. Kareem advises pharmaceutical companies on regulatory compliance, contract negotiations, and dispute resolution. His expertise in commercial and civil law enables him to provide effective legal solutions to the industry’s unique challenges. Languages: Arabic and English.",
  },
  {
    slug: "ahmed-hany",
    name: "Ahmed Hany",
    role: "Junior Associate",
    group: "Litigation Team",
    image: image("ahmed-hany.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Ahmed is a Cairo University law graduate from the Class of 2022 and is currently pursuing a Master’s degree in Law after earning a diploma in Private Law from Sadat University. Since 2023, he has been training at Dr. Mohamed El-Gammal’s law office, working across trademarks, labor law, real estate registration, and litigation.",
  },
  {
    slug: "maryam-hamam",
    name: "Maryam Hammam",
    role: "Associate",
    group: "Corporate Team",
    image: image("maryam-hammam.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Maryam Hammam is a highly skilled legal consultant with extensive experience in contract drafting, corporate law, legal research, and regulatory compliance. She holds a law degree from Ain Shams University (English Department) and has extensive experience in corporate transactions and strategic legal advice. Maryam drafts and reviews agreements, advises on company incorporation, and supports compliance with regulatory frameworks including the General Authority for Investment and the Egyptian Exchange. Languages: Arabic and English.",
  },
  {
    slug: "amina-agamy",
    name: "Amina Agamy",
    role: "Associate",
    group: "Corporate Team",
    image: image("amina-agamy.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Amina Agamy is a skilled lawyer specializing in corporate law, real estate, civil and labor law, and arbitration. She holds a law degree from the Faculty of Law, English Department, at Cairo University. During her studies, she participated in legal clubs and moot courts, attended the International Court of Justice course at the American University in Cairo, and trained at leading law firms. Her professional practice focuses on drafting and reviewing contracts.",
  },
  {
    slug: "menna-boudy",
    name: "Menna Boudy",
    role: "Associate",
    group: "Corporate Team",
    image: image("menna-boudy.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Menna Boudy is a highly skilled corporate lawyer with a focus on extraordinary and ordinary general assemblies. She has extensive experience in corporate governance, company board procedures, and compliance matters. Menna graduated from Cairo University’s English Department in 2022. Since joining Dr. Mohamed El-Gammal Law Office, she has provided expert legal advice to businesses, supporting efficient corporate operations and compliance. Languages: Arabic, English, and German.",
  },
  {
    slug: "abdelrahman-salah",
    name: "Abdelrahman Salah",
    role: "Junior Associate",
    group: "Litigation Team",
    image: image("abdelrahman-salah.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Abdelrahman is a law graduate from the English Section at Ain Shams University and currently works as a Junior Lawyer at MG Law Firm. He previously gained hands-on experience at Egypt’s Future Authority for Sustainable Development, where he drafted and reviewed contracts for legal accuracy and clarity. He is passionate about corporate law, with strong legal drafting and research skills.",
  },
  {
    slug: "zeina-hassanein",
    name: "Zeina Ahmed",
    role: "Junior Associate",
    group: "Corporate Team",
    image: image("zeina-hassanein.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Zeina Hassanein is completing her fourth year of law studies at Cairo University and the first year of the Master 1 program at Université Paris 1 Panthéon-Sorbonne through the Institut de Droit des Affaires Internationales. Her training has covered corporate law and M&A, sports arbitration, aviation, employment, intellectual property, fintech, commercial law, banking and capital markets, and technology, media and telecommunications. Zeina is fluent in Arabic, English, and French and is passionate about the intersection of law, business, and technology.",
  },
  {
    slug: "yara-mostafa",
    name: "Yara Mostafa",
    role: "Junior Associate",
    group: "Corporate Team",
    image: image("yara-mostafa.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Yara Moustafa is a 2024 law graduate from Cairo University, English Section, with a strong academic record and particular interest in corporate and commercial law. During an internship in the legal affairs department of a leading company, she gained hands-on experience in legal research, labor law, regulatory compliance, and drafting and translating legal documents. She has a solid foundation in company, commercial, and investment law and is developing her understanding of the business side of legal practice.",
  },
  {
    slug: "walid-mabrouk",
    name: "Walid Mabrouk",
    role: "Of Counsel",
    group: "Councels",
    image: "",
    email: "info@gammallaw.com",
    biography:
      "Walid Mabrouk serves as Of Counsel, providing strategic legal guidance and supporting the firm across complex client matters.",
  },
  {
    slug: "abdelmoneim",
    name: "Abdelmoneim",
    role: "Of Counsel",
    group: "Councels",
    image: "",
    email: "info@gammallaw.com",
    biography:
      "Abdelmoneim serves as Of Counsel, contributing experienced legal judgment and practical guidance to the firm and its clients.",
  },
  {
    slug: "ali-ossama",
    name: "Ali Ossama",
    role: "Associate",
    group: "Corporate Team",
    image: "",
    email: "info@gammallaw.com",
    biography:
      "Ali Ossama is an associate in the Corporate Team, supporting company matters, commercial transactions, legal research, and contract work.",
  },
  {
    slug: "farida-essam",
    name: "Farida Essam",
    role: "Junior Associate",
    group: "Corporate Team",
    image: image("farida-essam.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Farida Essam is a junior associate in the Corporate Team, assisting with legal research, corporate procedures, agreements, and regulatory matters.",
  },
  {
    slug: "jana-gawdat",
    name: "Jana Gawdat",
    role: "Junior Associate",
    group: "Corporate Team",
    image: image("jana-gawdat.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Jana Gawdat is a junior associate in the Corporate Team, supporting corporate transactions, contract review, research, and compliance work.",
  },
  {
    slug: "nour-orabi",
    name: "Nour Orabi",
    role: "Junior Associate",
    group: "Corporate Team",
    image: "",
    email: "info@gammallaw.com",
    biography:
      "Nour Orabi is a junior associate in the Corporate Team, assisting the firm's lawyers with commercial matters, legal drafting, and research.",
  },
  {
    slug: "mohamed-khaled",
    name: "Mohamed Khaled",
    role: "Senior Associate",
    group: "Litigation Team",
    image: "",
    email: "info@gammallaw.com",
    biography:
      "Mohamed Khaled is a senior associate in the Litigation Team, handling dispute analysis, court preparation, legal research, and client representation.",
  },
  {
    slug: "donia-abuzed",
    name: "Donia Abuzed",
    role: "Associate",
    group: "Litigation Team",
    image: "",
    email: "info@gammallaw.com",
    biography:
      "Donia Abuzed is an associate in the Litigation Team, supporting civil and commercial disputes, court procedures, and legal research.",
  },
  {
    slug: "shaimaa",
    name: "Shaimaa",
    role: "Associate",
    group: "Litigation Team",
    image: "",
    email: "info@gammallaw.com",
    biography:
      "Shaimaa is an associate in the Litigation Team, assisting with case preparation, procedural work, legal drafting, and dispute resolution.",
  },
  {
    slug: "malak-hamzawy",
    name: "Malak Hamzawy",
    role: "Junior Associate",
    group: "Litigation Team",
    image: "",
    email: "info@gammallaw.com",
    biography:
      "Malak Hamzawy is a junior associate in the Litigation Team, supporting court matters, legal research, drafting, and case administration.",
  },
  {
    slug: "ahmed-saeed",
    name: "Ahmed Saeed",
    role: "Junior Associate",
    group: "Litigation Team",
    image: "",
    email: "info@gammallaw.com",
    biography:
      "Ahmed Saeed is a junior associate in the Litigation Team, assisting with legal research, litigation files, court procedures, and drafting.",
  },
  {
    slug: "ziad-mohamed",
    name: "Ziad Mohamed",
    role: "Junior Associate",
    group: "Litigation Team",
    image: "",
    email: "info@gammallaw.com",
    biography:
      "Ziad Mohamed is a junior associate in the Litigation Team, supporting dispute work, legal research, document preparation, and court administration.",
  },
  {
    slug: "hend-sherif",
    name: "Hend Zain",
    role: "Admin Manager",
    group: "Administration",
    image: image("hend-zain.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Hend is an experienced administrative professional with a proven record in office management and executive assistance. She began as an Administrative Assistant at Harvest British College in 2017 and progressed to Branch Manager by 2019. She joined Prime Holding in 2020 as an Office Manager and advanced to CEO Office Manager and Personal Assistant in 2022. She has served as Admin Manager at MG Law Firm since December 2024.",
  },
];

export const TEAM_TRANSLATIONS_AR: Record<string, TeamMemberTranslation> = {
  "mohammed-elgammal": {
    name: "د. محمد الجمال",
    role: "الشريك المؤسس والمدير",
    biography:
      "الدكتور محمد الجمال محامٍ متمرس يتمتع بخبرة تزيد على عشرين عاماً. حصل على ليسانس الحقوق من جامعة القاهرة، ثم ماجستير في القانون العام ودكتوراه في القانون من جامعة طنطا. مثّل موكليه بكفاءة في قضايا بارزة، وأسهمت رؤيته الاستراتيجية وخبرته القانونية في نمو مكتب إم جي للمحاماة. وهو مقيد أمام محكمة النقض والمحكمة الإدارية العليا والمحكمة الدستورية العليا، وعضو بنقابة المحامين منذ عام 1996، كما أنه مقيد بسجل وكلاء براءات الاختراع والعلامات التجارية.",
  },
  "mohamed-fathy": {
    name: "محمد فتحي",
    role: "شريك ورئيس قسم التقاضي والعقارات",
    biography:
      "الأستاذ محمد فتحي محامٍ ذو خبرة واسعة في قانون الشركات والمسائل العقارية وإجراءات التوثيق. حصل على ليسانس الحقوق من جامعة القاهرة ويمارس المحاماة منذ عام 2002. يتميز بخبرة قوية في التفاوض وصياغة العقود المدنية والتجارية وإدارة المعاملات المعقدة، ويقدم حلولاً عملية تساعد الموكلين على تحقيق أهدافهم وتجاوز العقبات القانونية.",
  },
  "ahmed-fathy-elgammal": {
    name: "أحمد فتحي الجمال",
    role: "شريك ورئيس قسم الشركات والعقود",
    biography:
      "الأستاذ أحمد فتحي الجمال محامٍ يجمع بين التميز الأكاديمي والخبرة العملية، وهو خريج قسم اللغة الإنجليزية بكلية الحقوق بجامعة القاهرة ويمارس المحاماة منذ عام 2009. تشمل خبرته صياغة العقود والاندماج والاستحواذ والفحص النافي للجهالة والامتثال، إلى جانب قانون العمل والملكية الفكرية. كما سبق له العمل في مجال التعليم والتدريب القانوني، بما يعزز قدرته على تقديم مشورة دقيقة وفعالة.",
  },
  "alaa-mandour": {
    name: "علاء مندور",
    role: "مستشار قانوني",
    biography:
      "الأستاذ علاء مندور محامٍ مخضرم يتمتع بأكثر من ثلاثين عاماً من الخبرة القانونية، وحاصل على ليسانس الحقوق من جامعة القاهرة. ترافع بنجاح في العديد من القضايا المدنية والإدارية والجنائية أمام مختلف درجات المحاكم، بما فيها المحكمة الإدارية العليا ومحكمة النقض. وهو عضو بنقابة المحامين منذ عام 1992 ومقيد أمام محكمة النقض.",
  },
  "mahmoud-salah-el-din-el-sayed": {
    name: "محمود صلاح الدين السيد",
    role: "محامٍ أول",
    biography:
      "محمود صلاح الدين السيد متخصص في القانون المدني والتجاري وقانون العمل، ويتمتع بخبرة في صياغة العقود والبحوث القانونية وقضايا الجنح. حصل على ليسانس الحقوق من جامعة القاهرة عام 2017، وانضم إلى مكتب الدكتور محمد الجمال في يونيو 2023 لتقديم حلول قانونية مصممة وفق احتياجات الموكلين. يتحدث العربية والإنجليزية.",
  },
  "mohamed-marzouk": {
    name: "محمد مرزوق",
    role: "محامٍ مدير – التقاضي",
    biography:
      "الأستاذ محمد مرزوق محامٍ متخصص في التقاضي والعقارات وإجراءات التوثيق، وحاصل على ليسانس الحقوق من جامعة الأزهر. يمارس المحاماة منذ عام 2018 ويتمتع بخبرة في المنازعات المدنية والتجارية والعمالية ومنازعات الشركات. كما يمتلك سجلاً متميزاً في التعامل مع القضايا العقارية المعقدة والجهات المختصة بالإسكان والمرافق والتنمية العمرانية.",
  },
  "tarek-yehia-fahmy-zakher": {
    name: "طارق يحيى فهمي",
    role: "محامٍ أول",
    biography:
      "طارق يحيى محامٍ متخصص في التقاضي والعقارات، ويتمتع بخبرة في القانون المدني والعمالي والتجاري والجنائي وصياغة العقود وتسوية المنازعات. حصل على ليسانس الحقوق من جامعة القاهرة عام 2021 بعد دراسته السابقة بقسم اللغة الإنجليزية في كلية الآداب. يعتمد نهجاً دقيقاً لتقديم حلول قانونية متكاملة للموكلين في مختلف القطاعات.",
  },
  "hosseiny-ahmed-haiba": {
    name: "الحسيني أحمد هيبة",
    role: "محامٍ مشارك",
    biography:
      "الحسيني أحمد محامٍ متخصص في التقاضي المدني والتجاري والجنائي والعمالي والعقاري ومنازعات الشركات. حصل على بكالوريوس الشريعة والقانون من جامعة الأزهر عام 2020 بتقدير امتياز، ثم ماجستير في القانون الخاص والتجارة الدولية من جامعة عين شمس عام 2023. يتميز بصياغة ومراجعة العقود وصحف الدعاوى ومذكرات الدفاع وتحليل القضايا.",
  },
  "aly-younis": {
    name: "علي يونس",
    role: "محامٍ أول",
    biography:
      "يعمل علي يونس بقسم الشركات والعقود في مكتب إم جي منذ يناير 2024، بعد حصوله على خبرة عملية في عدد من مكاتب المحاماة المرموقة. تشمل ممارسته صياغة الاتفاقيات والبحوث والآراء القانونية وتأسيس الشركات وتصفيتها وإعادة هيكلتها والامتثال والفحص النافي للجهالة. وهو حاصل على ليسانس الحقوق باللغة الإنجليزية من جامعة عين شمس ويتحدث العربية والإنجليزية.",
  },
  "abdelrahman-mohamed": {
    name: "عبد الرحمن محمد",
    role: "محامٍ مشارك",
    biography:
      "يتخصص عبد الرحمن محمد في التقاضي أمام المحاكم الجزئية والابتدائية ومحاكم الاستئناف العالي، مع تركيز خاص على المنازعات الجنائية والمدنية والعمالية. يقدم الاستشارات القانونية ويحضر الجلسات ويتولى الأعمال الإدارية القانونية. كما يتمتع بخبرة في التسجيل العقاري وصياغة العقود وإعداد صحف الدعاوى ومذكرات الدفاع.",
  },
  "rehab-sultan": {
    name: "رحاب سلطان",
    role: "محامية مديرة – التقاضي والملكية الفكرية",
    biography:
      "تعمل رحاب سلطان في قسمي الاستشارات القانونية والملكية الفكرية بمكتب إم جي منذ فبراير 2024. تشمل خبرتها إدارة إجراءات المحاكم وصياغة العقود والبحوث والآراء القانونية وتسجيل العلامات التجارية وأوامر وقف التعدي والقضايا الاقتصادية والأعمال التنظيمية. وهي حاصلة على ليسانس الحقوق وماجستير في القانون الخاص من جامعة عين شمس وماجستير في القانون العام من جامعة أسيوط.",
  },
  "amr-elkhouly": {
    name: "عمرو الخولي",
    role: "محامٍ مشارك",
    biography:
      "تخرج عمرو الخولي في كلية الحقوق بجامعة القاهرة عام 2020، ويتمتع بخبرة في التقاضي أمام المحاكم الجزئية والابتدائية والاستئنافية. يركز على المنازعات العمالية، بما فيها الفصل التعسفي والأجور والتأمينات الاجتماعية، كما تشمل خبرته التقاضي المدني والجنائي والبحوث القانونية وصياغة العقود والمذكرات وصحف الدعاوى.",
  },
  "mahmoud-shalaany": {
    name: "محمود الشلعاني",
    role: "محامٍ مشارك",
    biography:
      "تخرج محمود الشلعاني في كلية الحقوق بجامعة حلوان عام 2018، ولديه خبرة واسعة في التقاضي أمام المحاكم الجنائية والابتدائية والجزئية والاستئنافية ومجلس الدولة. يتميز في القضايا الجنائية وتحقيقات النيابة والتعويضات ومنازعات الأسرة والدعاوى المدنية والعمالية، إلى جانب البحوث وصياغة العقود والمذكرات القانونية.",
  },
  "kareem-ragab-2": {
    name: "كريم رجب",
    role: "محامٍ مشارك",
    biography:
      "كريم رجب محامٍ متخصص في القانون التجاري والمدني مع تركيز على قطاع الصناعات الدوائية، وتخرج في جامعة حلوان عام 2023. يقدم المشورة للشركات الدوائية بشأن الامتثال التنظيمي والتفاوض على العقود وتسوية المنازعات، ويطور حلولاً قانونية فعالة تناسب التحديات الخاصة بالقطاع. يتحدث العربية والإنجليزية.",
  },
  "ahmed-hany": {
    name: "أحمد هاني",
    role: "محامٍ مساعد",
    biography:
      "أحمد هاني خريج كلية الحقوق بجامعة القاهرة دفعة 2022، ويواصل حالياً دراسة الماجستير بعد حصوله على دبلوم القانون الخاص من جامعة السادات. يتدرب ويعمل منذ عام 2023 في مكتب الدكتور محمد الجمال عبر مجالات العلامات التجارية وقانون العمل والتسجيل العقاري والتقاضي.",
  },
  "maryam-hamam": {
    name: "مريم همام",
    role: "محامية مشاركة",
    biography:
      "مريم همام مستشارة قانونية تتمتع بخبرة في صياغة العقود وقانون الشركات والبحوث القانونية والامتثال التنظيمي. حصلت على ليسانس الحقوق باللغة الإنجليزية من جامعة عين شمس، وتشارك في المعاملات المؤسسية وتأسيس الشركات ومراجعة الاتفاقيات والالتزام بأطر الهيئة العامة للاستثمار والبورصة المصرية. تتحدث العربية والإنجليزية.",
  },
  "amina-agamy": {
    name: "أمينة العجمي",
    role: "محامية مشاركة",
    biography:
      "أمينة العجمي محامية متخصصة في قانون الشركات والعقارات والقانون المدني والعمالي والتحكيم. حصلت على ليسانس الحقوق باللغة الإنجليزية من جامعة القاهرة، وشاركت خلال دراستها في الأنشطة القانونية والمحاكمات الصورية ودورات القانون الدولي. تركز ممارستها المهنية على صياغة العقود ومراجعتها وتقديم المشورة القانونية.",
  },
  "menna-boudy": {
    name: "منة بودي",
    role: "محامية مشاركة",
    biography:
      "منة بودي محامية شركات متخصصة في الجمعيات العامة العادية وغير العادية وحوكمة الشركات وإجراءات مجالس الإدارة والامتثال. تخرجت في قسم اللغة الإنجليزية بكلية الحقوق بجامعة القاهرة عام 2022، وتقدم منذ انضمامها إلى مكتب الدكتور محمد الجمال دعماً قانونياً يساعد الشركات على إدارة أعمالها بكفاءة والالتزام بالمتطلبات التنظيمية. تتحدث العربية والإنجليزية والألمانية.",
  },
  "abdelrahman-salah": {
    name: "عبد الرحمن صلاح",
    role: "محامٍ مساعد",
    biography:
      "عبد الرحمن صلاح خريج القسم الإنجليزي بكلية الحقوق بجامعة عين شمس ويعمل محامياً مساعداً في مكتب إم جي. اكتسب خبرة عملية لدى جهاز مستقبل مصر للتنمية المستدامة في صياغة العقود ومراجعتها للتأكد من دقتها ووضوحها. يهتم بقانون الشركات ويتمتع بمهارات قوية في الصياغة والبحث القانوني.",
  },
  "zeina-hassanein": {
    name: "زينة أحمد",
    role: "محامية مساعدة",
    biography:
      "تستكمل زينة حسنين عامها الرابع في كلية الحقوق بجامعة القاهرة والعام الأول من برنامج الماجستير بجامعة باريس الأولى بانتيون–سوربون. شمل تدريبها قانون الشركات والاندماج والاستحواذ والتحكيم الرياضي والطيران والعمل والملكية الفكرية والتكنولوجيا المالية والأسواق المصرفية. تتحدث العربية والإنجليزية والفرنسية وتهتم بالتقاطع بين القانون والأعمال والتكنولوجيا.",
  },
  "yara-mostafa": {
    name: "يارا مصطفى",
    role: "محامية مساعدة",
    biography:
      "يارا مصطفى خريجة القسم الإنجليزي بكلية الحقوق بجامعة القاهرة دفعة 2024، ولديها اهتمام خاص بقانون الشركات والقانون التجاري. اكتسبت خبرة عملية في البحوث القانونية وقانون العمل والامتثال وصياغة المستندات القانونية وترجمتها. تمتلك أساساً قوياً في قوانين الشركات والتجارة والاستثمار وتواصل تطوير فهمها للجوانب التجارية للممارسة القانونية.",
  },
  "walid-mabrouk": {
    name: "وليد مبروك",
    role: "مستشار قانوني",
    biography:
      "يعمل وليد مبروك مستشاراً قانونياً للمكتب، ويقدم توجيهاً استراتيجياً وخبرة عملية في المسائل القانونية المعقدة.",
  },
  abdelmoneim: {
    name: "عبد المنعم",
    role: "مستشار قانوني",
    biography:
      "يعمل عبد المنعم مستشاراً قانونياً ويسهم بخبرته ورؤيته العملية في دعم المكتب وموكليه في مختلف المسائل القانونية.",
  },
  "ali-ossama": {
    name: "علي أسامة",
    role: "محامٍ مشارك",
    biography:
      "علي أسامة محامٍ مشارك ضمن فريق الشركات، ويدعم أعمال الشركات والمعاملات التجارية والبحوث القانونية وصياغة العقود.",
  },
  "farida-essam": {
    name: "فريدة عصام",
    role: "محامية مساعدة",
    biography:
      "فريدة عصام محامية مساعدة ضمن فريق الشركات، وتشارك في البحوث القانونية وإجراءات الشركات والاتفاقيات والمسائل التنظيمية.",
  },
  "jana-gawdat": {
    name: "جنى جودت",
    role: "محامية مساعدة",
    biography:
      "جنى جودت محامية مساعدة ضمن فريق الشركات، وتدعم معاملات الشركات ومراجعة العقود والبحوث وأعمال الامتثال.",
  },
  "nour-orabi": {
    name: "نور عرابي",
    role: "محامية مساعدة",
    biography:
      "نور عرابي محامية مساعدة ضمن فريق الشركات، وتساعد في المسائل التجارية والصياغة القانونية والبحوث.",
  },
  "mohamed-khaled": {
    name: "محمد خالد",
    role: "محامٍ أول",
    biography:
      "محمد خالد محامٍ أول ضمن فريق التقاضي، ويتولى تحليل المنازعات وإعداد القضايا والبحوث القانونية وتمثيل الموكلين.",
  },
  "donia-abuzed": {
    name: "دنيا أبو زيد",
    role: "محامية مشاركة",
    biography:
      "دنيا أبو زيد محامية مشاركة ضمن فريق التقاضي، وتدعم المنازعات المدنية والتجارية وإجراءات المحاكم والبحوث القانونية.",
  },
  shaimaa: {
    name: "شيماء",
    role: "محامية مشاركة",
    biography:
      "شيماء محامية مشاركة ضمن فريق التقاضي، وتشارك في إعداد القضايا والإجراءات والصياغة القانونية وتسوية المنازعات.",
  },
  "malak-hamzawy": {
    name: "ملك حمزاوي",
    role: "محامية مساعدة",
    biography:
      "ملك حمزاوي محامية مساعدة ضمن فريق التقاضي، وتدعم أعمال المحاكم والبحوث والصياغة وإدارة ملفات القضايا.",
  },
  "ahmed-saeed": {
    name: "أحمد سعيد",
    role: "محامٍ مساعد",
    biography:
      "أحمد سعيد محامٍ مساعد ضمن فريق التقاضي، ويسهم في البحوث القانونية وملفات الدعاوى وإجراءات المحاكم والصياغة.",
  },
  "ziad-mohamed": {
    name: "زياد محمد",
    role: "محامٍ مساعد",
    biography:
      "زياد محمد محامٍ مساعد ضمن فريق التقاضي، ويدعم أعمال المنازعات والبحوث وإعداد المستندات والإجراءات القضائية.",
  },
  "hend-sherif": {
    name: "هند زين",
    role: "مديرة الشؤون الإدارية",
    biography:
      "هند زين خبيرة إدارية تتمتع بسجل متميز في إدارة المكاتب والمساندة التنفيذية. بدأت مسيرتها في كلية هارفست البريطانية عام 2017 وتدرجت إلى منصب مديرة فرع، ثم انضمت إلى برايم القابضة وتولت إدارة مكتب الرئيس التنفيذي. وتشغل منصب مديرة الشؤون الإدارية في مكتب إم جي منذ ديسمبر 2024.",
  },
};

export const TEAM_GROUPS: TeamGroup[] = [
  "Founding and Managing Partner",
  "Partners",
  "Councels",
  "Managing Associates",
  "Corporate Team",
  "Litigation Team",
];

export const TEAM_DIRECTORY_ORDER: Partial<Record<TeamGroup, string[]>> = {
  "Founding and Managing Partner": ["mohammed-elgammal"],
  Partners: ["mohamed-fathy", "ahmed-fathy-elgammal"],
  Councels: ["walid-mabrouk", "abdelmoneim", "alaa-mandour"],
  "Managing Associates": ["mohamed-marzouk", "rehab-sultan"],
  "Corporate Team": [
    "amina-agamy",
    "ali-ossama",
    "menna-boudy",
    "kareem-ragab-2",
    "maryam-hamam",
    "zeina-hassanein",
    "yara-mostafa",
    "farida-essam",
    "jana-gawdat",
    "nour-orabi",
  ],
  "Litigation Team": [
    "mahmoud-salah-el-din-el-sayed",
    "tarek-yehia-fahmy-zakher",
    "mohamed-khaled",
    "hosseiny-ahmed-haiba",
    "amr-elkhouly",
    "donia-abuzed",
    "abdelrahman-mohamed",
    "shaimaa",
    "mahmoud-shalaany",
    "abdelrahman-salah",
    "ahmed-hany",
    "malak-hamzawy",
    "ahmed-saeed",
    "ziad-mohamed",
  ],
};
