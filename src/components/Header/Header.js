// components/Header/Header.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Mail, Download, Sun, Moon, 
  Home, User, Briefcase, Star, Award,  
} from 'lucide-react';
import './Header.css';

// IMPORT YOUR RESUME FROM ASSETS FOLDER
// This links to your PDF

function Header({ scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items with IDs
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      document.body.classList.toggle('dark-theme', newTheme === 'dark');
      return newTheme;
    });
  };

  const ThemeToggle = () => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
    >
      <motion.div
        className="theme-toggle-container"
        animate={{
          backgroundColor: theme === 'dark' ? '#4a5568' : '#fbbf24'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="theme-toggle-track">
          <motion.div
            className="theme-toggle-thumb"
            animate={{ x: theme === 'dark' ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {theme === 'dark' ? (
              <Moon size={12} className="theme-icon theme-icon-dark" />
            ) : (
              <Sun size={12} className="theme-icon theme-icon-light" />
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.button>
  );

  const DesktopNav = () => (
    <nav className="nav-desktop" aria-label="Main navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="nav-link"
          aria-label={`Go to ${item.label} section`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );

  const MobileMenu = () => {
    const iconMap = {
      'Home': Home,
      'About': User,
      'Skills': Star,
      'Projects': Briefcase,
      'Experience': Award,
      'Contact': Mail,
    };

    return (
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
              role="presentation"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="mobile-menu-header">
                <div className="mobile-menu-profile">
                  <div className="mobile-logo-circle">
                    <span className="mobile-logo-initials">MM</span>
                  </div>
                  <div className="mobile-profile-info">
                    <h3 className="mobile-profile-name">Melese Muche</h3>
                    <p className="mobile-profile-title">Software Developer</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-menu-close"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mobile-menu-content">
                <nav className="mobile-nav-items" aria-label="Mobile navigation">
                  {navItems.map((item, index) => {
                    const Icon = iconMap[item.label] || Mail;
                    
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className="mobile-nav-item"
                        aria-label={`Go to ${item.label} section`}
                        role="menuitem"
                      >
                        <div className="mobile-nav-item-content">
                          <div className="mobile-nav-icon">
                            <Icon size={20} />
                          </div>
                          <span className="mobile-nav-label">{item.label}</span>
                        </div>
                        <div className="mobile-nav-indicator" />
                      </motion.button>
                    );
                  })}
                </nav>

                <div className="mobile-actions">
                  {/* MOBILE DOWNLOAD BUTTON - CORRECTED */}
                  <motion.a
                    href="resume"
                    download="Melese_Muche_Resume.pdf"
                    whileTap={{ scale: 0.98 }}
                    className="mobile-action-button mobile-download-button"
                    aria-label="Download resume"
                  >
                    <Download size={20} className="mobile-action-icon" />
                    Download Resume
                  </motion.a>

                  <motion.button
                    onClick={() => {
                      scrollToSection('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="mobile-action-button mobile-contact-button"
                    aria-label="Contact me"
                  >
                    <Mail size={20} className="mobile-action-icon" />
                    Contact Me
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}
      >
        <div className="header-container">
          <div className="header-content">
            
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="header-logo"
              onClick={() => scrollToSection('home')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToSection('home');
                }
              }}
              aria-label="Go to home section"
            >
              <div className="logo-circle">
                <span className="logo-initials">MM</span>
              </div>
              <div className="logo-text">
                <span className="logo-name">Melese Muche</span>
                <p className="logo-title">Software Developer</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* Right Side Actions */}
            <div className="header-actions">
              <ThemeToggle />
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="action-button hire-button"
                aria-label="Hire me"
              >
                <Mail size={18} className="button-icon" />
                Hire Me
              </motion.button>

              {/* DESKTOP DOWNLOAD BUTTON - CORRECTED */}
              <motion.a
                    href="/Chapter.pdf"  // ← Direct path to public folder
                    download="Chapter.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="action-button resume-button"
                    aria-label="Download resume"
                  >
                    <Download size={18} className="button-icon" />
                    Resume
             </motion.a> 
                                <motion.button
                whileTap={{ scale: 0.95 }}
                className="mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu />
    </>
  );
}

export default Header;