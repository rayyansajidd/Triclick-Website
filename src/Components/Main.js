import React, { memo } from "react";
import "../styles/Home.css";

import img3 from "../assets/img3.png";

const Main = () => {
  return (
    <section className="main-div" id="about" aria-labelledby="about-title">
      <div className="main">
        <figure className="pic" aria-hidden="true">
          <img
            data-aos="zoom-in-right"
            data-aos-delay="1000"
            className="iimg"
            src={img3}
            alt="TrikClik creative team concept"
            loading="lazy"
            decoding="async"
            width={600}
            height={400}
          />
        </figure>

        <article className="aboutus">
          <h2 className="spn1" id="about-title">
            TRADITIONAL <br /> <span style={{ color: "white", fontSize: "3rem" }}>IS NOT OUR THING</span>
          </h2>

          <div className="spn2">
            <a href="#contact" className="about-btn" aria-label="Go to contact form">
              About Us
            </a>
          </div>

          <p className="spn3">
            We don&apos;t do boring, at TrikClik, we&apos;re not here to follow trends, we&apos;re here to
            create them. <br />
            So we come up with fresh, creative ways to help your brand get noticed and remembered,
            all while helping you grow the right audience and boost your profits.
            <br />
            No dull posts or old-school methods here.
            <br />
            Just scroll-stopping content, ideas that click, and a team that actually gets what
            today&apos;s audience wants.
            <br />
            You do what you&apos;re best at. Let us take care of the rest.
          </p>
        </article>
      </div>
    </section>
  );
};

export default memo(Main);
