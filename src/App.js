// src/App.js
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServicesSection";
import WorkSection from "./Components/WorkSection";
import ReviewSection from "./Components/ReviewSection";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import ContactUs from "./Components/ContactUs";
import CustomCursor from "./Components/CustomCursor";
import Loader from "./Components/Loader"; // ✅ add loader

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
      offset: 0,
    });

    // ⏳ Loader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // 🔁 Show loader first
  if (loading) {
    return <Loader />;
  }

  // 🌐 Show website after loader
  return (
    <>
      <NavBar />
      <HeroSection />
      <Main />
      <ServicesSection />
      <WorkSection />
      <ReviewSection />
      <ContactUs />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default App;
