import React from "react";
import LinkButton from "../UI/LinkButton";
import Hamburger from "../UI/Hamburger";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section id="home" className={classes.hero}>
        <nav className={classes.nav}>
          <img src="/images/Logo.png" alt="lewis rotchell web developer logo" />
          <ul className={classes.navList}>
            <li className={classes.navItems}>
              <a href="#home">Home</a>
            </li>
            <li className={classes.navItems}>
              <a href="#about">About</a>
            </li>
            <li className={classes.navItems}>
              <a href="#projects">Projects</a>
            </li>
            <li className={classes.navItems}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <Hamburger />
        </nav>
        <div className={classes.heroMain}>
          <img
            className={classes.heroImg}
            src="/images/hero-image.png"
            alt="cartoon image of a man on a computer"
          />
          <h1 className={classes.heroTitle}>Hey, i'm Lewis</h1>
          <p className={classes.heroSubtitle}>
            I’m a Sheffield(UK) based web developer with experience in building
            responsive websites that are simple to use and easy on the eye.
          </p>
          {/* May have to use reactscroll for smooth scroll */}
          <LinkButton target={"#projects"} className={classes.heroButton}>
            View Projects
          </LinkButton>
        </div>
      </section>
      <img src="/images/hero-wave.svg" alt="" />
    </>
  );
};

export default Hero;
