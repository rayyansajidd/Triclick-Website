import React, { memo, useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import logo from "../assets/Logo.png";

const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current <= 0) {
        setHidden(false);
      } else if (current > lastScrollY.current) {
        setHidden(false);
      } else {
        setHidden(true);
      }
      lastScrollY.current = current;
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg triklik-navbar${hidden ? " triklik-navbar--hidden" : ""}`}
      aria-label="Primary navigation"
    >
      <div className="container">
        <a className="navbar-brand triklik-logo" href="#home" aria-label="TrikClik – back to top">
          <span className="logo-mark">
            <img
              className="logo"
              src={logo}
              alt=""
              fetchPriority="high"
              width={32}
              height={32}
            />
          </span>
          <span className="logo-text">TrikClik</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <a className="nav-link nav-link-custom active" href="#home" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#about">
                Meet The Squad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#work">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#reviews">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(NavBar);
