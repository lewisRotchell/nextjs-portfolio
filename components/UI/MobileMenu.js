import React, { useEffect, useState, useRef } from "react";
import classes from "./MobileMenu.module.css";
import FocusTrap from "focus-trap-react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

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
      }}
    >
      <div
        ref={menu}
        className={`${classes.mobileMenu}`}
        style={{
          transform: `${menuIsOpen ? "translateX(0%)" : "translateX(-100%)"}`,
        }}
      >
        <ul className={classes.navList}>
          <li className={classes.navItems}>
            <a
              tabIndex={menuIsOpen ? undefined : 1}
              onClick={() => toggleMenu()}
              href="#home"
            >
              Home
            </a>
          </li>
          <li className={classes.navItems}>
            <a
              tabIndex={menuIsOpen ? undefined : 1}
              onClick={() => toggleMenu()}
              href="#about"
            >
              About
            </a>
          </li>
          <li className={classes.navItems}>
            <a
              tabIndex={menuIsOpen ? undefined : 1}
              onClick={() => toggleMenu()}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className={classes.navItems}>
            <a
              tabIndex={menuIsOpen ? undefined : 1}
              onClick={() => toggleMenu()}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </FocusTrap>
  );
};

export default MobileMenu;
