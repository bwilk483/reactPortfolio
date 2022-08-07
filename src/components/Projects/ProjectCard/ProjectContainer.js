import React from "react";

import "./ProjectCardStyles.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectsCardData";

const projectContainer = () => {
  return (
    <div className="project">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, ind) => {
          return (
            <ProjectCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              description={val.description}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default projectContainer;
