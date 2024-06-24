import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.title} onClick={() => window.location.href = "/"}>
          Portfolio
        </div>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, "about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleScroll(e, "experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
     
    </>
  );
};
