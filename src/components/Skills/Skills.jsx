import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = (props) => {
  const { containerVariants, itemVariants, shapes } = props;

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
      </motion.div>

      <motion.div
        className="grid-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          "Html / Css / Javascript",
          "Framer Motion",
          "React js",
          "Tailwind CSS",
          "node js",
          "jwt authentication",
        ].map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="modern-card skill-card"
          >
            <div className="glow-orb"></div>
            <h3>{skill}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
