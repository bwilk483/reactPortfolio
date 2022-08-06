import "./HeroStyles.css";

import React from "react";

import heroImg from "../../assets/img/hero-img.jpg";

const HeroContact = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <img className="hero-img" src={heroImg} alt="Hero" />
      </div>
      <div className="content">
        <h1>Contacts</h1>
        <p> Lets have a chat!</p>
      </div>
    </div>
  );
};

export default HeroContact;
