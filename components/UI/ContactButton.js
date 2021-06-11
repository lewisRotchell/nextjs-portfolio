import React from "react";
import classes from "./ContactButton.module.css";

const ContactButton = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
};

export default ContactButton;
