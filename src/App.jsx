import React from "react";
import { motion } from "framer-motion";
import "./App.css";

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
      {/* --- GLASSMORPHISM NAVBAR --- */}
      <nav className="navbar">
        <div className="nav-logo">R.K.R</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
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
            >view work</motion.a>
            
           

          </div>
        </motion.div>
      </section>

      {/* --- SKILLS SECTION --- */}
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

      {/* --- PROJECTS SECTION --- */}
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
          <motion.div
            variants={itemVariants}
            className="modern-card project-card"
          >




           
          




            <div className="project-info">
              <h3>Authentication System with JWT</h3>
              <p>Built with react js and node js</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="modern-card project-card"
          >



          
            




            <div className="project-info">
              <h3>File Upload App multer and imagekit </h3>
              <p>Full-stack MERN application</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="modern-card project-card"
        >
          <div className="project-info">
            <h3>Ecommerce website</h3>
            <p>Built with react js</p>
          </div>

        </motion.div>



   
 <motion.div
          variants={itemVariants}
          className="modern-card project-card"
        >
          <div className="project-info">
            <h3>CURD application</h3>
            <p>Built with react js , node js and mongodb</p>
          </div>

        </motion.div>





      </section>

     




          
      







          <div id="contact" className="footer">

           <a href="mailto:krrajdeep4@gmail.com"> krrajdeep4@gmail.com</a>
          </div>




    </div>
  );
}

export default App;
