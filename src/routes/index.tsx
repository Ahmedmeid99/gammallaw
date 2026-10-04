import { useEffect, useRef, useState, type TouchEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { NEWS_CATALOG } from "../data/contentCatalog";
import { PRACTICE_CATALOG } from "../data/practiceCatalog";
import { SITE_DATA } from "../data/siteData";
import { TEAM_MEMBERS } from "../data/teamCatalog";
import { useLanguage } from "../i18n/LanguageContext";
import { createSeoHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () =>
    createSeoHead({
      title: "MG Law Firm | Corporate & Litigation Lawyers in Cairo, Egypt",
      description:
        "MG Law Firm advises businesses and individuals in Egypt on corporate, commercial, litigation, contracts, employment, intellectual property, real estate, licensing, and residency matters.",
      path: "/",
      keywords: ["full-service law firm Egypt", "business lawyers Cairo"],
    }),
});

const asset = (name: string) => `/reference-assets/${name}`;
const heroVideo = asset("Istock-668260908-1-1-1-1-1.mp4");
const clientAssets = [
  ["IGI", "client-igi.png"],
  ["EcoConServ", "client-ecoconserv.png"],
  ["Nawa", "client-nawa.png"],
  ["Moharram Bakhoum", "client-moharram.png"],
  ["Mabany Edris", "client-mabany.png"],
  ["MCS", "client-mcs.png"],
  ["Transsion", "client-transsion.png"],
  ["Sisban", "client-sisban.png"],
  ["Seoudi Supermarkets", "client-seoudi.png"],
  ["Petzone", "client-petzone.png"],
] as const;

function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void) {
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (event: TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;

    if (!start || !touch) return;

    const distanceX = touch.clientX - start.x;
    const distanceY = touch.clientY - start.y;

    if (Math.abs(distanceX) < 42 || Math.abs(distanceX) <= Math.abs(distanceY)) return;

    event.preventDefault();
    if (distanceX < 0) onSwipeLeft();
    else onSwipeRight();
  };

  return { onTouchStart, onTouchEnd };
}

function SliderArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      className={`slider-arrow-icon slider-arrow-icon-${direction}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M15 5 8 12l7 7" />
    </svg>
  );
}

const missionSlides = [
  {
    title: "Our mission",
    titleAr: "رسالتنا",
    copy: "To deliver strategic, tailored, and commercially focused legal solutions that protect our clients’ interests, address their unique challenges, and support their long-term success.",
    copyAr:
      "تقديم حلول قانونية استراتيجية ومخصصة ذات رؤية تجارية تحمي مصالح موكلينا، وتعالج تحدياتهم الفريدة، وتدعم نجاحهم طويل الأمد.",
    values: [],
    valuesAr: [],
  },
  {
    title: "Our vision",
    titleAr: "رؤيتنا",
    copy: "To be a leading and trusted law firm, recognized for legal excellence, professional integrity, innovative thinking, and an unwavering commitment to our clients.",
    copyAr:
      "أن نكون مكتب محاماة رائداً وموثوقاً، معروفاً بالتميز القانوني والنزاهة المهنية والتفكير المبتكر والالتزام الراسخ تجاه موكلينا.",
    values: [],
    valuesAr: [],
  },
  {
    title: "Our Values",
    titleAr: "قيمنا",
    copy: "Integrity: We uphold the highest ethical and professional standards. Excellence: We pursue exceptional quality in every matter we handle. Client Focus: We understand each client’s objectives and provide solutions tailored to their needs. Trust: We build lasting relationships through transparency, confidentiality, and reliability. Innovation: We adopt practical and forward-thinking approaches to complex legal challenges. Commitment: We remain dedicated, responsive, and accountable throughout every engagement. Collaboration: We work closely with our clients and colleagues to achieve the best possible outcomes.",
    copyAr:
      "النزاهة والتميز والتركيز على الموكل والثقة والابتكار والالتزام والتعاون؛ قيم نطبقها في كل مسألة قانونية لضمان أفضل النتائج الممكنة.",
    values: [
      ["Integrity", "We uphold the highest ethical and professional standards."],
      ["Excellence", "We pursue exceptional quality in every matter we handle."],
      ["Client Focus", "We understand each client and tailor every solution to their needs."],
      ["Trust", "We build lasting relationships through transparency and reliability."],
      ["Innovation", "We apply practical, forward-thinking approaches to legal challenges."],
      ["Commitment", "We remain responsive and accountable throughout every engagement."],
      [
        "Collaboration",
        "We work closely with clients and colleagues to achieve the best outcomes.",
      ],
    ],
    valuesAr: [
      ["النزاهة", "نلتزم بأعلى المعايير الأخلاقية والمهنية."],
      ["التميز", "نسعى إلى جودة استثنائية في كل مسألة نتولاها."],
      ["التركيز على الموكل", "نفهم أهداف كل موكل ونصمم الحلول وفق احتياجاته."],
      ["الثقة", "نبني علاقات مستدامة بالشفافية والسرية والموثوقية."],
      ["الابتكار", "نتبنى حلولاً عملية ومتقدمة للتحديات القانونية المعقدة."],
      ["الالتزام", "نحافظ على سرعة الاستجابة والمسؤولية طوال فترة التكليف."],
      ["التعاون", "نعمل عن قرب مع موكلينا وزملائنا لتحقيق أفضل النتائج."],
    ],
  },
] as const;

const reviewAssets: Record<string, string> = {
  "el-sirgany": asset("review-sirgany.png"),
  ims: asset("review-ims.png"),
  "aug-pharma": asset("review-aug.png"),
  "tuv-nord": asset("review-tuv.png"),
  habitat: asset("review-habitat.jpg"),
  eslsca: asset("review-eslsca.png"),
};

const homePeopleSlugs = [
  "mohammed-elgammal",
  "mohamed-fathy",
  "ahmed-fathy-elgammal",
  "alaa-mandour",
  "hend-sherif",
];
const homePeople = homePeopleSlugs.flatMap((slug) => {
  const member = TEAM_MEMBERS.find((item) => item.slug === slug);
  return member ? [member] : [];
});

function HomePage() {
  const { isArabic } = useLanguage();
  const [missionIndex, setMissionIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [peopleIndex, setPeopleIndex] = useState(0);
  const [reviewVisible, setReviewVisible] = useState(2);
  const [peopleVisible, setPeopleVisible] = useState(3);
  const [reviewTransition, setReviewTransition] = useState(true);
  const [peopleTransition, setPeopleTransition] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMissionIndex((index) => (index + 1) % missionSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 830px)");
    const syncVisibleCards = () => {
      setReviewVisible(media.matches ? 1 : 2);
      setPeopleVisible(media.matches ? 1 : 3);
    };

    syncVisibleCards();
    media.addEventListener("change", syncVisibleCards);

    return () => media.removeEventListener("change", syncVisibleCards);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setReviewIndex((index) => index + 1);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPeopleIndex((index) => index + 1);
    }, 5600);

    return () => window.clearInterval(timer);
  }, []);

  const restoreTransition = (setter: (value: boolean) => void) => {
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setter(true)));
  };

  const previousReview = () => {
    if (reviewIndex === 0) {
      setReviewTransition(false);
      setReviewIndex(SITE_DATA.reviews.length);
      window.requestAnimationFrame(() =>
        window.requestAnimationFrame(() => {
          setReviewTransition(true);
          setReviewIndex(SITE_DATA.reviews.length - 1);
        }),
      );
      return;
    }

    setReviewIndex((index) => index - 1);
  };

  const previousPerson = () => {
    if (peopleIndex === 0) {
      setPeopleTransition(false);
      setPeopleIndex(homePeople.length);
      window.requestAnimationFrame(() =>
        window.requestAnimationFrame(() => {
          setPeopleTransition(true);
          setPeopleIndex(homePeople.length - 1);
        }),
      );
      return;
    }

    setPeopleIndex((index) => index - 1);
  };

  const missionSwipe = useSwipe(
    () =>
      setMissionIndex((index) =>
        isArabic
          ? (index - 1 + missionSlides.length) % missionSlides.length
          : (index + 1) % missionSlides.length,
      ),
    () =>
      setMissionIndex((index) =>
        isArabic
          ? (index + 1) % missionSlides.length
          : (index - 1 + missionSlides.length) % missionSlides.length,
      ),
  );
  const reviewsSwipe = useSwipe(
    isArabic ? previousReview : () => setReviewIndex((index) => index + 1),
    isArabic ? () => setReviewIndex((index) => index + 1) : previousReview,
  );
  const peopleSwipe = useSwipe(
    isArabic ? previousPerson : () => setPeopleIndex((index) => index + 1),
    isArabic ? () => setPeopleIndex((index) => index + 1) : previousPerson,
  );

  return (
    <div id="top" className="site-shell">
      <SiteHeader />

      <main>
        <section id="home" className="hero">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={asset("hero-poster.jpeg")}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-copy">
            <h1>
              {isArabic ? "تميّز قانوني" : "Legal Excellence"}
              <br />
              {isArabic ? "مصمم لاحتياجاتكم" : "Tailored to You"}
            </h1>
            <p>
              {isArabic
                ? "نقدم حلولاً قانونية استراتيجية ومخصصة تحمي مصالحكم وتدعم طموحاتكم."
                : "We provide strategic, personalized legal solutions that protect your interests and support your ambitions."}
            </p>
          </div>
        </section>

        <section id="about" className="about-grid">
          <div className="about-intro">
            <h2>{isArabic ? "مكتب إم جي للمحاماة" : "MG Law Firm"}</h2>
            <p>
              {isArabic
                ? "مكتب إم جي للمحاماة هو مكتب مصري رائد يقدم خدماته القانونية منذ أكثر من 25 عاماً لمجموعة متنوعة من الموكلين، تشمل الشركات المحلية والدولية ومتعددة الجنسيات والمنشآت الصغيرة والمتوسطة والأفراد، من خلال حلول مصممة لتلبية احتياجات كل موكل."
                : "MG Law Firm is an Egyptian Law Firm that has been serving a diverse range of clients for over 25 years, including local, international, and multinational corporations, large corporations, small and medium-sized enterprises SMEs, and individuals. We offer our legal services locally and internationally, tailored to meet the specific needs of our clients."}
            </p>
          </div>
          <div className="about-focus">
            <div className="mission-stage" aria-live="polite" {...missionSwipe}>
              <div
                className="mission-track"
                style={{
                  transform: `translateX(${isArabic ? "" : "-"}${missionIndex * 100}%)`,
                }}
              >
                {missionSlides.map((slide, index) => (
                  <article
                    key={slide.title}
                    className="mission-slide"
                    aria-hidden={index !== missionIndex}
                  >
                    <h2>{isArabic ? slide.titleAr : slide.title}</h2>
                    {slide.values.length > 0 ? (
                      <ul className="mission-values">
                        {(isArabic ? slide.valuesAr : slide.values).map(([value, description]) => (
                          <li key={value}>
                            <strong>{value}</strong>
                            <span>{description}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{isArabic ? slide.copyAr : slide.copy}</p>
                    )}
                  </article>
                ))}
              </div>
            </div>
            <div className="mission-progress" aria-hidden="true">
              <span key={missionIndex} />
            </div>
            <div className="mission-controls">
              <button
                type="button"
                aria-label={isArabic ? "الشريحة السابقة" : "Previous mission slide"}
                onClick={() =>
                  setMissionIndex(
                    (index) => (index - 1 + missionSlides.length) % missionSlides.length,
                  )
                }
              >
                <SliderArrow direction="previous" />
              </button>
              <span aria-hidden="true">
                {String(missionIndex + 1).padStart(2, "0")} /{" "}
                {String(missionSlides.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                aria-label={isArabic ? "الشريحة التالية" : "Next mission slide"}
                onClick={() => setMissionIndex((index) => (index + 1) % missionSlides.length)}
              >
                <SliderArrow direction="next" />
              </button>
            </div>
          </div>
        </section>

        <section id="areas" className="section light-section">
          <div className="site-container">
            <h2 className="section-title">{isArabic ? "مجالات عملنا" : "Our Areas"}</h2>
            <div className="areas-grid">
              {PRACTICE_CATALOG.map((area) => (
                <a className="area-card" key={area.id} href={area.href}>
                  <div className="area-card-image">
                    <img
                      src={area.localImage}
                      alt={isArabic ? area.titleAr : area.titleEn}
                      loading="lazy"
                    />
                    <h3>{isArabic ? area.titleAr : area.titleEn}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section reviews-section">
          <div className="site-container">
            <h2 className="section-title white">{isArabic ? "آراء العملاء" : "Client Reviews"}</h2>
            <div className="carousel-viewport" {...reviewsSwipe}>
              <div
                className="reviews-track"
                style={{
                  transform: isArabic
                    ? `translate3d(calc(${reviewIndex * (100 / reviewVisible)}% + ${reviewIndex * (29 / reviewVisible)}px), 0, 0)`
                    : `translate3d(calc(-${reviewIndex * (100 / reviewVisible)}% - ${reviewIndex * (29 / reviewVisible)}px), 0, 0)`,
                  transition: reviewTransition ? undefined : "none",
                }}
                aria-live="polite"
                onTransitionEnd={() => {
                  if (reviewIndex >= SITE_DATA.reviews.length) {
                    setReviewTransition(false);
                    setReviewIndex(0);
                    restoreTransition(setReviewTransition);
                  }
                }}
              >
                {[...SITE_DATA.reviews, ...SITE_DATA.reviews].map((review, index) => (
                  <article
                    className="review-card"
                    key={`${review.id}-${index}`}
                    aria-hidden={index >= SITE_DATA.reviews.length}
                  >
                    <p>“{isArabic ? review.reviewAr : review.reviewEn}”</p>
                    <div className="review-author">
                      <img
                        src={reviewAssets[review.id] ?? review.logo}
                        alt={isArabic ? review.companyAr : review.companyEn}
                      />
                      <strong>{isArabic ? review.companyAr : review.companyEn}</strong>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="carousel-controls inverse">
              <button
                aria-label={isArabic ? "الرأي السابق" : "Previous review"}
                onClick={previousReview}
              >
                <SliderArrow direction="previous" />
              </button>
              <span className="carousel-status" aria-hidden="true">
                {String((reviewIndex % SITE_DATA.reviews.length) + 1).padStart(2, "0")}
                <i />
                {String(SITE_DATA.reviews.length).padStart(2, "0")}
              </span>
              <button
                aria-label={isArabic ? "الرأي التالي" : "Next review"}
                onClick={() => setReviewIndex((index) => index + 1)}
              >
                <SliderArrow direction="next" />
              </button>
            </div>
          </div>
        </section>

        <section id="people" className="section light-section people-section">
          <div className="site-container">
            <h2 className="section-title">{isArabic ? "فريق العمل" : "Our People"}</h2>
            <div className="carousel-viewport" {...peopleSwipe}>
              <div
                className="people-track"
                style={{
                  transform: isArabic
                    ? `translate3d(calc(${peopleIndex * (100 / peopleVisible)}% + ${peopleIndex * (24 / peopleVisible)}px), 0, 0)`
                    : `translate3d(calc(-${peopleIndex * (100 / peopleVisible)}% - ${peopleIndex * (24 / peopleVisible)}px), 0, 0)`,
                  transition: peopleTransition ? undefined : "none",
                }}
                aria-live="polite"
                onTransitionEnd={() => {
                  if (peopleIndex >= homePeople.length) {
                    setPeopleTransition(false);
                    setPeopleIndex(0);
                    restoreTransition(setPeopleTransition);
                  }
                }}
              >
                {[...homePeople, ...homePeople].map((person, index) => (
                  <a
                    className="person-card"
                    key={`${person.slug}-${index}`}
                    href={`/team/${person.slug}`}
                    aria-hidden={index >= homePeople.length}
                    tabIndex={index >= homePeople.length ? -1 : undefined}
                  >
                    <img
                      src={person.image}
                      alt={
                        isArabic ? SITE_DATA.team[index % homePeople.length]?.nameAr : person.name
                      }
                    />
                    <div>
                      <h3>
                        {isArabic ? SITE_DATA.team[index % homePeople.length]?.nameAr : person.name}
                      </h3>
                      <span>
                        {isArabic
                          ? SITE_DATA.team[index % homePeople.length]?.titleAr
                          : person.role}
                      </span>
                      <p>
                        {isArabic
                          ? SITE_DATA.team[index % homePeople.length]?.bioAr
                          : person.biography}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="carousel-controls">
              <button
                aria-label={isArabic ? "الشخص السابق" : "Previous person"}
                onClick={previousPerson}
              >
                <SliderArrow direction="previous" />
              </button>
              <span className="carousel-status" aria-hidden="true">
                {String((peopleIndex % homePeople.length) + 1).padStart(2, "0")}
                <i />
                {String(homePeople.length).padStart(2, "0")}
              </span>
              <button
                aria-label={isArabic ? "الشخص التالي" : "Next person"}
                onClick={() => setPeopleIndex((index) => index + 1)}
              >
                <SliderArrow direction="next" />
              </button>
            </div>
            <h2 id="clients" className="section-title clients-title">
              {isArabic ? "عملاؤنا المميزون" : "Our valued clients"}
            </h2>
            <div className="client-marquee" dir="ltr">
              <div className="client-logos">
                {[...clientAssets, ...clientAssets].map(([name, file], index) => (
                  <div
                    className="client-logo"
                    key={`${name}-${index}`}
                    aria-hidden={index >= clientAssets.length}
                  >
                    <img src={asset(file)} alt={index < clientAssets.length ? name : ""} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="updates-section">
          <div id="careers" className="updates-block">
            <div className="site-container">
              <h2 className="section-title white">
                {isArabic ? "فرص العمل" : "Career Opportunities"}
              </h2>
              <div className="updates-grid">
                {SITE_DATA.careers.slice(0, 2).map((career, index) => (
                  <a className="update-card" key={career.id} href="/careers">
                    <img
                      src={
                        index === 0 ? asset("career-internship.jpg") : asset("career-associate.jpg")
                      }
                      alt={isArabic ? career.titleAr : career.titleEn}
                    />
                    <h3>{isArabic ? career.titleAr : career.titleEn}</h3>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div id="news" className="updates-block news-block">
            <div className="site-container">
              <h2 className="section-title white">
                {isArabic ? "الأخبار والآراء القانونية" : "News and Legal opinions"}
              </h2>
              <div className="updates-grid">
                {NEWS_CATALOG.slice(0, 2).map((article, index) => {
                  const localizedArticle = SITE_DATA.news[index];
                  const title = isArabic
                    ? localizedArticle?.titleAr || article.title
                    : localizedArticle?.titleEn || article.title;
                  const summary = isArabic
                    ? localizedArticle?.summaryAr || article.summary
                    : localizedArticle?.summaryEn || article.summary;
                  const category = isArabic
                    ? localizedArticle?.categoryAr || article.category
                    : localizedArticle?.categoryEn || article.category;

                  return (
                    <a className="home-news-card" key={article.id} href={article.href}>
                      <div className="home-news-card-image">
                        <img src={article.image} alt={title} loading="lazy" />
                        <span>{category}</span>
                      </div>
                      <div className="home-news-card-copy">
                        <div className="home-news-card-meta">
                          <time>{article.date}</time>
                          <i aria-hidden="true">•</i>
                          <span>
                            {localizedArticle?.readTime ||
                              (isArabic ? "قراءة قانونية" : "Legal insight")}
                          </span>
                        </div>
                        <h3>{title}</h3>
                        <p>{summary}</p>
                        <span className="home-news-read-more">
                          {isArabic ? "اقرأ المقال" : "Read article"}
                          <span aria-hidden="true">{isArabic ? "←" : "→"}</span>
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="map-placeholder"
            aria-label={
              isArabic ? "خريطة مكتب إم جي في الزمالك" : "Map showing MG Law Firm in Zamalek"
            }
          >
            <iframe
              title={isArabic ? "موقع مكتب إم جي" : "MG Law Firm location"}
              loading="lazy"
              src="https://www.google.com/maps?cid=14159121067538588790&output=embed"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
