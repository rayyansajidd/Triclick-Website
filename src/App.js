// src/App.js
import React, { useEffect, useState, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Critical components - load immediately
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Loader from "./Components/Loader";
import CustomCursor from "./Components/CustomCursor";

// Below-the-fold components - lazy load
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

    // Loader timeout 3 sec
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <NavBar />
      <HeroSection />
      <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
        <Main />
        <ServicesSection />
        <WorkSection />
        <ReviewSection />
        <ContactUs />
        <Footer />
      </Suspense>
      <CustomCursor />
    </>
  );
};

export default App;
