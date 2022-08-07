import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroContact from "../components/Heros/HeroContact";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroContact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
