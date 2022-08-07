import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project one"></img>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.description}</p>
        <div className="pro-btn">
          <NavLink to="url.com" className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
