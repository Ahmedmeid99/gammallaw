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

const image = (name: string) => `/reference-assets/team/${name}`;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "mohammed-elgammal",
    name: "Mohammed El-Gammal",
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
    name: "Ahmed Fathy El-Gammal",
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
    name: "Tarek Yahia",
    role: "Sr. Associate",
    group: "Litigation Team",
    image: image("tarek-yahia.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Tarek Yehia is a dedicated litigation and real estate lawyer with extensive experience in civil, labor, commercial, and criminal law. He has extensive experience in contract drafting, legal research, and dispute resolution, with a particular focus on conciliation. Tarek holds a law degree from Cairo University (2021), complementing his previous studies at the Faculty of Arts, English Department. With a meticulous approach and in-depth knowledge of legal frameworks, Tarek is committed to providing comprehensive legal solutions to clients across various sectors. Languages: Arabic and English.",
  },
  {
    slug: "hosseiny-ahmed-haiba",
    name: "Hosseiny Ahmed",
    role: "Sr. Associate",
    group: "Litigation Team",
    image: image("hosseiny-ahmed.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Hosseiny Ahmed is an experienced litigation lawyer specializing in civil, commercial, corporate, criminal, labor, and real estate law. He has extensive experience pleading before the courts of first instance and a deep understanding of litigation and administrative procedures. Hosseiny holds a bachelor’s degree in Sharia and Law from Al-Azhar University (2020), graduating with honors, and a Master degree in Private Law and International Trade from Ain Shams University (2023). He is skilled in drafting and reviewing contracts, legal claims, defense memoranda, and case analysis.",
  },
  {
    slug: "aly-younis",
    name: "Aly Younis",
    role: "Sr. Associate",
    group: "Corporate Team",
    image: image("aly-younis.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Aly has been an associate attorney in the Commercial & Contracts Department at MG Law Firm since January 2024. Prior to joining MG Law, he interned at several prestigious law firms in Egypt, gaining extensive experience in corporate and commercial law. His practice covers drafting and reviewing agreements, legal research, legal opinions, company incorporation, liquidation, restructuring, corporate resolutions, regulatory matters, and due diligence procedures. He holds an LL.B. from the English Department, Faculty of Law, Ain Shams University. Languages: Arabic and English.",
  },
  {
    slug: "abdelrahman-mohamed",
    name: "Abdelrahman Mohamed",
    role: "Sr. Associate",
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
    name: "Amr Elkhouly",
    role: "Jr. Associate",
    group: "Litigation Team",
    image: image("amr-elkhouly.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Amr graduated from Cairo University in 2020 and has extensive experience in litigation before Summary Courts, Courts of First Instance, and Courts of Appeal, particularly in labor disputes involving unfair dismissal, wage claims, and social insurance. He handles all aspects of labor cases, from court representation to legal advice for employers and employees. His experience also covers civil and criminal litigation, legal research, court sessions, administrative work, and drafting contracts, legal memoranda, and statements of claim.",
  },
  {
    slug: "mahmoud-shalaany",
    name: "Mahmoud Shalaany",
    role: "Jr. Associate",
    group: "Litigation Team",
    image: image("mahmoud-shalaany.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Mahmoud graduated from Helwan University in 2018 and has substantial experience in litigation before criminal courts, primary and summary courts, courts of appeal, and the State Council. He is particularly skilled in criminal cases, public prosecution proceedings, compensation claims, family law disputes, and civil litigation. His experience also includes labor cases, legal research, court sessions, legal administration, and drafting contracts, legal memoranda, and statements of claim.",
  },
  {
    slug: "kareem-ragab-2",
    name: "Kareem Ragab",
    role: "Jr. Associate",
    group: "Corporate Team",
    image: image("kareem-ragab.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Kareem Ragab is a dynamic lawyer with extensive experience in commercial and civil law, specializing in the pharmaceutical industry. He graduated from Helwan University in 2023. Kareem advises pharmaceutical companies on regulatory compliance, contract negotiations, and dispute resolution. His expertise in commercial and civil law enables him to provide effective legal solutions to the industry’s unique challenges. Languages: Arabic and English.",
  },
  {
    slug: "ahmed-hany",
    name: "Ahmed Hany",
    role: "Jr. Associate",
    group: "Litigation Team",
    image: image("ahmed-hany.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Ahmed is a Cairo University law graduate from the Class of 2022 and is currently pursuing a Master’s degree in Law after earning a diploma in Private Law from Sadat University. Since 2023, he has been training at Dr. Mohamed El-Gammal’s law office, working across trademarks, labor law, real estate registration, and litigation.",
  },
  {
    slug: "maryam-hamam",
    name: "Maryam Hammam",
    role: "Jr. Associate",
    group: "Corporate Team",
    image: image("maryam-hammam.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Maryam Hammam is a highly skilled legal consultant with extensive experience in contract drafting, corporate law, legal research, and regulatory compliance. She holds a law degree from Ain Shams University (English Department) and has extensive experience in corporate transactions and strategic legal advice. Maryam drafts and reviews agreements, advises on company incorporation, and supports compliance with regulatory frameworks including the General Authority for Investment and the Egyptian Exchange. Languages: Arabic and English.",
  },
  {
    slug: "amina-agamy",
    name: "Amina Agamy",
    role: "Jr. Associate",
    group: "Corporate Team",
    image: image("amina-agamy.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Amina Agamy is a skilled lawyer specializing in corporate law, real estate, civil and labor law, and arbitration. She holds a law degree from the Faculty of Law, English Department, at Cairo University. During her studies, she participated in legal clubs and moot courts, attended the International Court of Justice course at the American University in Cairo, and trained at leading law firms. Her professional practice focuses on drafting and reviewing contracts.",
  },
  {
    slug: "menna-boudy",
    name: "Menna Boudy",
    role: "Jr. Associate",
    group: "Corporate Team",
    image: image("menna-boudy.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Menna Boudy is a highly skilled corporate lawyer with a focus on extraordinary and ordinary general assemblies. She has extensive experience in corporate governance, company board procedures, and compliance matters. Menna graduated from Cairo University’s English Department in 2022. Since joining Dr. Mohamed El-Gammal Law Office, she has provided expert legal advice to businesses, supporting efficient corporate operations and compliance. Languages: Arabic, English, and German.",
  },
  {
    slug: "abdelrahman-salah",
    name: "Abdelrahman Salah",
    role: "Jr. Associate",
    group: "Litigation Team",
    image: image("abdelrahman-salah.jpg"),
    email: "info@gammallaw.com",
    biography:
      "Abdelrahman is a law graduate from the English Section at Ain Shams University and currently works as a Junior Lawyer at MG Law Firm. He previously gained hands-on experience at Egypt’s Future Authority for Sustainable Development, where he drafted and reviewed contracts for legal accuracy and clarity. He is passionate about corporate law, with strong legal drafting and research skills.",
  },
  {
    slug: "zeina-hassanein",
    name: "Zeina Hassanein",
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

export const TEAM_GROUPS: TeamGroup[] = [
  "Founding and Managing Partner",
  "Partners",
  "Councels",
  "Managing Associates",
  "Corporate Team",
  "Litigation Team",
];
