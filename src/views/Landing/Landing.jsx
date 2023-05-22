import React from "react";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import HeroSection from "./Sections/HeroSection";
import Solutions from "./Sections/Solutions";
import WhyUs from "./Sections/WhyUs";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <WhyUs />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
