import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroProject from "../components/Heros/HeroProjects";
import Project from "../components/Projects/ProjectCard/ProjectContainer";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroProject />
      <Project />
      <Footer />
    </div>
  );
};

export default Projects;
