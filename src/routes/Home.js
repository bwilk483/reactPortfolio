import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Heros/Hero";
import Footer from "../components/Footer/Footer";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default home;
