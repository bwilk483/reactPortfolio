import "./HeroStyles.css";

import React from "react";

import heroImg from "../../assets/img/hero-img.jpg";

const HeroAbout = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <img className="hero-img" src={heroImg} alt="Hero" />
      </div>
      <div className="content">
        <h1>About Me</h1>
        <p> Info About me</p>
      </div>
    </div>
  );
};

export default HeroAbout;
