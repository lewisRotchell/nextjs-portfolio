import React from "react";
import classes from "./ContactForm.module.css";
import useInput from "../../hooks/use-input";
import ContactButton from "./ContactButton";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim().includes("@");

const ContactForm = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangedHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangedHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isEmail);

  return (
    <form className={classes.contactForm}>
      <div className={classes.controlGroup}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>

      <div className={classes.controlGroup}>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className={classes.controlGroup}>
        <label htmlFor="message">Message*</label>
        <textarea
          id="message"
          value={enteredMessage}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
      </div>
      <div className={classes.formActions}>
        <ContactButton className={classes.formButton}>Submit</ContactButton>
      </div>
    </form>
  );
};

export default ContactForm;
