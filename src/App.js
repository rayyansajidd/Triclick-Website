import React, { useEffect, useState, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Loader from "./Components/Loader";
import CustomCursor from "./Components/CustomCursor";

const Main = lazy(() => import("./Components/Main"));
const ServicesSection = lazy(() => import("./Components/ServicesSection"));
const WorkSection = lazy(() => import("./Components/WorkSection"));
const ReviewSection = lazy(() => import("./Components/ReviewSection"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const Footer = lazy(() => import("./Components/Footer"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
      offset: 0,
    });

    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>TrikClik | Creative Digital Agency</title>
        <meta
          name="description"
          content="TrikClik is a creative digital agency helping brands grow through graphic design, web and app development, videography, and campaign storytelling."
        />
        <meta
          name="keywords"
          content="TrikClik, digital agency, graphic design, web development, app development, videography, branding"
        />
        <link rel="canonical" href="https://habibrehman001.github.io/-React-JS/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="TrikClik | Creative Digital Agency" />
        <meta
          property="og:description"
          content="We create stories for brands worth sharing through design, development, and video production."
        />
        <meta
          property="og:url"
          content="https://habibrehman001.github.io/-React-JS/"
        />
        <meta
          property="og:image"
          content="https://habibrehman001.github.io/-React-JS/Logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TrikClik | Creative Digital Agency" />
        <meta
          name="twitter:description"
          content="Bold digital stories, brand campaigns, and creative production built to perform."
        />
        <meta
          name="twitter:image"
          content="https://habibrehman001.github.io/-React-JS/Logo.png"
        />
      </Helmet>

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header>
        <NavBar />
        <HeroSection />
      </header>

      <main id="main-content" aria-label="Main content">
        <Suspense fallback={<div style={{ minHeight: "200px" }} aria-hidden="true" />}>
          <Main />
          <ServicesSection />
          <WorkSection />
          <ReviewSection />
          <ContactUs />
        </Suspense>
      </main>

      <Suspense fallback={<div style={{ minHeight: "80px" }} aria-hidden="true" />}>
        <Footer />
      </Suspense>

      <CustomCursor />
    </>
  );
};

export default App;
