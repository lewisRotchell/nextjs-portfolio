import React from "react";
import classes from "./LinkButton.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const LinkButton = ({ children, className, target, externalLink }) => {
  if (externalLink) {
    return (
      <a
        className={`${classes.button} ${className}`}
        href={externalLink}
        target="_blank"
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        to={target}
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        href={target}
        className={`${classes.button} ${className}`}
      >
        {children}
      </Link>
    );
  }
};

export default LinkButton;
