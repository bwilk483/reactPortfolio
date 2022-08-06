import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>PO. Box 710</p>
              <p>Webb City MO 64870</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <h4>417-572-1941</h4>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <h4>bwilk483@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>Info Text in Here</h4>
          <p>
            i need to add info in here about me that will tell them a little bit
            about myself
          </p>
          <FaFacebook
            size={20}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
          <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <FaLinkedin
            size={20}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
