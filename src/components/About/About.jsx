import React from "react";
React;

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

import aboutImage from "../../assets/about/faceimg.png";
import cursorIcon from "../../assets/about/cursor.png";
import backendIcon from "../../assets/about/backend.png";
import uiIcon from "../../assets/about/ui.png";
import fullstackIcon from "../../assets/about/full-stack.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React. I focus on clean design and smooth user experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={backendIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I develop robust and scalable REST APIs using Java, Spring Boot, and MySQL — optimized for performance and security.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={fullstackIcon} alt="full-stack icon" />
            <div className={styles.aboutItemText}>
              <h3> Full-Stack Developer</h3>
              <p>
                Proficient in building full-stack applications using Java, Spring Boot, React, and MySQL — delivering scalable, secure, and user-focused web systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I design clean and modern UI layouts with attention to detail, consistency, and usability.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};  