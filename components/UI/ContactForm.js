import React, { useState } from "react";
import axios from "axios";
import classes from "./ContactForm.module.css";
import useInput from "../../hooks/use-input";
import ContactButton from "./ContactButton";
import Alert from "./Alert";

//Test to see if email is valid or name isn't empty

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ContactForm = () => {
  const [alert, setAlert] = useState(null);

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
  } = useInput(isNotEmpty);

  //server state handling

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      resetName();
      resetEmail();
      resetMessage();
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid || !enteredMessageIsValid) {
      setAlert({
        alertMsg: "Please fill in all of the fields",
        className: "danger",
      });
      setTimeout(() => setAlert(null), 5000);
    } else {
      setServerState({ submitting: true });
      axios({
        method: "POST",
        url: "https://formspree.io/p/1698208721861082974/f/contact",
        data: {
          name: enteredName,
          email: enteredEmail,
          message: enteredMessage,
        },
      })
        .then((r) => {
          handleServerResponse(true, "Thanks!");
        })
        .catch((r) => {
          handleServerResponse(false, r.response.data.error);
        });
      setAlert({
        alertMsg:
          "Thank you for your message. I will be in touch with you ASAP!",
        className: "success",
      });

      setTimeout(() => setAlert(null), 5000);

      resetName();
      resetEmail();
      resetMessage();
    }
  };

  const nameClasses = nameHasError
    ? `${classes.controlGroup} ${classes.invalid}`
    : `${classes.controlGroup}`;

  const emailClasses = emailHasError
    ? `${classes.controlGroup} ${classes.invalid}`
    : `${classes.controlGroup}`;

  const messageClasses = messageHasError
    ? `${classes.controlGroup} ${classes.invalid}`
    : `${classes.controlGroup}`;

  return (
    <form onSubmit={submitFormHandler} className={classes.contactForm}>
      {alert && <Alert message={alert.alertMsg} className={alert.className} />}
      <div className={nameClasses}>
        <label htmlFor="name">Name*</label>
        <input
          name="name"
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>

      <div className={emailClasses}>
        <label htmlFor="email">Email*</label>
        <input
          name="email"
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className={messageClasses}>
        <label htmlFor="message">Message*</label>
        <textarea
          name="message"
          id="message"
          value={enteredMessage}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
      </div>
      <div className={classes.formActions}>
        <ContactButton className={classes.formButton}>submit</ContactButton>
      </div>
    </form>
  );
};

export default ContactForm;
