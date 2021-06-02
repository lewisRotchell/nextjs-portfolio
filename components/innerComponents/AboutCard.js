import React from "react";
import classes from "./AboutCard.module.css";

const AboutCard = ({ image, title, description }) => {
  return (
    <div className={classes.card}>
      <i className={image}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AboutCard;
