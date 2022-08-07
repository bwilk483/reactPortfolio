import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Heros/Hero";
import Footer from "../components/Footer/Footer";
import Project from "../components/Projects/ProjectCard/ProjectContainer";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
};

export default home;
