import React from 'react';
import { motion } from 'framer-motion';

// Naya component background shapes ke liye
const BackgroundShapes = () => {
  // Humein 5 alag-alag background shapes chahiye
  const shapes = [...Array(5)];

  return (
    <div className="background-shapes-wrapper">
      {shapes.map((_, i) => {
        // Har shape ke liye random animation values
        const randomX = Math.random() * 200 - 100; // -100 to 100
        const randomY = Math.random() * 200 - 100;
        const randomDuration = Math.random() * 10 + 10; // 10s to 20s

        return (
          <motion.div
            key={i}
            className={`floating-orb orb-${i + 1}`}
            animate={{
              x: [0, randomX, -randomX, 0], // Left-Right randomness
              y: [0, randomY, -randomY, 0], // Up-Down randomness
              opacity: [0.1, 0.3, 0.1],      // Fade effect
            }}
            transition={{
              duration: randomDuration,
              ease: "linear",
              repeat: Infinity, // Loop hamesha chalta rahega
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundShapes;