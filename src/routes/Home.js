import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Heros/Hero";
import Footer from "../components/Footer/Footer";
import Project from "../components/Projects/ProjectCard/ProjectContainer";
import ReactIcons from "../components/ReactIcons/ReactIcons";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ReactIcons />
      <Project />
      <Footer />
    </div>
  );
};

export default home;
