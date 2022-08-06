import "./HeroStyles.css";

import React from "react";

import heroImg from "../../assets/img/hero-img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <img className="hero-img" src={heroImg} alt="Hero" />
      </div>
      <div className="content">
        <p> Hello I am a</p>
        <h1>Full Stack Developer</h1>
      </div>
    </div>
  );
};

export default Hero;
