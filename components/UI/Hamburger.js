import React from "react";
import classes from "./Hamburger.module.css";

const Hamburger = ({ toggleMenu, menuIsOpen }) => {
  return (
    <button
      onClick={() => toggleMenu()}
      className={`${"hamburger"} ${menuIsOpen ? "close-menu" : ""}`}
    >
      <div
        className={`${"middleLine"} ${menuIsOpen ? "close-menu" : ""}`}
      ></div>
    </button>
  );
};

export default Hamburger;
