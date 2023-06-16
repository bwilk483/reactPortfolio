import React from "react";
import { Link } from "react-router-dom";

const FSCNavb = () => {
  return (
    <div className="fcsnavbar">
      <div className="fcslogo">
        <Link className="navLink" to="/fourstatesconstruction">
          FourStatesConstruction.com
        </Link>
      </div>
      <ul>
        <li>
          <Link className="navLink" to="/fourstatesconstruction">
            Home
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/fourstatesconstruction/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/fourstatesconstruction/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/fourstatesconstruction/contractor">
            Become a Contractor
          </Link>
        </li>

        <li></li>
      </ul>
    </div>
  );
};

export default FSCNavb;
