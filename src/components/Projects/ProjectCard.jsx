import React from "react";
import styles from "./ProjectCard.module.css";
import projectImage from "../../assets/projects/projects.png";
import bankImg from "../../assets/projects/bank.jpg";
import votingImg from "../../assets/projects/voting.jpg";
import electricityImg from "../../assets/projects/electricity.jpg";
import amazonImg from "../../assets/projects/amazon.jpg";
import portfolioImg from "../../assets/projects/portfolio.png";
const imageMap = {
 // "projects/project.png": projectImage,
  "projects/bank.jpg": bankImg,
  "projects/voting.jpg": votingImg,
  "projects/electricity.jpg": electricityImg,
  "projects/amazon.jpg": amazonImg,
  "projects/portfolio.png": portfolioImg,
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageMap[imageSrc]} 
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>Source</a>
      </div>
    </div>
  );
};
