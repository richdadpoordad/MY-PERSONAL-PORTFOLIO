import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './Home.css';

// Import the image
import backgroundImage from '../../assets/images/image11.jpg';

const Home = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerHeight = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <section id="home" className="home-section">
      {/* Full-screen Image Background */}
      <div 
        className="background-image-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="image-overlay" />
      </div>

      {/* Text Content with AnimatePresence */}
      <AnimatePresence>
        {isTextVisible && (
          <motion.div
            key="welcome-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-content"
          >
            <div className="welcome-container">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: 0.2 }}
                className="welcome-text"
              >
                Welcome to My Portfolio
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="main-name"
              >
                <span className="first-name">Melese  Muche</span>
               
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.6 }}
                className="profession"
              >
                SOFTWARE ENGINEER
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.8 }}
                className="tagline"
              >
                First learn fullstack appliction development and 
                Learn AI powered fullstack Application development and to become an AI developer
            
    

              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Visibility Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="visibility-toggle"
        onClick={toggleTextVisibility}
        aria-label={isTextVisible ? "Hide text" : "Show text"}
      >
        
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="scroll-button"
          onClick={scrollToAbout}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              scrollToAbout();
            }
          }}
        >
          
         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;