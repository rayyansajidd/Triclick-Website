import React from "react";
import "../styles/Home.css";
import logo from "../assets/dance.png";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-inner">
        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div
              className="hero-image-wrapper"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={logo}
                alt="Creative mannequin"
                className="img-fluid hero-image floating"
              />
            </div>
          </div>

          <div className="col-lg-7" data-aos="zoom-out-down">
            <p className="hero-tagline">TRADITIONAL IS NOT OUR THING</p>
            <h1 className="hero-title">
              <span className="highlight-pink">We Create</span> Stories For
              Brands Worth Sharing
            </h1>
            <p className="hero-subtitle">
              We don&apos;t do boring. At Triklik, we craft bold digital stories
              that actually get people talking. From social campaigns to brand
              films, everything is built to stand out and deliver results.
            </p>
            <a href="#aboutus" className="btn hero-btn">
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
