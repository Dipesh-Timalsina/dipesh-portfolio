import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { Experience } from "../components/Experience/Experience";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";

// Define HomePage component
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

// Export HomePage as a named export
export { HomePage };
