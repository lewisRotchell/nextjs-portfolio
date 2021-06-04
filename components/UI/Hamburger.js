import React from "react";
import classes from "./Hamburger.module.css";

const Hamburger = ({ toggleMenu }) => {
  return (
    <button onClick={() => toggleMenu()} className={classes.hamburger}>
      <div className={classes.middleLine}></div>
    </button>
  );
};

export default Hamburger;
