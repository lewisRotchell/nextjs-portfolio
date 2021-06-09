import React from "react";
import classes from "./Hamburger.module.css";

const Hamburger = ({ toggleMenu, menuIsOpen }) => {
  return (
    <button
      onClick={() => toggleMenu()}
      className={`${classes.hamburger} ${menuIsOpen ? classes.closeMenu : ""}`}
    >
      <div
        className={`${classes.middleLine} ${
          menuIsOpen ? classes.closeMenu : ""
        }`}
      ></div>
    </button>
  );
};

export default Hamburger;
