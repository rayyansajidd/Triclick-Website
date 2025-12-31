// src/App.js
import React, { useEffect } from "react";
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

//Animation On Scroll Integration 
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
      offset: 0,
    });
  }, []); 

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
