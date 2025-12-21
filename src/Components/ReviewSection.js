import "../styles/Home.css";
import reviewImg from "../assets/dummy"; 

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
          <button className="review-btn">Book Now</button>
          <span className="review-trust">⭐ 4.9 Rating · 500+ Clients</span>
        </div>
      </div>

      <div className="review-image">
        <img src={reviewImg} alt="Happy client illustration" />
        <div className="review-glow"></div>
      </div>
    </section>
  );
};

export default ReviewSection;
