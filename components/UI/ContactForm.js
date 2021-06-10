import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./ContactForm.module.css";
import useInput from "../../hooks/use-input";
import ContactButton from "./ContactButton";
import Alert from "./Alert";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim().includes("@");

const ContactForm = () => {
  const [alert, setAlert] = useState(null);

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

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

  // useEffect(() => {
  //   setStatus({
  //     submitted: false,
  //     submitting: false,
  //     info: { error: false, msg: null },
  //   });
  // }, []);

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid || !enteredMessageIsValid) {
      setAlert({
        alertMsg: "Please fill in all of the fields",
        className: "danger",
      });
      setTimeout(() => setAlert(null), 5000);
    } else {
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: "POST",
        url: "https://formspree.io/https://formspree.io/f/mgeryvjw",
        data: {
          name: enteredName,
          email: enteredEmail,
          message: enteredMessage,
        },
      })
        .then((response) => {
          handleServerResponse(
            true,
            "Thank you, your message has been submitted."
          );
          setAlert({
            alertMsg:
              "Thank you for your message. I will be in touch with you ASAP!",
            className: "success",
          });
          setTimeout(() => setAlert(null), 5000);
        })
        .catch((error) => {
          handleServerResponse(false, error.response.data.error);
        });

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
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          required
        />
      </div>

      <div className={emailClasses}>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          required
        />
      </div>
      <div className={messageClasses}>
        <label htmlFor="message">Message*</label>
        <textarea
          id="message"
          value={enteredMessage}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          required
        />
      </div>
      <div className={classes.formActions}>
        <ContactButton className={classes.formButton}>
          {" "}
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </ContactButton>
      </div>
    </form>
  );
};

export default ContactForm;
