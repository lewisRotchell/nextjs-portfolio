import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = ({ show }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show && (
    <div className={classes.overlay}>
      <div className={classes.modal}>{children}</div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div>Hello from modal</div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
