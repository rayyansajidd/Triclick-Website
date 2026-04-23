import React, { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import RouteHelmet from "./seo/RouteHelmet";
import { prefersCoarsePointer, prefersReducedScrollMotion } from "./utils/device";
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
const AllProjects = lazy(() => import("./Components/AllProjects"));

const HomePage = () => (
  <>
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
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      AOS.init({
        duration: 2000,
        easing: "ease-out-cubic",
        once: true,
        offset: 0,
        // Keep AOS active on touch devices; disabling it leaves data-aos elements hidden.
        disable: false,
      });
    } catch {
      /* Safari / strict environments: never block first paint on AOS */
    }

    const introMs = prefersCoarsePointer() ? 1200 : 2800;
    const timer = setTimeout(() => setLoading(false), introMs);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;
    if (location.pathname !== "/" || !scrollTarget) return;

    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 90;
    const getNavbarOffset = () => {
      const navbar = document.querySelector(".triklik-navbar");
      return navbar ? navbar.getBoundingClientRect().height + 8 : 0;
    };

    const clearScrollState = () => {
      navigate("/", { replace: true, state: null });
    };

    const tick = () => {
      if (cancelled) return;
      const section = document.getElementById(scrollTarget);
      if (section) {
        const behavior = prefersReducedScrollMotion() ? "auto" : "smooth";
        const targetTop = section.getBoundingClientRect().top + window.scrollY - getNavbarOffset();
        window.scrollTo({ top: Math.max(targetTop, 0), behavior });
        clearScrollState();
        return;
      }
      attempts += 1;
      if (attempts >= maxAttempts) {
        clearScrollState();
        return;
      }
      window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
    return () => {
      cancelled = true;
    };
  }, [location, navigate]);

  return (
    <>
      <RouteHelmet />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/AllProjects" element={<AllProjects />} />
            </Routes>
          </Suspense>
          <CustomCursor />
        </>
      )}
    </>
  );
};

export default App;
