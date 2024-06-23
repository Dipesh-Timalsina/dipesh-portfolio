import React from "react";

import { Hero } from "../components/Hero/Hero";
import { Experience } from "../components/Experience/Experience";
import { Projects } from "../components/Projects/Projects";

// Define HomePage component
const HomePage = () => {
   console.log("HomePage rendered");
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
    </div>
  );
};

// Export HomePage as a named export
export { HomePage };
