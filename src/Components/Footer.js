import React, { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Home.css";

const navLinks = [
  { sectionId: "home", label: "Home" },
  { sectionId: "services", label: "Services" },
  { sectionId: "work", label: "Portfolio" },
  { sectionId: "contact", label: "Contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/trikclik/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/trikclik/",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
    <footer className="ft-footer" role="contentinfo">
      {/* Top divider glow */}
      <div className="ft-glow-bar" aria-hidden="true" />

      <div className="ft-inner">

        {/* ── Brand column ── */}
        <div className="ft-brand">
          <span className="ft-logo">
            Trik<span className="ft-logo-accent">Clik</span>
          </span>
          <p className="ft-tagline">
            We don't follow trends.<br />We create them.
          </p>
        </div>

        {/* ── Nav column ── */}
        <nav className="ft-nav" aria-label="Footer navigation">
          <span className="ft-col-label">Navigate</span>
          <ul className="ft-nav-list">
            {navLinks.map(({ sectionId, label }) => (
              <li key={sectionId}>
                <a
                  href={`/#${sectionId}`}
                  className="ft-nav-link"
                  onClick={(event) => handleNavClick(event, sectionId)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Contact column ── */}
        <div className="ft-contact">
          <span className="ft-col-label">Say Hello</span>
          <a href="mailto:Info@trikclik.com" className="ft-email">
            Info@trikclik.com
          </a>
          <div className="ft-socials" role="list" aria-label="Social media links">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="ft-social-btn"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="ft-bottom">
        <p className="ft-copy">
          © {new Date().getFullYear()} TrikClik. All rights reserved.
        </p>
        <p className="ft-made">
          Crafted with <span className="ft-heart" aria-hidden="true">♥</span> for brands that dare.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);