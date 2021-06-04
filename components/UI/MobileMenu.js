import React from "react";
import classes from "./MobileMenu.module.css";

const MobileMenu = () => {
  return (
    <div className={classes.mobileMenu}>
      <ul className={classes.navList}>
        <li className={classes.navItems}>
          <a href="#home">Home</a>
        </li>
        <li className={classes.navItems}>
          <a href="#about">About</a>
        </li>
        <li className={classes.navItems}>
          <a href="#projects">Projects</a>
        </li>
        <li className={classes.navItems}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
