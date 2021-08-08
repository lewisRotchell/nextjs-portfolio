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
        image={"/images/nextMovieImg.jpg"}
        description={
          "Search for information about your favourite movies or find out which movies are currently popular right now."
        }
        projectLink={"https://next-movie-7xj0unlwb-lewisrotchell.vercel.app/"}
        codeLink={"https://github.com/lewisRotchell/next-movie"}
      />
      <ProjectCard
        title={"Calorie Estimator"}
        image={"/images/calorie-estimator-img.jpg"}
        description={
          "Find out how many calories you need to consume to maintain or lose weight."
        }
        projectLink={"https://gallant-davinci-012d67.netlify.app/"}
        codeLink={"https://github.com/lewisRotchell/calorie-estimator-v2"}
      />
    </section>
  );
};

export default Projects;
