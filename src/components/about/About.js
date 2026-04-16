import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, GraduationCap, Briefcase, Award } from 'lucide-react';
import './about.css';

// Import your image - try different paths if needed
import profileImage from '../../assets/images/image.l.webp';// Changed from './' to '../'

const About = () => {
  const stats = [
    { icon: <Briefcase />, value: '3+', label: 'Years Experience' },
    { icon: <Award />, value: '10+', label: 'Projects Completed' },
    { icon: <User />, value: '50%', label: 'Client Satisfaction' },
    { icon: <GraduationCap />, value: '10+', label: 'Certifications' },
  ];

  const skills = ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'AWS', 'Git'];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-header"
        >
          <span className="about-badge">
            ABOUT ME
          </span>
          <h2 className="about-title">Get to Know Me</h2>
          <p className="about-subtitle">
            Passionate developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="about-content">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-left"
          >
            {/* Profile Image */}
            <div className="profile-image-container">
              <div className="profile-image-wrapper">
                <div className="profile-placeholder">
                  {/* Image with fallback */}
                  <img 
                    src={profileImage || "https://via.placeholder.com/400x400"} 
                    alt="Melese Muche"
                    className="profile-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x400";
                    }}
                  />
                </div>
              </div>
              <div className="floating-element floating-blue" />
              <div className="floating-element floating-purple" />
            </div>

            {/* Stats */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="stat-card"
                >
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-value">
                    {stat.value}
                  </div>
                  <div className="stat-label">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-right"
          >
            {/* Personal Info */}
            <div className="about-bio">
              <h3 className="about-name">
                Hi, I'm Melese Muche
              </h3>
              <div className="about-description">
                <p>
                  I'm a passionate Full Stack Developer with over 3 years of experience 
                  building modern web applications. I specialize in React, Node.js, and 
                  cloud technologies.
                </p>
                <p>
                  My journey in web development started with a curiosity about how 
                  websites work, and it has evolved into a career where I get to create 
                  impactful digital experiences every day.
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="info-cards">
              {[
                { icon: <MapPin />, label: 'Location', value: 'Addis Ababa, Ethiopia' },
                { icon: <Calendar />, label: 'Experience', value: '3+ Years' },
                { icon: <GraduationCap />, label: 'Education', value: 'B.S. Software Engineering' },
                { icon: <Briefcase />, label: 'Availability', value: 'Open to Opportunities' },
              ].map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon-wrapper">
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <div className="info-label">{info.label}</div>
                    <div className="info-value">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Tags */}
            <div className="about-skills">
              <h1 className="skills-title">
                Technical Skills
              </h1>
              <div className="skills-tags">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="about-cta">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button"
              >
                Let's Work Together
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;