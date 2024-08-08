import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dipesh</h1>
        <p className={styles.description}>
          "Hi I'm currently learning full-stack development, focusing on React
          and Node.js. I'm eager to connect with others and learn more from
          experienced developers. Reach out if you'd like to share your
          knowledge or collaborate!"
        </p>
        <a href="mailto:sacarsansar@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/dipesh.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
