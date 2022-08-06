import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroProject from "../components/Heros/HeroProjects";
import PricingCards from "../components/Projects/PricingCards/PricingCards";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroProject />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Projects;
