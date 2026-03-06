import React, { useState, useEffect, memo } from "react";
import "../styles/Home.css";
import img from "../assets/ph5.png";
import img1 from "../assets/Latte.png";
import img2 from "../assets/Lazy6.png";

const SLIDES = [
  {
    id: 1,
    image: img,
    title: "PH5 Coffee Shop",
  },
  {
    id: 2,
    image: img1,
    title: "Latte Coffees Campaign",
  },
  {
    id: 3,
    image: img2,
    title: "Lazy6 Clothing",
  },
];

const WorkSection = () => {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([0]));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const nextIndex = (current + 1) % SLIDES.length;
    if (!loadedImages.has(nextIndex)) {
      const preloadImage = new Image();
      preloadImage.src = SLIDES[nextIndex].image;
      preloadImage.onload = () => {
        setLoadedImages((prev) => new Set([...prev, nextIndex]));
      };
    }
  }, [current, loadedImages]);

  const goNext = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <div className="container-fluid work-inner">
        <div className="row g-0 align-items-center">
          <article className="col-12 col-lg-5">
            <div className="work-copy">
              <h2 className="work-heading" id="work-heading">
                JUST SOME
                <br />
                OF OUR
                <br />
                <span className="work-heading-em">WORK..</span>
              </h2>

              <p className="work-description">
                Step into the world of bold ideas and scroll-stopping stories. From national TVCs and
                digital launches to wild social campaigns, our portfolio shows how we turn brands into
                experiences people remember.
              </p>
              <p className="work-description">
                Explore the projects to see how we mix strategy, design, and production to create work
                that actually performs.
              </p>

              <button className="btn work-btn" type="button" aria-label="View all projects">
                VIEW ALL PROJECTS
              </button>
            </div>
          </article>

          <div className="col-12 col-lg-7">
            <div className="work-slider" aria-label="Portfolio highlights carousel">
              <div className="work-slide-window">
                {SLIDES.map((slide, index) => (
                  <article
                    key={slide.id}
                    className={`work-slide ${index === current ? "active" : ""}`}
                    aria-hidden={index !== current}
                  >
                    {loadedImages.has(index) ? (
                      <img
                        src={slide.image}
                        alt={`${slide.title} project preview`}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        width={500}
                        height={650}
                      />
                    ) : (
                      <div
                        style={{
                          width: "500px",
                          height: "650px",
                          backgroundColor: "#f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        role="status"
                        aria-live="polite"
                      >
                        Loading...
                      </div>
                    )}
                    <div className="work-slide-caption">
                      <h3>{slide.title}</h3>
                    </div>
                  </article>
                ))}
              </div>

              <button
                className="work-nav-btn work-nav-left"
                type="button"
                onClick={goPrev}
                aria-label="Show previous project"
              >
                ‹
              </button>
              <button
                className="work-nav-btn work-nav-right"
                type="button"
                onClick={goNext}
                aria-label="Show next project"
              >
                ›
              </button>

              <div className="work-dots" role="tablist" aria-label="Carousel slide selectors">
                {SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`work-dot ${index === current ? "active" : ""}`}
                    onClick={() => setCurrent(index)}
                    aria-label={`Show ${slide.title}`}
                    aria-selected={index === current}
                    role="tab"
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

export default memo(WorkSection);
