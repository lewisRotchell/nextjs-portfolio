import React from "react";
import ProjectCard from "../innerComponents/ProjectCard";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section className="section-container">
      <h2>My Projects</h2>
      <div className="bottom-line"></div>
      <ProjectCard
        title={"Project A"}
        image={"/images/hero-image.png"}
        description={
          "This is a project that is a very nice project using certain technologies"
        }
      />
    </section>
  );
};

export default Projects;
