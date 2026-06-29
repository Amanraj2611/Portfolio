import React from "react";
import styles from "./ProjectCard.module.css";

import bankImg from "../../assets/projects/bank.jpg";
import electricityImg from "../../assets/projects/electricity.jpg";
import amazonImg from "../../assets/projects/amazon1.jpg";
import portfolioImg from "../../assets/projects/portfolio.png";
import UserManagement from "../../assets/projects/UserManagement.png";
import securevotingImg from "../../assets/projects/securevoting.png";


const imageMap = {
  "projects/bank.jpg": bankImg,
  "projects/electricity.jpg": electricityImg,
  "projects/amazon1.jpg": amazonImg,
  "projects/portfolio.png": portfolioImg,
  "projects/UserManagement.png": UserManagement,
  "projects/securevoting.png": securevotingImg,
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      
      {/* Project Image */}
      <img
        src={imageMap[imageSrc]}
        alt={title}
        className={styles.image}
      />

      {/* Title */}
      <h3 className={styles.title}>{title}</h3>

      {/* Description */}
      <p className={styles.description}>{description}</p>

      {/* Skills */}
      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className={styles.links}>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.demo}`}
          >
            Demo
          </a>
        )}

        {source && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.source}`}
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};
