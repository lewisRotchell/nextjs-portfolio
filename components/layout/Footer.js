import React from "react";
import classes from "./Footer.module.css";
import ContactButton from "../UI/ContactButton";

const Footer = () => {
  return (
    <>
      <img src="/images/footer-wave.svg" alt="" />
      <footer id="contact" className={classes.footer}>
        <h2>Get In Touch!</h2>
        <p>
          If you are interested in working together or have any questions,
          please feel free to contact me.
        </p>
        <ContactButton className={classes.contactButton}>
          Let's Talk!
        </ContactButton>
      </footer>
    </>
  );
};

export default Footer;
