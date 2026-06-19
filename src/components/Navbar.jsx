import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#nav-grad)" />
              <path d="M10 16L14 20L22 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="nav-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6C63FF" />
                  <stop offset="1" stopColor="#00D4AA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="navbar__logo-text">
            Pixel Labs <span className="navbar__logo-accent"> Software Solutions</span>
          </span>
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <Link to="/contact" className="navbar__cta">
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <button 
            className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${isMobileMenuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <Link 
          to="/contact" 
          className="navbar__mobile-cta"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
