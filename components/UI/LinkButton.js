import React from "react";
import classes from "./LinkButton.module.css";

const LinkButton = ({ children, className, target }) => {
  return (
    <a href={target} className={`${classes.button} ${className}`}>
      {children}
    </a>
  );
};

export default LinkButton;
