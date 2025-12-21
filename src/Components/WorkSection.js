// src/Components/WorkSection.js
import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import img from "../assets/ph5.png"
import img1 from "../assets/Latte.png"
import img2 from "../assets/Lazy6.png"
const SLIDES = [
  {
    id: 1,
    image: img,
    title: "PH5 Coffee Shop",
  },
  {
    id: 2,
    image: img1,
    title: "Latte Coffeessss...",
  },
  {
    id: 3,
    image: img2,
    title: "Lazy6 Clothing",
  },
  // {
  //   id: 4,
  //   image: "https://via.placeholder.com/500x650.png?text=Content+Series+4",
  //   title: "Creator-Led Content Series",
  // },
  // {
  //   id: 5,
  //   image: "https://via.placeholder.com/500x650.png?text=Rebrand+5",
  //   title: "Full Brand Revamp For FMCG",
  // },
  // {
  //   id: 6,
  //   image: "https://via.placeholder.com/500x650.png?text=Digital+Launch+6",
  //   title: "Digital-First Product Launch",
  // },
];

const WorkSection = () => {
  const [current, setCurrent] = useState(0);

  // auto-play every 4 seconds (infinite loop)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="work" className="work-section">
      <div className="container-fluid work-inner">
        <div className="row g-0 align-items-center">
          {/* LEFT: TEXT BLOCK */}
          <div className="col-12 col-lg-5">
            <div className="work-copy">
              <h2 className="work-heading">
                JUST SOME
                <br />
                OF OUR
                <br />
                <span className="work-heading-em">WORK..</span>
              </h2>

              <p className="work-description">
                Step into the world of bold ideas and scroll-stopping stories.
                From national TVCs and digital launches to wild social
                campaigns, our portfolio shows how we turn brands into
                experiences people remember.
              </p>
              <p className="work-description">
                Explore the projects to see how we mix strategy, design, and
                production to create work that actually performs.
              </p>

              <button className="btn work-btn">VIEW ALL PROJECTS</button>
            </div>
          </div>

          {/* RIGHT: SLIDER */}
          <div className="col-12 col-lg-7">
            <div className="work-slider">
              {/* slides */}
              <div className="work-slide-window">
                {SLIDES.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`work-slide ${
                      index === current ? "active" : ""
                    }`}
                  >
                    <img src={slide.image} alt={slide.title} />
                    <div className="work-slide-caption">
                      <p>{slide.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* arrows */}
              <button
                className="work-nav-btn work-nav-left"
                type="button"
                onClick={goPrev}
              >
                ‹
              </button>
              <button
                className="work-nav-btn work-nav-right"
                type="button"
                onClick={goNext}
              >
                ›
              </button>

              {/* dots */}
              <div className="work-dots">
                {SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`work-dot ${
                      index === current ? "active" : ""
                    }`}
                    onClick={() => setCurrent(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
