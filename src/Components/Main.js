import React from "react";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import img3 from "../assets/img3.png";
const main = () => {
  return (
    <div className="main-div">
      <div className="main">
        <div className="pic">
          <img
            data-aos="zoom-in-right"
            data-aos-delay="1000"
            className="iimg"
            src={img3}
            alt="GO VIRAL:"
          />
        </div>
        <div className="aboutus" id="aboutus">
          <span className="spn1">
            TRADITIONAL <br />{" "}
            <span style={{ color: "white", fontSize: "3rem" }}>IS NOT OUR THING</span>
          </span>
          <span className="spn2">
            <button className="about-btn">About Us</button>
          </span>
          <span className="spn3">
            We don't do boring, at TrikClik, we're not here to follow trends,
            we're here to create them. <br />
            So we come up with fresh, creative ways to help your brand get
            noticed — and remembered, all while helping you grow the right
            audience and <br />
            boost your profits.
            <br />
            No dull posts or old-school methods here.
            <br />
            Just scroll-stopping content, ideas that click, and a team that
            actually gets what today's audience wants.
            <br />
            You do what you're best at — let us take care of the rest.
            <br />
          </span>
        </div>
      </div>
    </div>
  );
};

export default main;
