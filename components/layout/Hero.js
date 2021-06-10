import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import LinkButton from "../UI/LinkButton";
import Hamburger from "../UI/Hamburger";
import MobileMenu from "../UI/MobileMenu";
import classes from "./Hero.module.css";

const Hero = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <>
      <section id="home" className={classes.hero}>
        <nav className={classes.nav}>
          <img src="/images/Logo.png" alt="lewis rotchell web developer logo" />
          <ul className={classes.navList}>
            <li className={classes.navItems}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                href="home"
              >
                Home
              </Link>
            </li>
            <li className={classes.navItems}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                href="about"
              >
                About
              </Link>
            </li>
            <li className={classes.navItems}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                href="projects"
              >
                Projects
              </Link>
            </li>
            <li className={classes.navItems}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                href="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Hamburger toggleMenu={toggleMenuHandler} menuIsOpen={menuIsOpen} />
        </nav>

        <MobileMenu menuIsOpen={menuIsOpen} toggleMenu={toggleMenuHandler} />

        <div className={classes.heroMain}>
          <img
            className={classes.heroImg}
            src="/images/hero-svg.svg"
            alt="cartoon image of a man on a computer"
          />
          <div className={classes.heroText}>
            <h1 className={classes.heroTitle}>Hey, i'm Lewis</h1>
            <p className={classes.heroSubtitle}>
              I’m a Sheffield(UK) based web developer with experience in
              building responsive websites that are simple to use and easy on
              the eye.
            </p>

            <LinkButton target={"projects"} className={classes.heroButton}>
              View Projects
            </LinkButton>
          </div>
        </div>
      </section>
      <img className={classes.wave} src="/images/hero-wave.svg" alt="" />
    </>
  );
};

export default Hero;
