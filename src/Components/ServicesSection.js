import React from "react";
import "../styles/Home.css";

import image from "../assets/Digital.png";
import image1 from "../assets/Web.png";
import image2 from "../assets/Video.png";

/* 🔹 Service Card Component */
const ServiceCard = ({ title, desc, img }) => {
  return (
    <div className="service-card">
      <div className="service-text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <div className="service-image">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

/* 🔹 Main Section */
const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <p className="services-eyebrow">OUR SERVICES TO THE</p>

        <h2 className="services-title">
          <span>TABLE</span>
        </h2>

        <div className="services-grid">
          <ServiceCard
            title="Graphic Designing"
            desc="Combine art and technology to communicate ideas through images and modern layouts."
            img={image}
          />

          <ServiceCard
            title="Web & Mobile App Development"
            desc="High-performance websites and mobile apps built with clean UI and scalable architecture."
            img={image1}
          />

          <ServiceCard
            title="Videography"
            desc="Cinematic video production crafted to elevate your brand storytelling."
            img={image2}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
