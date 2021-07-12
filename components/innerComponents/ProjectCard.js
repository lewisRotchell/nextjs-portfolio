import React from "react";
import classes from "./ProjectCard.module.css";
import LinkButton from "../UI/LinkButton";

const ProjectCard = ({ image, title, description, projectLink, codeLink }) => {
  return (
    <div className={classes.card}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.cardDescription}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={classes.buttons}>
          <LinkButton
            externalLink={projectLink}
            className={classes.projectButton}
          >
            View Project
          </LinkButton>
          <LinkButton externalLink={codeLink} className={classes.projectButton}>
            View Code
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
