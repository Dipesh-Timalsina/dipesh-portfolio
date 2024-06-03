import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { Link, useNavigate } from "react-router-dom";

function randomColor() {
  const navigate = useNavigate()
  function goToRandomColor() {
    navigate("/dipesh-portfolio/RandomColor");
  }
}

export  const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div>
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          {/* <a href="randon-color" className={styles.link}>
            Demo
          </a> */}
          {/* <Link to="/dipesh-portfolio/RandomColor" className={styles.link}>
            <div>Hero </div>
          </Link> */}

          {/* <Link to="/dipesh-portfolio/RandomColor" className={styles.link}>
            <div>Hero </div>
          </Link> */}

          <Link to="/dipesh-portfolio/RandomColor" className={styles.link} onClick={randomColor}>
            Demo
          </Link>
          <a href={source} className={styles.link}>
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

