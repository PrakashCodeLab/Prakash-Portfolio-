import React from "react";
import "./Project.scss";
import ProjectCard from "./ProjectCard";
import Line from "../../components/ProjectCard/Line";

const Project = () => {
  return (
    <section className="project__section">
      <h2 className="project__section__heading">
        <Line heading={"Some Things I’ve Built"} />
      </h2>
      <div className="project__wrapper--section">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Project;
