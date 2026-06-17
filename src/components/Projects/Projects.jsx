import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import Card from "./Card";
const Projects = (props) => {
  const { containerVariants, itemVariants, shapes } = props;

  const [projectData, setProjectData] = useState([
    {
      title: "Ecommerce website",
      description: "Built with react js",
    },
    {
      title: "CURD application",
      description: "Built with react js , node js and mongodb",
    },
    {
      title: "File Upload App (multer and imagekit) ",
      description: "Full-stack MERN application",
    },
    {
      title: "Authentication System (JWT) ",
      description: "node js and mongodb",
    },
  ]);

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <motion.div
        className="grid-container project-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectData.map((project, index) => (
          <Card key={index} itemVariants={itemVariants} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
