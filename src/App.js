import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import './app.css';

// Import social media icons from react-icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTelegram, FaGithub } from 'react-icons/fa';

// Contact Component with Formspree Integration
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formspree endpoint - Updated with your actual Formspree link
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgarqnj'; // ✅ Your Formspree endpoint

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Enhanced validation
    if (!formData.name.trim() || !formData.email.trim() || 
        !formData.subject.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (formData.name.trim().length < 2) {
      toast.error('Name must be at least 2 characters long');
      return;
    }

    if (formData.subject.trim().length < 3) {
      toast.error('Subject must be at least 3 characters long');
      return;
    }

    if (formData.message.trim().length < 10) {
      toast.error('Message must be at least 10 characters long');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // Formspree will use this for reply-to
          _subject: `Portfolio Contact: ${formData.subject}` // Custom email subject
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          duration: 5000,
          position: 'top-right',
          icon: '✅',
          style: {
            background: '#10B981',
            color: '#fff',
            fontWeight: '500',
            padding: '16px',
            borderRadius: '10px',
          },
        });
        
        // Reset form
        setFormData({ 
          name: '', 
          email: '', 
          subject: '', 
          message: '' 
        });
        
        // Also reset the form element
        e.target.reset();
      } else {
        // Handle Formspree specific errors
        if (result.errors) {
          const errorMessages = result.errors.map(error => error.message).join(', ');
          throw new Error(errorMessages);
        } else {
          throw new Error(result.error || 'Failed to send message');
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Show specific error message
      toast.error(error.message || 'Failed to send message. Please try again or email directly.', {
        duration: 5000,
        position: 'top-right',
      });
      
      // Fallback - Open email client after a short delay
      setTimeout(() => {
        const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:melesemuche571@gmail.com?subject=${subject}&body=${body}`;
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['melesemuche571@gmail.com', 'melesemuche70@gmail.com'],
      colorClass: 'contact-info-email',
      action: () => {
        window.location.href = 'mailto:melesemuche571@gmail.com';
      }
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['+251953134296', '+251718134296'],
      colorClass: 'contact-info-phone',
      action: () => {
        window.location.href = 'tel:+251953134296';
      }
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: ['Addis Ababa, Ethiopia', 'Available for remote work'],
      colorClass: 'contact-info-location',
      action: null
    }
  ];

  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <span className="contact-badge">
            GET IN TOUCH
          </span>
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info Column */}
          <div className="contact-info-column">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-info-grid"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`contact-info-card ${info.colorClass}`}
                  onClick={info.action}
                  style={{ cursor: info.action ? 'pointer' : 'default' }}
                  whileHover={info.action ? { scale: 1.02, y: -5 } : {}}
                >
                  <div className="contact-info-icon">
                    <div className="contact-info-icon-wrapper">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="contact-info-title">
                    {info.title}
                  </h3>
                  <div className="contact-info-details">
                    {info.details.map((detail, i) => (
                      <p key={i} className="contact-info-detail">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="contact-availability"
            >
              <div className="availability-header">
                <div className="availability-status-indicator"></div>
                <CheckCircle size={20} className="availability-icon" />
                <h3 className="availability-title">Currently Available for Work</h3>
              </div>
              <p className="availability-text">
                I'm actively accepting new projects and opportunities. Let's create something amazing together!
              </p>
              <div className="availability-list">
                <div className="availability-item">
                  <div className="availability-bullet" />
                  <span>Full-time positions</span>
                </div>
                <div className="availability-item">
                  <div className="availability-bullet" />
                  <span>Freelance projects</span>
                </div>
                <div className="availability-item">
                  <div className="availability-bullet" />
                  <span>Consulting work</span>
                </div>
              </div>
            </motion.div>

            {/* Direct Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="direct-contact"
            >
              <div className="direct-contact-header">
                <AlertCircle size={18} className="direct-contact-icon" />
                <h4 className="direct-contact-title">Prefer Direct Email?</h4>
              </div>
              <p className="direct-contact-text">
                Click below to open your default email client:
              </p>
              <a 
                href="mailto:melesemuche571@gmail.com?subject=Portfolio%20Inquiry" 
                className="direct-email-button"
              >
                <Mail size={16} />
                melesemuche571@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-column"
          >
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder=""
                      minLength={2}
                      maxLength={50}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="required-star">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="email"
                      pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="required-star">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder=""
                    minLength={3}
                    maxLength={100}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Tell me about your project, idea, or question..."
                    minLength={10}
                    maxLength={2000}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Honeypot field for spam prevention (invisible to users) */}
                <input 
                  type="text" 
                  name="_gotcha" 
                  style={{ display: 'none' }} 
                  tabIndex="-1" 
                  autoComplete="off"
                />

                <div className="form-footer">
                  <div className="form-note">
                    <AlertCircle size={14} className="note-icon" />
                    <span>All fields marked with <span className="required-star">*</span> are required</span>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="spinner-icon" size={20} />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="submit-icon" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Form Security Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="form-security-info"
            >
              <div className="security-badge">
                <CheckCircle size={16} className="security-icon" />
                <span>Powered by Formspree</span>
              </div>
              <div className="security-badge">
                <CheckCircle size={16} className="security-icon" />
                <span>Spam Protected</span>
              </div>
              <div className="security-badge">
                <CheckCircle size={16} className="security-icon" />
                <span>Secure & Encrypted</span>
              </div>
            </motion.div>

            {/* Response Time Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="response-time"
            >
              <div className="response-content">
                <div className="response-header">
                  <CheckCircle size={18} className="response-icon" />
                  <span className="response-label">Quick Response Guarantee</span>
                </div>
                <p className="response-text">
                  I typically respond within <strong>24 hours</strong> during weekdays
                </p>
                <p className="response-subtext">
                  Your message will be sent securely via Formspree and forwarded to my inbox
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://facebook.com',
      color: '#1877F2'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com',
      color: '#1DA1F2'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com',
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com',
      color: '#E4405F'
    },
    {
      name: 'YouTube',
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/channel/UCoYVAMNTlVt04NbrbYZ9bAw',
      color: '#FF0000'
    },
    {
      name: 'Telegram',
      icon: <FaTelegram />,
      url: 'https://t.me/Startlearnsoftware',
      color: '#0088CC'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com',
      color: '#333333'
    }
  ];

  return (
    <div className="app">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
          },
          success: {
            duration: 5000,
            icon: '✅',
            style: {
              background: '#10B981',
            },
          },
          error: {
            duration: 5000,
            icon: '❌',
            style: {
              background: '#EF4444',
            },
          },
        }}
      />
      
      <Header scrollToSection={scrollToSection} />
      
      <main>
        <section id="home">
          <Home />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-text">
              © {new Date().getFullYear()} Melese Muche. All rights reserved.
            </p>
            <p className="footer-subtext">
              Built with React, Framer Motion & Formspree | Passionate Developer
            </p>
          </div>
          
          <div className="footer-right">
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`Visit ${link.name}`}
                  style={{ '--icon-color': link.color }}
                >
                  {link.icon}
                  <span className="social-tooltip">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-credit">
            ✉️ Messages powered by <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">Formspree</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;