import React from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Get In Touch</h2>
      <p className={styles.subheading}>
  I’m a full-stack Java developer ready to build, solve, and collaborate. Let’s connect!
</p>


      <div className={styles.container}>
        {/* Left Info Box */}
        <div className={styles.infoBox}>
          <h3>Let's Connect,</h3>
          

          <div className={styles.details}>
            <a href="mailto:rajaman2611@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className={styles.icon} />
              rajaman2611@gmail.com
            </a>

            <a href="https://github.com/Amanraj2611" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
              github.com/Amanraj2611
            </a>

            <a href="https://www.linkedin.com/in/amanraj2611/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
              linkedin.com/in/amanraj2611/
            </a>
          </div>
        </div>

        {/* Right Contact Form */}
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <textarea rows="4" placeholder="Enter your message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
