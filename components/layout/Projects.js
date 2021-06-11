import React from "react";
import ProjectCard from "../innerComponents/ProjectCard";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2>My Projects</h2>
      <div className="bottom-line"></div>
      <ProjectCard
        title={"Project A"}
        image={"/images/hero-svg.svg"}
        description={
          "This is a project that is a very nice project using certain technologies"
        }
        projectLink={""}
        codeLink={""}
      />
      <ProjectCard
        title={"Project B"}
        image={"/images/hero-svg.svg"}
        description={
          "This is a project that is a very nice project using certain technologies"
        }
        projectLink={""}
        codeLink={""}
      />
      <ProjectCard
        title={"Project C"}
        image={"/images/hero-svg.svg"}
        description={
          "This is a project that is a very nice project using certain technologies"
        }
        projectLink={""}
        codeLink={""}
      />
    </section>
  );
};

export default Projects;
