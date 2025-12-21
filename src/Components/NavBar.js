import React from "react";
import "../styles/Home.css";
import logo from "../assets/Logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg triklik-navbar">
      <div className="container">
        <a className="navbar-brand triklik-logo" href="#home">
          <span className="logo-mark">
            <img className="logo" src={logo} alt="Logo" />
          </span>
          <span className="logo-text">TRIKLIK</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <a className="nav-link nav-link-custom active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#about">
                Meet The Squad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#work">
                Post For Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
