import React from "react";
import styles from "./Hero.module.css";
import { Typewriter } from "react-simple-typewriter";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import heroImage from "../../assets/hero/faceimg.png"; // Your image path

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.left}>
        <p className={styles.greeting}>Hey! 👋 I'm</p>
        <h1 className={styles.name}>Aman <span>Raj</span></h1>
        <h2 className={styles.role}>
          I’m a{" "}
          <span className={styles.typing}>
            <Typewriter
              words={["Full-Stack Developer", "Java Spring Boot Dev", "Problem Solver", "Tech Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <div className={styles.contactInfo}>
          <p><FaPhone /> +91 6207538118</p>
          <p><FaEnvelope /> rajaman2611@gmail.com</p>
          <p><FaMapMarkerAlt /> Gurgaon, India</p>
        </div>

        <div className={styles.buttons}>
          <a href="/AMAN_Resume.pdf" target="_blank" className={styles.btnPrimary}>View Resume</a>
          <a href="mailto:rajaman2611@gmail.com" className={styles.btnOutline}>Contact Me</a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imageWrapper}>
          <img src={heroImage} alt="Aman Raj" />
        </div>
      </div>
    </section>
  );
};
