import React, { memo } from "react";
import "../styles/Home.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="footer-container">
        <p className="footer-copy">
          © {year} TrikClik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
