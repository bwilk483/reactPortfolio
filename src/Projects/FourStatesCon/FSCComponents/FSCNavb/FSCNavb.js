import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FSCNavb.css";
import { FaBars, FaTimes } from "react-icons/fa";

const FSCNavb = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <h1>FourStatesContractors.com</h1>
      <ul className={click ? "nav-menu-active" : "nav-menu"}>
        <li>
          <Link to="/fourstatescontractors">Home</Link>
        </li>
        <li>
          <Link to="/fourstatescontractors/requst">Request a Contractors</Link>
        </li>
        <li>
          <Link to="/fourstatescontractors/About">About US</Link>
        </li>
        <li>
          <Link to="/fourstatescontractors/Contact">Contact US</Link>
        </li>
        <li>
          <Link to="/fourstatescontractors/Contractors">
            Become A Recommended Contractor
          </Link>
        </li>
      </ul>
      <div></div>
      <div className="nav-icon" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default FSCNavb;
