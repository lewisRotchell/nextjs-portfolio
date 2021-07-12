import React from "react";
import ProjectCard from "../innerComponents/ProjectCard";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2>My Projects</h2>
      <div className="bottom-line"></div>
      <ProjectCard
        title={"Next Movie"}
        image={"/images/unsplash.jpg"}
        description={
          "Search for information about your favourite movies or find out which movies are currently popular right now."
        }
        projectLink={"https://next-movie-7xj0unlwb-lewisrotchell.vercel.app/"}
        codeLink={"https://github.com/lewisRotchell/next-movie"}
      />
    </section>
  );
};

export default Projects;
