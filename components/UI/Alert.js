import React, { useState, useEffect } from "react";
import classes from "./Alert.module.css";

const Alert = ({ className, message }) => {
  return (
    <aside className={`${classes.alert} ${classes[className]}`}>
      <p className={classes.text}>{message}</p>
    </aside>
  );
};

export default Alert;
