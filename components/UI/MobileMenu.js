import React, { useEffect, useState, useRef } from "react";
import classes from "./MobileMenu.module.css";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const MobileMenu = ({ menuIsOpen, toggleMenu }) => {
  const menu = useRef(menu);

  useEffect(() => {
    menuIsOpen && disableBodyScroll(menu);
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [menuIsOpen]);

  return (
    <div ref={menu} className={classes.mobileMenu}>
      <ul className={classes.navList}>
        <li className={classes.navItems}>
          <a onClick={() => toggleMenu()} href="#home">
            Home
          </a>
        </li>
        <li className={classes.navItems}>
          <a onClick={() => toggleMenu()} href="#about">
            About
          </a>
        </li>
        <li className={classes.navItems}>
          <a onClick={() => toggleMenu()} href="#projects">
            Projects
          </a>
        </li>
        <li className={classes.navItems}>
          <a onClick={() => toggleMenu()} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
