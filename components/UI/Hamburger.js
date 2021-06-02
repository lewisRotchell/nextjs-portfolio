import React from "react";
import classes from "./Hamburger.module.css";

const Hamburger = () => {
  return (
    <button className={classes.hamburger}>
      <div className={classes.middleLine}></div>
    </button>
  );
};

export default Hamburger;
