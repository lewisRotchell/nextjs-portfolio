import React, { useEffect, useState, useRef } from "react";
import classes from "./MobileMenu.module.css";
import FocusTrap from "focus-trap-react";
import { slide as Menu } from "react-burger-menu";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { Link, animateScroll as scroll } from "react-scroll";

const MobileMenu = ({ menuIsOpen, toggleMenu }) => {
  let menu;
  const menuRef = useRef();

  useEffect(() => {
    menu = menuRef;
    menuIsOpen && disableBodyScroll(menu);
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [menuIsOpen]);

  return (
    <FocusTrap
      active={menuIsOpen}
      focusTrapOptions={{
        clickOutsideDeactivates: true,
        initialFocus: "#list",
      }}
    >
      <div
        ref={menu}
        className={`${menuIsOpen && classes.menuAppear} ${classes.mobileMenu}`}
      >
        <ul tabIndex={-1} id="list" className={classes.navList}>
          <button
            style={{ visibility: `${menuIsOpen ? "visible" : "hidden"}` }}
            onClick={() => toggleMenu()}
            className={classes.emptyHamburgerButton}
          ></button>
          <li
            style={{ visibility: `${menuIsOpen ? "visible" : "hidden"}` }}
            className={classes.navItems}
          >
            <Link
              tabIndex={menuIsOpen ? undefined : 1}
              onClick={() => toggleMenu()}
              to="home"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              href="#home"
            >
              Home
            </Link>
          </li>
          <li
            style={{ visibility: `${menuIsOpen ? "visible" : "hidden"}` }}
            className={classes.navItems}
          >
            <Link
              tabIndex={menuIsOpen ? undefined : 1}
              onClick={() => toggleMenu()}
              to="about"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              href="about"
            >
              About
            </Link>
          </li>
          <li
            style={{ visibility: `${menuIsOpen ? "visible" : "hidden"}` }}
            className={classes.navItems}
          >
            <Link
              tabIndex={menuIsOpen ? undefined : 1}
              onClick={() => toggleMenu()}
              to="projects"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              href="#projects"
            >
              Projects
            </Link>
          </li>
          <li
            style={{ visibility: `${menuIsOpen ? "visible" : "hidden"}` }}
            className={classes.navItems}
          >
            <Link
              tabIndex={menuIsOpen ? undefined : 1}
              onClick={() => toggleMenu()}
              to="contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              href="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </FocusTrap>
  );
};

export default MobileMenu;
