import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ContactHelp } from "../components/ContactBlocks";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PRACTICE_CATALOG } from "../data/practiceCatalog";
import { SITE_DATA } from "../data/siteData";

export const Route = createFileRoute("/")({ component: HomePage });

const asset = (name: string) => `/reference-assets/${name}`;
const heroVideo = asset("Istock-668260908-1-1-1-1-1.mp4");
const peopleImages = [
  asset("person-ahmed.jpg"),
  asset("person-alaa.jpg"),
  asset("person-hend.jpg"),
];
const peopleHrefs = ["/team/ahmed-fathy-elgammal", "/team/alaa-mandour", "/team/hend-sherif"];
const clientAssets = [
  ["ESLSCA University", "client-eslsca.png"],
  ["Habitat", "client-habitat.jpg"],
  ["AUG Pharma", "client-aug.png"],
  ["TUV NORD", "client-tuv.png"],
  ["Mahmoud El Sirgany", "client-sirgany.jpg"],
  ["Majid Al Futtaim", "client-majid.png"],
  ["Elrawas", "client-elrawas.png"],
  ["IGI", "client-igi.png"],
  ["EcoConServ", "client-ecoconserv.png"],
  ["Nawa", "client-nawa.png"],
  ["Moharram Bakhoum", "client-moharram.png"],
  ["EgyLand", "client-egyland.png"],
  ["Mabany Edris", "client-mabany.png"],
  ["Milano", "client-milano.png"],
  ["EgyTrans", "client-egytrans.png"],
  ["MCS", "client-mcs.png"],
  ["Wadi El Nile", "client-wadi.png"],
  ["Transsion", "client-transsion.png"],
  ["Sisban", "client-sisban.png"],
  ["Seoudi Supermarkets", "client-seoudi.png"],
  ["Prime Holding", "client-prime.png"],
  ["Petzone", "client-petzone.png"],
] as const;

