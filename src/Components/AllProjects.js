import React, { memo, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { prefersCoarsePointer } from "../utils/device";
import Footer from "./Footer";
import Loader from "./Loader";
import "../styles/AllPorjects.css";
import { FEATURED } from "../data/portfolioFeatured";

// Instagram SVG icon
const InstaIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

// const CLIENTS = [
//   {
//     id: "c4",
//     title: "South Side Nutrition",
//     category: "Health & Wellness",
//     description: "High-energy fitness brand content, supplement drops, and community engagement.",
//     logo: "https://instagram.fkhi11-2.fna.fbcdn.net/v/t51.82787-19/637124655_18113017045651237_2722365646585636783_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fkhi11-2.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2gFqAkn0rz4dIxhoal1sjDdmV7jcYWtsrmF5EDK7b0Akmz9P7bpNiI38_UCWkAos__mCQdKAJtdUiOU_ZhdG0uCx&_nc_ohc=XjawzQhWZgoQ7kNvwGhCGHA&_nc_gid=dUaB1UWy3jsmV6BagEFYjQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af33wfil1kdJzQELMmQaurWQ84rZtQZkN69TX5QxFRtCog&oe=69E69F74&_nc_sid=8b3546",
//     insta: "https://www.instagram.com/south_side_nutrition.pk",
//     tags: ["Fitness", "Product Drops", "Reels"],
//     accent: "#22C55E",
//   },
//   {
//     id: "c5",
//     title: "Fun City Hill Park",
//     category: "Entertainment / Leisure",
//     description: "Vibrant family-focused social media campaigns driving footfall and brand excitement.",
//     logo: "https://instagram.fkhi11-2.fna.fbcdn.net/v/t51.2885-19/470911085_1359425908774653_399702927238549846_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fkhi11-2.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2gFj4n4Pgj1nE-GbcsNnx6wVwgzu53qBr2VNjTQyxqPH1zRa3hulAAoCuUIt-EZmChK4Ccvg3pUGvVMV4y7IwtJiy9&_nc_ohc=M1fsNaUPyPkQ7kNvwHCpdd3&_nc_gid=zb5EfTqGFqjDgdVC42JL0w&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af3mEqsHQzmjiQhODvjt9mWW_h6K9IULOSGpI5PCUJHeoQ&oe=69E6A5D9&_nc_sid=8b3546",
//     insta: "https://www.instagram.com/funcity_hill_park",
//     tags: ["Events", "Family", "Campaign"],
//     accent: "#FF2EDB",
//   },
//   {
//     id: "c6",
//     title: "Friends Optical",
//     category: "Retail / Eyewear",
//     description: "Polished product visuals and brand storytelling for a trusted optical retailer.",
//     logo: "https://instagram.fkhi11-1.fna.fbcdn.net/v/t51.82787-19/531844354_18075390968494367_2209139905774704179_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fkhi11-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2gEbvAV32DOoSijRiK75nuaCmRI4jhcrmmreoLfYmN8a6QMmBweI0M-8HhHZk92rBUgt6U6kvCepMOKLmFXD8yBH&_nc_ohc=ukgxnLUZ68MQ7kNvwHsTZVd&_nc_gid=J59SpPf0TivjT8RC0AKiQw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af3yOj9UoMbUqN_H3MBKmAmKy4Dj00WHDvCutKBNQo1vwQ&oe=69E68D68&_nc_sid=8b3546",
//     insta: "https://www.instagram.com/friendsopticalofficial",
//     tags: ["Retail", "Lifestyle", "Branding"],
//     accent: "#3B82F6",
//   },
//   {
//     id: "c7",
//     title: "GTex Global",
//     category: "Textile / Export",
//     description: "Corporate digital identity and LinkedIn-led B2B content for a global textile exporter.",
//     logo: "https://instagram.fkhi11-2.fna.fbcdn.net/v/t51.82787-19/671044167_18103999487483876_7892527528764860084_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fkhi11-2.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2gFSzz9rkZRailtd3J0Nja4hpW22uj-xStw_XM9g88xO_U7t6yXdNFDcCL2MEJWCx2S6zGkvUO-VB_kHZbNeKXLq&_nc_ohc=uEcaxXxF0c4Q7kNvwHgKpH3&_nc_gid=kih0ImbpqvEzOJL3LlpmcA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af0CW1P4MEPKqDEu-sYLSH3RV0vSx2aIWaCayAY-gEMrDA&oe=69E6BA16&_nc_sid=8b3546",
//     insta: "https://www.instagram.com/gtexglobalofficial",
//     tags: ["B2B", "Corporate", "Textile"],
//     accent: "#8B5CF6",
//   },
// ];

// ── Featured Card (with preview image) ──
const FeaturedCard = ({ project, index }) => (
  <article
    className="ap-feat-card"
    style={{ "--accent": project.accent, animationDelay: `${index * 0.1}s` }}
  >
    <div className="ap-feat-preview">
      <img
        src={project.preview}
        alt={`${project.title} work preview`}
        loading="lazy"
        decoding="async"
      />
      <div className="ap-feat-overlay" />
    </div>

    <div className="ap-feat-body">
      <div className="ap-feat-header">
        <a
          href={project.insta}
          target="_blank"
          rel="noopener noreferrer"
          className="ap-insta-btn"
          aria-label={`Visit ${project.title} on Instagram`}
        >
          <InstaIcon />
          <span>Follow</span>
        </a>
      </div>

      <span className="ap-category">{project.category}</span>
      <h3 className="ap-feat-title">{project.title}</h3>
      <p className="ap-feat-desc">{project.description}</p>

      <div className="ap-tags">
        {project.tags.map((t) => (
          <span className="ap-tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="ap-feat-accent-bar" />
  </article>
);

// ── Page ──
const AllProjects = () => {
  const navigate = useNavigate();
  const [isRouting, setIsRouting] = useState(false);
  const routeTimerRef = useRef(null);

  const contactNavDelayMs = prefersCoarsePointer() ? 0 : 1000;

  const handleTalkBusinessClick = (e) => {
    e.preventDefault();
    if (isRouting) return;
    if (contactNavDelayMs === 0) {
      navigate("/", { state: { scrollTo: "contact" } });
      return;
    }
    setIsRouting(true);
    routeTimerRef.current = setTimeout(() => {
      navigate("/", { state: { scrollTo: "contact" } });
    }, contactNavDelayMs);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    return () => {
      if (routeTimerRef.current) {
        clearTimeout(routeTimerRef.current);
      }
    };
  }, []);

  if (isRouting) {
    return <Loader />;
  }

  return (
    <>
    <main className="ap-page">
      {/* Hero header */}
      <header className="ap-hero">
        <div className="ap-hero-inner">
          <Link to="/" className="ap-back">
            ← Back to Home
          </Link> <br />
          <span className="ap-eyebrow">Our Work</span>
          <h1 className="ap-hero-title">
            Brands We've
            <span className="ap-hero-accent"> Grown.</span>
          </h1>
          <p className="ap-hero-sub">
            From food to fashion, automotive to entertainment — every brand got
            a strategy built to convert and a voice built to last.
          </p>
          <div className="ap-hero-stat-row">
            {[
              ["7+", "Active Clients"],
              ["500K+", "Impressions Driven"],
              ["98%", "Client Retention"],
            ].map(([val, lbl]) => (
              <div className="ap-hero-stat" key={lbl}>
                <span className="ap-hero-stat-val">{val}</span>
                <span className="ap-hero-stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ap-hero-glow" aria-hidden="true" />
      </header>

      {/* Featured: 3 original projects with previews */}
      <section className="ap-section" aria-labelledby="ap-featured-label">
        <div className="ap-section-inner">
          <div className="ap-section-header">
            <span className="ap-section-eyebrow">Featured Projects</span>
            <h2 id="ap-featured-label" className="ap-section-title">
              Flagship Work
            </h2>
          </div>
          <div className="ap-feat-grid">
            {FEATURED.map((p, i) => (
              <FeaturedCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="ap-cta" aria-labelledby="ap-cta-label">
        <div className="ap-cta-inner">
          <span className="ap-eyebrow">Ready?</span>
          <h2 id="ap-cta-label" className="ap-cta-title">
            Let's Build Something
            <span className="ap-cta-accent"> Unforgettable.</span>
          </h2>
          <p className="ap-cta-body">
            Your brand deserves more than good-enough. Tell us what you're
            building — we'll tell you how to make it impossible to ignore.
          </p>
          <Link to="/" onClick={handleTalkBusinessClick} className="ap-cta-btn">
            Let's Talk Business
            <span className="ap-cta-btn-arrow">→</span>
          </Link>
        </div>
        <div className="ap-cta-glow" aria-hidden="true" />
      </section>
    </main>
    <Footer />
    </>
  );
};

export default memo(AllProjects);
