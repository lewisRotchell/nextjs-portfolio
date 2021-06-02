import React from "react";
import classes from "./LinkButton.module.css";

const LinkButton = ({ children, style, id, className }) => {
  return <a className={`${classes.button} ${className}`}>{children}</a>;
};

export default LinkButton;
