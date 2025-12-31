import "../styles/Home.css";
// Note: reviewImg import removed - image file appears to be invalid
// If you have a valid image, import it here

const ReviewSection = () => {

  return (
    <section className="review-section">
      <div className="review-content">
        <h2>
          Why Clients <span>Love Us</span>
        </h2>

        <p>
          Trusted by hundreds of businesses worldwide for creative design,
          branding, and high-converting digital experiences.
        </p>

        <div className="review-actions">
         <a href="#contact"> <button className="review-btn">Book Now</button></a>
          <span className="review-trust">⭐ 4.9 Rating · 500+ Clients</span>
        </div>
      </div>

      <div className="review-image">
        {/* Image removed - add valid image import when available */}
        <div className="review-glow"></div>
      </div>
    </section>
  );
};

export default ReviewSection;
