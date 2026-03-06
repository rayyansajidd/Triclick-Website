import React, { memo } from "react";
import "../styles/Home.css";
import reviewImg from "../assets/dummy";

const ReviewSection = () => {
  return (
    <section className="review-section" id="reviews" aria-labelledby="reviews-heading">
      <article className="review-content">
        <h2 id="reviews-heading">
          Why Clients <span>Love Us</span>
        </h2>

        <p>
          Trusted by hundreds of businesses worldwide for creative design, branding, and
          high-converting digital experiences.
        </p>

        <div className="review-actions">
          <a href="#contact" className="review-btn" aria-label="Book now through the contact section">
            Book Now
          </a>
          <span className="review-trust">⭐ 4.9 Rating · 500+ Clients</span>
        </div>
      </article>

      <div className="review-image">
        <img
          src={reviewImg}
          alt="Illustration of satisfied clients celebrating project success"
          loading="lazy"
          decoding="async"
          width={420}
          height={420}
        />
        <div className="review-glow" aria-hidden="true" />
      </div>
    </section>
  );
};

export default memo(ReviewSection);
