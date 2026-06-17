import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const shapes = [...Array(5)];

  return (
    <div className="app-wrapper">
      <Navbar />

      <Hero />

      <Skills
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        shapes={shapes}
      />

      <Projects
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        shapes={shapes}
      />

      <div id="contact" className="footer">
        <a href="mailto:krrajdeep4@gmail.com"> krrajdeep4@gmail.com</a>
      </div>
    </div>
  );
}

export default App;
