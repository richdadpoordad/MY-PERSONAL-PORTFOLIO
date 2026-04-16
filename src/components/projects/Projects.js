import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Eye, Code, Sparkles } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'react', 'fullstack', 'mobile', 'design'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
      category: 'fullstack',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
      imageColor: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      category: 'react',
      tags: ['React', 'Firebase', 'Tailwind', 'Zustand'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
      imageColor: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)'
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and progress with AI recommendations.',
      category: 'mobile',
      tags: ['React Native', 'GraphQL', 'AWS', 'TypeScript'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false,
      imageColor: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations, dark mode, and contact form.',
      category: 'react',
      tags: ['Next.js', 'Framer Motion', 'Tailwind', 'EmailJS'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false,
      imageColor: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization.',
      category: 'fullstack',
      tags: ['React', 'Express', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
      imageColor: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    },
    {
      id: 6,
      title: 'UI Component Library',
      description: 'Reusable component library with Storybook documentation and theming.',
      category: 'design',
      tags: ['React', 'TypeScript', 'Storybook', 'Jest'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false,
      imageColor: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Inline CSS styles
  const styles = {
    section: {
      padding: '5rem 2rem',
      background: 'black',
      position: 'relative'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    badge: {
      display: 'inline-block',
      padding: '0.5rem 1.5rem',
      background: ' black',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '600',
      letterSpacing: '1px',
      marginBottom: '1rem',
      textTransform: 'uppercase',
      color: 'white'
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '1rem',
      color: '#1e293b',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#64748b',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      textAlign: 'center'
    },
    filterContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '0.75rem',
      marginBottom: '3rem'
    },
    filterButton: {
      padding: '0.6rem 1.5rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    filterButtonActive: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: 'white',
      boxShadow: '0 5px 15px rgba(59, 130, 246, 0.3)'
    },
    filterButtonInactive: {
      background: '#e2e8f0',
      color: '#475569'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      marginBottom: '4rem'
    },
    card: {
      background: 'black',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    image: {
      height: '200px',
      position: 'relative',
      overflow: 'hidden'
    },
    content: {
      padding: '1.5rem',
      flex: '1',
      display: 'flex',
      flexDirection: 'column'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1e293b',
      margin: '0',
      flex: '1'
    },
    description: {
      fontSize: '0.95rem',
      color: '#white',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      flex: '1'
    },
    tag: {
      padding: '0.4rem 0.8rem',
      background: '#f1f5f9',
      color: '#475569',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '500',
      marginRight: '0.5rem',
      marginBottom: '0.5rem',
      display: 'inline-block'
    },
    footer: {
      textAlign: 'center',
      marginTop: '3rem'
    },
    githubLink: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.75rem 2rem',
      border: '2px solid #3b82f6',
      color: '#3b82f6',
      borderRadius: '10px',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <section className="projects-section" id="projects" style={styles.section}>
      <div className="projects-container" style={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-header"
          style={styles.header}
        >
          <span className="projects-badge" style={styles.badge}>
            MY WORK
          </span>
          <h2 className="projects-title" style={styles.title}>Featured Projects</h2>
          <p className="projects-subtitle" style={styles.subtitle}>
            A selection of my recent work showcasing my skills and expertise
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-filter"
          style={styles.filterContainer}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={{
                ...styles.filterButton,
                ...(filter === category ? styles.filterButtonActive : styles.filterButtonInactive)
              }}
              onMouseEnter={(e) => {
                if (filter !== category) {
                  e.target.style.background = '#cbd5e1';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== category) {
                  e.target.style.background = '#e2e8f0';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid" style={styles.grid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card-wrapper"
            >
              {/* Project Card */}
              <div className="project-card" style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* Project Image/Color */}
                <div 
                  className="project-image" 
                  style={{ ...styles.image, background: project.imageColor }}
                >
                  {project.featured && (
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.4rem 0.8rem',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>
                        <Sparkles style={{ width: '14px', height: '14px', marginRight: '0.25rem' }} />
                        Featured
                      </span>
                    </div>
                  )}
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: '0',
                    transition: 'opacity 0.3s ease'
                  }}
                  className="project-image-overlay"
                  >
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          padding: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '50%',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none'
                        }}
                      >
                        <Github style={{ width: '20px', height: '20px' }} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          padding: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '50%',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none'
                        }}
                      >
                        <ExternalLink style={{ width: '20px', height: '20px' }} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content" style={styles.content}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h3 style={styles.cardTitle}>
                      {project.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', color: '#f59e0b' }}>
                        <Star style={{ width: '14px', height: '14px', marginRight: '0.25rem' }} />
                        4.8
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', color: '#64748b' }}>
                        <Eye style={{ width: '14px', height: '14px', marginRight: '0.25rem' }} />
                        1.2k
                      </span>
                    </div>
                  </div>

                  <p style={styles.description}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={styles.tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: '#64748b',
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                        onMouseLeave={(e) => e.target.style.color = '#64748b'}
                      >
                        <Code style={{ width: '16px', height: '16px', marginRight: '0.5rem' }} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: '#64748b',
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                        onMouseLeave={(e) => e.target.style.color = '#64748b'}
                      >
                        <ExternalLink style={{ width: '16px', height: '16px', marginRight: '0.5rem' }} />
                        Live Demo
                      </a>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '0.6rem 1.25rem',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = '0 5px 15px rgba(59, 130, 246, 0.3)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow = 'none';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="projects-footer"
          style={styles.footer}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.githubLink}
            onMouseEnter={(e) => {
              e.target.style.background = '#eff6ff';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <Github style={{ width: '20px', height: '20px', marginRight: '0.75rem' }} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;