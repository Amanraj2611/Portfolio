import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";


import htmlIcon from "../../assets/skills/html.png";
import cssIcon from "../../assets/skills/css.png";
import jsIcon from "../../assets/skills/JavaScript.png";
import ReactIcon from "../../assets/skills/react.png";
import javaIcon from "../../assets/skills/Java.png";
import springbootIcon from "../../assets/skills/spring-boot.png";

import mysqlIcon from "../../assets/skills/mysql.png";
//import nodeIcon from "../../assets/skills/node.png";

import postmanIcon from "../../assets/skills/Postman.png";
import figmaIcon from "../../assets/skills/figma.png";
import graphqlIcon from "../../assets/skills/graphql.png";
//import mongodbIcon from "../../assets/skills/mongodb.png
import gitIcon from "../../assets/skills/Git.png";
import githubIcon from "../../assets/skills/GitHub.png";


const skillIcons = {
  html: htmlIcon,
  css: cssIcon,
  JavaScript: jsIcon,
  React: ReactIcon,

  Java: javaIcon,
  SpringBoot: springbootIcon,
  
  //node: nodeIcon,
  mysql: mysqlIcon,
  Postman: postmanIcon,
  figma: figmaIcon,
  graphql: graphqlIcon,
 // mongodb: mongodbIcon
  git: gitIcon,
  github: githubIcon,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skillIcons[skill.id]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
