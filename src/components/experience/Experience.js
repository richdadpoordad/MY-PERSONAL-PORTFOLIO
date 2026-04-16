import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ChevronRight, Star, Code, Database, Smartphone, Brain } from 'lucide-react';
import './experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Frontend Developer & Freelancer',
      company: 'Self-Employed',
      period: '2022 - Present',
      location: 'Addis Ababa, Ethiopia',
      description: 'Building responsive web applications for various clients, focusing on modern JavaScript frameworks and best practices.',
      tags: ['React', 'JavaScript', 'CSS', 'Responsive Design', 'UI/UX'],
      achievements: [
        'Developed 10+ client websites',
        'Improved website performance by 50%',
        'Implemented SEO best practices'
      ]
    },
    {
      type: 'work',
      title: 'Web Development Intern',
      company: 'Local Tech Startup',
      period: '2021 - 2022',
      location: 'Addis Ababa, Ethiopia',
      description: 'Assisted in developing and maintaining web applications, learned modern development workflows.',
      tags: ['HTML/CSS', 'JavaScript', 'Git', 'Bootstrap', 'WordPress'],
      achievements: [
        'Contributed to 3 production projects',
        'Learned agile development methodologies',
        'Improved code collaboration skills'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'Wachemo University',
      period: '2019 - 2023',
      location: 'Hossana, Ethiopia',
      description: 'Focus on software engineering principles, web technologies, and software development methodologies.',
      gpa: '3.5/4.0',
      highlights: ['Software Engineering Principles', 'Web Development', 'Database Systems', 'Mobile Development']
    }
  ];

  const certifications = [
    { 
      name: 'Responsive Web Design', 
      issuer: 'freeCodeCamp', 
      year: '2023',
      icon: <Code className="cert-icon" />
    },
    { 
      name: 'JavaScript Algorithms & Data Structures', 
      issuer: 'freeCodeCamp', 
      year: '2023',
      icon: <Code className="cert-icon" />
    },
    { 
      name: 'Front End Web Development', 
      issuer: 'Udacity', 
      year: '2022',
      icon: <Code className="cert-icon" />
    },
    { 
      name: 'Eshie Program Graduate', 
      issuer: 'Eshie Ethiopia', 
      year: '2022',
      icon: <Brain className="cert-icon" />
    },
    { 
      name: 'AI & Machine Learning Fundamentals', 
      issuer: 'Various Platforms', 
      year: '2023',
      icon: <Brain className="cert-icon" />
    },
    { 
      name: 'Fundamental Programming Concepts', 
      issuer: 'Multiple Sources', 
      year: '2021',
      icon: <Code className="cert-icon" />
    },
    { 
      name: 'Data Analysis & Visualization', 
      issuer: 'freeCodeCamp', 
      year: '2023',
      icon: <Database className="cert-icon" />
    },
    { 
      name: 'Android Development Basics', 
      issuer: 'Google Developers', 
      year: '2022',
      icon: <Smartphone className="cert-icon" />
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience-header"
        >
          <span className="experience-badge">
            JOURNEY
          </span>
          <h2 className="experience-title">Experience & Education</h2>
          <p className="experience-subtitle">
            My professional journey and continuous learning path
          </p>
        </motion.div>

        <div className="experience-grid">
          {/* Work Experience Column */}
          <div className="experience-column">
            <div className="column-header">
              <div className="column-icon-wrapper">
                <Briefcase className="column-icon" />
              </div>
              <h3 className="column-title">Work Experience</h3>
            </div>

            <div className="timeline">
              {/* Timeline line */}
              <div className="timeline-line" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="timeline-item"
                >
                  {/* Timeline dot */}
                  <div className="timeline-dot" />

                  <div className="experience-card">
                    <div className="experience-card-header">
                      <div>
                        <h4 className="experience-position">
                          {exp.title}
                        </h4>
                        <p className="experience-company">
                          {exp.company}
                        </p>
                      </div>
                      <div className="experience-period">
                        <Calendar className="period-icon" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="experience-location">
                      <MapPin className="location-icon" />
                      {exp.location}
                    </div>

                    <p className="experience-description">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="achievements-list">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="achievement-item">
                          <Star className="achievement-icon" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="experience-tags">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="experience-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="education-column">
            <div className="column-header">
              <div className="column-icon-wrapper education-icon">
                <GraduationCap className="column-icon" />
              </div>
              <h3 className="column-title">Education</h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="education-card"
              >
                <div className="education-card-header">
                  <div>
                    <h4 className="education-degree">
                      {edu.degree}
                    </h4>
                    <p className="education-school">
                      {edu.school}
                    </p>
                  </div>
                  <div className="education-period">
                    <Calendar className="period-icon" />
                    {edu.period}
                  </div>
                </div>

                <div className="education-location">
                  <MapPin className="location-icon" />
                  {edu.location}
                </div>

                <p className="education-description">
                  {edu.description}
                </p>

                {/* Education Highlights */}
                <div className="education-highlights">
                  {edu.highlights.map((highlight, i) => (
                    <div key={i} className="highlight-item">
                      <ChevronRight className="highlight-icon" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* GPA */}
                <div className="gpa-badge">
                  <Award className="gpa-icon" />
                  <span className="gpa-label">GPA:</span>
                  <span className="gpa-value">{edu.gpa}</span>
                </div>
              </motion.div>
            ))}

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="certifications-section"
            >
              <div className="certifications-header">
                <Award className="certifications-icon" />
                <h3 className="certifications-title">Certifications & Training</h3>
              </div>
              
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={`${cert.name}-${cert.issuer}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="certification-card"
                  >
                    <div className="certification-icon-wrapper">
                      {cert.icon}
                    </div>
                    <div className="certification-content">
                      <h4 className="certification-name">{cert.name}</h4>
                      <p className="certification-issuer">{cert.issuer}</p>
                    </div>
                    <div className="certification-year">{cert.year}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;