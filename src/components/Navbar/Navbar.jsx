// import React, { useState } from "react";

// import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";
// import { Link } from "react-router-dom";
// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // const handleScroll = (e, targetId) => {
//   //   e.preventDefault();
//   //   const targetElement = document.getElementById(targetId);
//   //   if (targetElement) {
//   //     targetElement.scrollIntoView({ behavior: "smooth" });
//   //   }
//   // };
//   const handleScroll = (e, targetId) => {
//     e.preventDefault(); // Prevents default anchor tag behavior
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }
//   };


//   return (
//     <>
//       <nav className={styles.navbar}>
//         {/* <a className={styles.title} href="/">
//           Portfolio
//         </a> */}
//         <Link to="/" className={styles.title}>
//           Portfolio
//         </Link>
//         <div className={styles.menu}>
//           <img
//             className={styles.menuBtn}
//             src={
//               menuOpen
//                 ? getImageUrl("nav/closeIcon.png")
//                 : getImageUrl("nav/menuIcon.png")
//             }
//             alt="menu-button"
//             onClick={() => setMenuOpen(!menuOpen)}
//           />
//           <ul
//             className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
//             onClick={() => setMenuOpen(false)}
//           >
//             <li>
//               <a href="#about" onClick={(e) => handleScroll(e, "about")}>
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#experience"
//                 onClick={(e) => handleScroll(e, "experience")}
//               >
//                 Experience
//               </a>
//             </li>
//             <li>
//               <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };



import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor tag behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.title}>
          Portfolio
        </Link>
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
              <Link to="#about" onClick={(e) => handleScroll(e, "about")}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="#experience"
                onClick={(e) => handleScroll(e, "experience")}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link to="#projects" onClick={(e) => handleScroll(e, "projects")}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="#contact" onClick={(e) => handleScroll(e, "contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
