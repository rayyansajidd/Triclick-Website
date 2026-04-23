import React, { memo, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Home.css";
import logo from "../assets/Logo.png";
import Loader from "./Loader";
import { prefersCoarsePointer, prefersReducedScrollMotion } from "../utils/device";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPortfolioRouting, setIsPortfolioRouting] = useState(false);
  const portfolioTimerRef = useRef(null);

  const scrollBehavior = prefersReducedScrollMotion() ? "auto" : "smooth";

  const getNavbarOffset = () => {
    const navbar = document.querySelector(".triklik-navbar");
    return navbar ? navbar.getBoundingClientRect().height + 8 : 0;
  };

  const closeMobileMenu = () => {
    const collapseEl = document.getElementById("navbarSupportedContent");
    const toggler = document.querySelector(".navbar-toggler");
    if (collapseEl?.classList.contains("show")) {
      collapseEl.classList.remove("show");
      toggler?.setAttribute("aria-expanded", "false");
    }
  };

  const scrollToSection = (el) => {
    const targetTop = el.getBoundingClientRect().top + window.scrollY - getNavbarOffset();
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: scrollBehavior });
  };

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    closeMobileMenu();
    let attempts = 0;
    const maxAttempts = 90;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        scrollToSection(el);
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        window.requestAnimationFrame(tick);
      }
    };
    window.requestAnimationFrame(tick);
  };

  const portfolioDelayMs = prefersCoarsePointer() ? 0 : 2000;

  const handlePortfolioClick = () => {
    if (isPortfolioRouting) return;
    if (portfolioDelayMs === 0) {
      navigate("/AllProjects", { state: { smoothEntry: true } });
      return;
    }
    setIsPortfolioRouting(true);
    portfolioTimerRef.current = setTimeout(() => {
      navigate("/AllProjects", { state: { smoothEntry: true } });
    }, portfolioDelayMs);
  };

  useEffect(() => {
    return () => {
      if (portfolioTimerRef.current) {
        clearTimeout(portfolioTimerRef.current);
      }
    };
  }, []);

  if (isPortfolioRouting) {
    return <Loader />;
  }

  return (
    <nav className="navbar navbar-expand-lg triklik-navbar">
      <div className="container">

        {/* ✅ Logo → route without reload */}
        <Link className="navbar-brand triklik-logo" to="/">
          <span className="logo-mark">
            <img src={logo} alt="TrikClik logo" width={30} height={30} />
          </span>
          <span className="logo-text">TRIKCLIK</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto gap-lg-4">

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("home")}>
                Home
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("about")}>
                About Us
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("services")}>
                Services
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link nav-link-custom nav-link-portfolio"
                onClick={handlePortfolioClick}
              >
                Portfolio
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("reviews")}>
                Reviews
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link nav-link-custom" onClick={() => handleScroll("contact")}>
                Contact Us
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(NavBar);