const missionSlides = [
  {
    title: "Our mission",
    copy: "To deliver strategic, tailored, and commercially focused legal solutions that protect our clients’ interests, address their unique challenges, and support their long-term success.",
  },
  {
    title: "Our vision",
    copy: "To be a leading and trusted law firm, recognized for legal excellence, professional integrity, innovative thinking, and an unwavering commitment to our clients.",
  },
  {
    title: "Our Values",
    copy: "Integrity: We uphold the highest ethical and professional standards. Excellence: We pursue exceptional quality in every matter we handle. Client Focus: We understand each client’s objectives and provide solutions tailored to their needs. Trust: We build lasting relationships through transparency, confidentiality, and reliability. Innovation: We adopt practical and forward-thinking approaches to complex legal challenges. Commitment: We remain dedicated, responsive, and accountable throughout every engagement. Collaboration: We work closely with our clients and colleagues to achieve the best possible outcomes.",
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

const homeAreas = [
  ...PRACTICE_CATALOG.slice(5, 8),
  PRACTICE_CATALOG[8],
  ...PRACTICE_CATALOG.slice(0, 5),
];

function HomePage() {
  const [missionIndex, setMissionIndex] = useState(0);
  const [areaIndex, setAreaIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const people = [SITE_DATA.team[2], SITE_DATA.team[3], SITE_DATA.team[4]];
  const visibleAreas = Array.from(
    { length: 3 },
    (_, offset) => homeAreas[(areaIndex + offset) % homeAreas.length],
  );
  const visibleReviews = Array.from(
    { length: 2 },
    (_, offset) => SITE_DATA.reviews[(reviewIndex + offset) % SITE_DATA.reviews.length],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMissionIndex((index) => (index + 1) % missionSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAreaIndex((index) => (index + 1) % homeAreas.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setReviewIndex((index) => (index + 1) % SITE_DATA.reviews.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

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
              Legal Excellence
              <br />
              Tailored to You
            </h1>
            <p>
              We provide strategic, personalized legal solutions that protect your interests and
              support your ambitions.
            </p>
          </div>
        </section>

        <section id="about" className="about-grid">
          <div className="about-intro">
            <h2>MG Law Firm</h2>
            <p>
              MG Law Firm is an Egyptian Law Firm that has been serving a diverse range of clients
              for over 25 years, including local, international, and multinational corporations,
              large corporations, small and medium-sized enterprises SMEs, and individuals. We offer
              our legal services locally and internationally, tailored to meet the specific needs of
              our clients.
            </p>
          </div>
          <div className="about-focus">
            <div className="mission-stage" aria-live="polite">
              <div
                className="mission-track"
                style={{ transform: `translateX(-${missionIndex * (100 / 3)}%)` }}
              >
                {missionSlides.map((slide, index) => (
                  <article
                    key={slide.title}
                    className="mission-slide"
                    aria-hidden={index !== missionIndex}
                  >
                    <h2>{slide.title}</h2>
                    <p>{slide.copy}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="mission-progress" aria-hidden="true">
              <span key={missionIndex} />
            </div>
          </div>
        </section>

        <section id="areas" className="section light-section">
          <h2 className="section-title">Our Areas</h2>
          <div key={areaIndex} className="card-row areas-row" aria-live="polite">
            {visibleAreas.map((area) => (
              <a className="area-card" key={area.id} href={area.href}>
                <img src={area.localImage} alt={area.titleEn} />
                <h3>{area.titleEn}</h3>
              </a>
            ))}
          </div>
          <div className="carousel-controls">
            <button
              aria-label="Previous area"
              onClick={() =>
                setAreaIndex((index) => (index - 1 + homeAreas.length) % homeAreas.length)
              }
            >
              ‹
            </button>
            <button
              aria-label="Next area"
              onClick={() => setAreaIndex((index) => (index + 1) % homeAreas.length)}
            >
              ›
            </button>
          </div>
        </section>

        <section id="reviews" className="section reviews-section">
          <h2 className="section-title white">Client Reviews</h2>
          <div key={reviewIndex} className="reviews-row" aria-live="polite">
            {visibleReviews.map((review) => (
              <article className="review-card" key={review.id}>
                <p>“{review.reviewEn}”</p>
                <div className="review-author">
                  <img src={reviewAssets[review.id] ?? review.logo} alt={review.companyEn} />
                  <strong>{review.companyEn}</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="carousel-controls inverse">
            <button
              aria-label="Previous review"
              onClick={() =>
                setReviewIndex(
                  (index) => (index - 1 + SITE_DATA.reviews.length) % SITE_DATA.reviews.length,
                )
              }
            >
              ‹
            </button>
            <button
              aria-label="Next review"
              onClick={() => setReviewIndex((index) => (index + 1) % SITE_DATA.reviews.length)}
            >
              ›
            </button>
          </div>
        </section>

        <section id="people" className="section light-section people-section">
          <h2 className="section-title">Our People</h2>
          <div className="card-row people-row">
            {people.map((person, index) => (
              <a className="person-card" key={person.id} href={peopleHrefs[index]}>
                <img src={peopleImages[index]} alt={person.nameEn} />
                <div>
                  <h3>{person.nameEn}</h3>
                  <span>{person.titleEn}</span>
                  <p>{person.bioEn}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="carousel-controls">
            <button aria-label="Previous person">‹</button>
            <button aria-label="Next person">›</button>
          </div>
          <h2 id="clients" className="section-title clients-title">
            Our valued clients
          </h2>
          <div className="client-marquee">
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
        </section>

        <section className="updates-section">
          <div id="careers" className="updates-block">
            <h2 className="section-title white">Career Opportunities</h2>
            <div className="updates-grid">
              {SITE_DATA.careers.slice(0, 2).map((career, index) => (
                <a className="update-card" key={career.id} href="https://gammallaw.com/careers/">
                  <img
                    src={
                      index === 0 ? asset("career-internship.jpg") : asset("career-associate.jpg")
                    }
                    alt={career.titleEn}
                  />
                  <h3>{career.titleEn}</h3>
                </a>
              ))}
            </div>
          </div>
          <div id="news" className="updates-block news-block">
            <h2 className="section-title white">News and Legal opinions</h2>
            <div className="updates-grid">
              {SITE_DATA.news.slice(0, 2).map((article) => (
                <a className="update-card" key={article.id} href="https://gammallaw.com/news/">
                  <img
                    src={asset(
                      article === SITE_DATA.news[0] ? "news-trademark.jpeg" : "news-company.jpeg",
                    )}
                    alt={article.titleEn}
                  />
                  <h3>{article.titleEn}</h3>
                </a>
              ))}
            </div>
          </div>
          <div className="map-placeholder" aria-label="Map showing MG Law Firm in Zamalek">
            <iframe
              title="MG Law Firm location"
              loading="lazy"
              src="https://maps.google.com/maps?q=35B%20Mohamed%20Mazhar%20St.%2C%20Zamalek%2C%20Cairo&z=14&output=embed"
            />
          </div>
        </section>

        <div id="contact">
          <ContactHelp />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
