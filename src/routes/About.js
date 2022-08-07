import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroAbout from "../components/Heros/HeroAbout";
import AboutContent from "../components/About/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
