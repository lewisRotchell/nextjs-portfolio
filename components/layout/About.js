import React from "react";
import AboutCard from "../innerComponents/AboutCard";
import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2>What I do</h2>
      <div className="bottom-line"></div>
      <div className={classes.aboutMain}>
        <AboutCard
          image={"fas fa-mobile-alt fa-3x"}
          title={"Responsive Design"}
          description={
            "I make your websites responsive so that they look just as good on a PC as they do on a mobile phone."
          }
        />
        <AboutCard
          image={"fas fa-bolt fa-3x"}
          title={"Top Performance"}
          description={
            "Nobody likes waiting a long time for a website to load. I'll make sure your site is up to speed and ready to go."
          }
        />
        <AboutCard
          image={"fas fa-glasses fa-3x"}
          title={"Accessibility"}
          description={
            "I make sure that my websites follow accessibility guidelines so that they are usuable for everyone."
          }
        />
      </div>
    </section>
  );
};

export default About;
