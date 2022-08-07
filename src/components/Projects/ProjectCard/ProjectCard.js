import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project one"></img>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.description}</p>
        <div className="pro-btn">
          <a
            href={props.view}
            className="btn"
            target="_blink"
            rel="noopener"
            aria-label="Github"
          >
            View
          </a>
          <a
            href={props.source}
            className="btn"
            target="_blink"
            rel="noopener"
            aria-label="Github"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
