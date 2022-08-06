import "./HeroStyles.css";

import React from "react";

import heroImg from "../../assets/img/hero-img.jpg";

const HeroProjects = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <img className="hero-img" src={heroImg} alt="Hero" />
      </div>
      <div className="content">
        <h1>Projects</h1>
        <p> Some of my most recent work!!!</p>
      </div>
    </div>
  );
};

export default HeroProjects;
