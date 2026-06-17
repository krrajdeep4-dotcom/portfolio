import React from "react";
import { motion } from "framer-motion";

const Card = (props) => {
  const { itemVariants, project } = props;
  return (
    <motion.div className="modern-card project-card">
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="glow-orb"></div>
      </div>
    </motion.div>
  );
};

export default Card;
