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
          <h4>Thank You</h4>
          <p>
            If you have any questions or comments please don't hesitate to call
            or message at anytime thank you for taking a look at my portfolio
          </p>
          <div className="socials">
            <FaFacebook
              href="https://www.facebook.com"
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
