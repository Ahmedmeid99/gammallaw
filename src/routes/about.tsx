import { createFileRoute } from "@tanstack/react-router";
import { OfficeMap } from "../components/ContactBlocks";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { useLanguage } from "../i18n/LanguageContext";
import { breadcrumbJsonLd, createSeoHead } from "../lib/seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    createSeoHead({
      title: "About MG Law Firm | Egyptian Legal Team Since 2002",
      description:
        "Learn about MG Law Firm, an independent full-service Egyptian law firm serving local, international, and multinational clients from Cairo and Giza.",
      path: "/about",
      keywords: ["Egyptian law firm since 2002", "international law firm Cairo"],
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    }),
});

function AboutPage() {
  const { isArabic } = useLanguage();
  return (
    <div id="top" className="site-shell inner-page about-page">
      <SiteHeader />
      <main>
        <section className="inner-title-hero about-title-hero" aria-labelledby="about-title">
          <div className="inner-title-content">
            <h1 id="about-title">{isArabic ? "عن المكتب" : "About"}</h1>
            <div className="breadcrumbs" aria-label={isArabic ? "مسار الصفحة" : "Breadcrumb"}>
              <a href="/">{isArabic ? "الرئيسية" : "Home"}</a>
              <span aria-hidden="true">›</span>
              <strong>{isArabic ? "عن المكتب" : "About"}</strong>
            </div>
          </div>
        </section>

        <article className="about-content">
          <h2>{isArabic ? "مرحباً بكم في مكتب إم جي للمحاماة" : "Welcome to MG Law Firm"}</h2>
          <img
            src="/reference-assets/about-office.jpg"
            alt={isArabic ? "مكتب إم جي" : "MG office"}
          />
          <div className="about-copy">
            {isArabic ? (
              <>
                <p>
                  منذ عام 2002، يتصدر مكتب إم جي للمحاماة مجال تقديم الخدمات القانونية والتجارية
                  والمدنية. ومن خلال مكاتبنا في القاهرة والجيزة وتحالفاتنا الاستراتيجية مع مكاتب
                  محاماة دولية مرموقة، نقدم حلولاً قانونية متكاملة وسلسة لموكلينا داخل مصر وخارجها.
                </p>
                <p>
                  نحن مكتب محاماة مصري مستقل متكامل الخدمات، نمتلك خبرة تتجاوز عقدين في القضايا
                  القانونية والمدنية والتجارية، ونخدم الشركات المحلية والدولية ومتعددة الجنسيات
                  ورواد الأعمال والأفراد.
                </p>
                <p>
                  يضم فريقنا نخبة من المحامين المتخصصين الذين يتحدثون العربية والفرنسية والإنجليزية،
                  ويقدمون حلولاً دقيقة تستند إلى الخبرة العملية والرؤية المعاصرة والفهم العميق للبيئات
                  القانونية المختلفة.
                </p>
                <p>
                  تقدم عائلة مكتب إم جي نطاقاً واسعاً من الخدمات القانونية المتخصصة لتلبية الاحتياجات
                  المتنوعة لعملائنا الكرام.
                </p>
                <p>
                  نجمع بين الامتداد الدولي والخبرة المحلية والقدرات متعددة اللغات لتقديم حلول فعالة
                  ومخصصة، مع التزام ثابت بالتميز والاحتراف ورضا الموكلين.
                </p>
              </>
            ) : (
              <>
                <p>
                  Since 2002, MG Law Firm has been a leader in providing legal, commercial, and
                  civil services. Operating through three main branches in Cairo and Giza, we have
                  established strong strategic alliances with top-tier law firms worldwide,
                  including Germany, England, Luxembourg, Netherlands, Dubai, Spain, Saudi Arabia,
                  Ukraine, Canada, Oman, Mauritius and Cyprus. These strategic alliances enable us
                  to provide comprehensive and seamless legal solutions to our clients, leveraging
                  the expertise and resources of our global network.
                </p>
                <p>
                  As an independent full-service Egyptian law firm with over two decades of
                  experience in legal, civil, and commercial matters, MG Law Firm has served
                  international and domestic clients, both corporate and individuals, for the past
                  25 years. Our clients include numerous local small and medium-sized enterprises
                  (SMEs), multinational companies, as well as businesspersons in Egypt and abroad.
                </p>
                <p>
                  Our dedicated legal team is fluent in Arabic, French, and English. We offer
                  tailored solutions based on years of experience, contemporary insights, and a deep
                  understanding of diverse legal environments. Our professional team includes 35
                  attorneys at law, 12 administrative team members, and 4 support staff. We are
                  ideally positioned to advise on complex, high-profile, high-value cases and
                  regularly handle cross-border and international transactions, projects, and
                  disputes.
                </p>
                <p>
                  The MG Law Firm family offers a wide range of specialized legal services to meet
                  the diverse needs of our valued clients.
                </p>
                <p>
                  Combining our global reach, local expertise and multilingual capabilities, we
                  pride ourselves on providing tailored and effective legal solutions to meet each
                  client’s unique needs. With a commitment to excellence, professionalism, and
                  client satisfaction, we strive to maintain our reputation as a trusted legal
                  partner.
                </p>
              </>
            )}
          </div>
        </article>
        <OfficeMap />
      </main>
      <SiteFooter />
    </div>
  );
}
