import React from "react";
import classes from "./ContactButton.module.css";

const ContactButton = ({ children, className }) => {
  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
};

export default ContactButton;
