import React, { memo } from "react";
import "../styles/Home.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <p className="footer-copy">© {new Date().getFullYear()} TrikClik. All rights reserved.</p>
        <nav className="footer-links" aria-label="Footer links">
          <a href="#home">Home</a>
          <span aria-hidden="true" className="footer-separator">
            •
          </span>
          <a href="#services">Services</a>
          <span aria-hidden="true" className="footer-separator">
            •
          </span>
          <a href="#work">Portfolio</a>
          <span aria-hidden="true" className="footer-separator">
            •
          </span>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default memo(Footer);
