import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Cloud, Smartphone, Cpu } from 'lucide-react';
import './skills.css'; // Make sure this import is correct

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Code size={28} />,
      categoryClass: 'frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database size={28} />,
      categoryClass: 'backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <Palette size={28} />,
      categoryClass: 'uiux',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Prototyping', level: 90 },
        { name: 'Wireframing', level: 85 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={28} />,
      categoryClass: 'cloud',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Git', level: 95 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={28} />,
      categoryClass: 'mobile',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS', level: 65 },
        { name: 'Android', level: 70 },
      ]
    },
    {
      title: 'Other Tools',
      icon: <Cpu size={28} />,
      categoryClass: 'tools',
      skills: [
        { name: 'GitHub', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'JIRA', level: 80 },
        { name: 'Framer Motion', level: 85 },
      ]
    }
  ];

  const currentTechnologies = ['React 18', 'Next.js 14', 'TypeScript 5', 'Tailwind 3', 'Node.js 20'];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <span className="skills-badge">
            SKILLS & EXPERTISE
          </span>
          <h2 className="skills-title">My Technical Skills</h2>
          <p className="skills-subtitle">
            Expertise in modern web technologies and development practices
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="skill-category-card"
            >
              {/* Category Header */}
              <div className="category-header">
                <div className={`category-icon-wrapper ${category.categoryClass}`}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05, duration: 1 }}
                        className={`skill-bar ${category.categoryClass}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="learning-section"
        >
          <h3 className="learning-title">Always Learning</h3>
          <p className="learning-description">
            I continuously update my skills to stay current with the latest technologies 
            and best practices in web development.
          </p>
          <div className="tech-tags">
            {currentTechnologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;