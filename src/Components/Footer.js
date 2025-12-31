import React from "react";
import "../styles/Home.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <p className="footer-copy">
          © {new Date().getFullYear()} TrikClik. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#privacy" rel="noopener noreferrer" tabIndex={0}>
            Privacy Policy
          </a>
          <span aria-hidden="true" className="footer-separator">•</span>
          <a href="#terms" rel="noopener noreferrer" tabIndex={0}>
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
