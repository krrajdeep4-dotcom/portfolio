import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">
          Hi, I'm <br />
          <span className="gradient-text">Rajdeep Kumar Ram</span>
        </h1>

        <div className="hero-buttons">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
            id="#projects"
            href="#projects"
          >
            view work
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
