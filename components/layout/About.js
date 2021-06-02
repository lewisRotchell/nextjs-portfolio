import React from "react";
import AboutCard from "../innerComponents/AboutCard";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className="section-container">
      <h2>What I do</h2>
      <div className="bottom-line"></div>
      <AboutCard
        image={"fas fa-mobile-alt fa-3x"}
        title={"Responsive Design"}
        description={
          "I make your websites responsive so that they look just as good on a PC as they do on a mobile phone."
        }
      />
      <AboutCard
        image={"fas fa-bolt fa-3x"}
        title={"Responsive Design"}
        description={
          "I make your websites responsive so that they look just as good on a PC as they do on a mobile phone."
        }
      />
      <AboutCard
        image={"fas fa-glasses fa-3x"}
        title={"Responsive Design"}
        description={
          "I make your websites responsive so that they look just as good on a PC as they do on a mobile phone."
        }
      />
    </section>
  );
};

export default About;
