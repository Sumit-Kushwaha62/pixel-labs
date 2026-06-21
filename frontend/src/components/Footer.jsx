import { useState } from 'react';
import { Link } from 'react-router-dom';
import pixelLabsLogo from '../assets/pixel-labs-logo.svg';
import { API_ENDPOINTS } from '../config/api';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null);
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    setNewsletterStatus('sending');
    setNewsletterMessage('');

    try {
      const response = await fetch(API_ENDPOINTS.newsletter, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Unable to subscribe');
      }

      setEmail('');
      setNewsletterStatus('success');
      setNewsletterMessage('Thank you for subscribing!');
    } catch (error) {
      setNewsletterStatus('error');
      setNewsletterMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer__cta-band">
        <div className="container">
          <div className="footer__cta-inner">
            <div className="footer__cta-text">
              <h2 className="footer__cta-title">Ready to scale your business?</h2>
              <p className="footer__cta-sub">Join 100+ brands already growing with PixelLab.</p>
            </div>
            <div className="footer__cta-actions">
              <Link to="/contact" className="btn-primary">Start a Project</Link>
              <Link to="/portfolio" className="btn-outline">View Work</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img
                  className="footer__logo-image"
                  src={pixelLabsLogo}
                  alt="Pixel Labs Software Solutions"
                />
              </Link>
              <p className="footer__tagline">
                Turning ambitious ideas into digital reality. We build high-performance 
                websites and digital experiences.
              </p>
              <div className="footer__contact-info">
                <a href="mailto:hello@pixellab.com" className="footer__contact-item">
                  <span>hello@pixellab.com</span>
                </a>
              </div>
            </div>

            <div className="footer__links-col">
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__list">
                <li><Link to="/services" className="footer__list-link">Web Development</Link></li>
                <li><Link to="/services" className="footer__list-link">UI/UX Design</Link></li>
                <li><Link to="/services" className="footer__list-link">Brand Identity</Link></li>
                <li><Link to="/services" className="footer__list-link">Digital Marketing</Link></li>
              </ul>
            </div>

            <div className="footer__links-col">
              <h4 className="footer__col-title">Company</h4>
              <ul className="footer__list">
                <li><Link to="/about" className="footer__list-link">About Us</Link></li>
                <li><Link to="/portfolio" className="footer__list-link">Our Work</Link></li>
                <li><Link to="/career" className="footer__list-link">Careers</Link></li>
                <li><Link to="/contact" className="footer__list-link">Contact</Link></li>
              </ul>
            </div>

            <div className="footer__newsletter">
              <h4 className="footer__col-title">Newsletter</h4>
              <p className="footer__newsletter-text">Get digital insights delivered to your inbox.</p>
              <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  required
                />
                <button
                  type="submit"
                  className="footer__newsletter-btn"
                  disabled={newsletterStatus === 'sending'}
                >
                  <span>{newsletterStatus === 'sending' ? 'Subscribing...' : 'Subscribe'}</span>
                </button>
              </form>
              {newsletterMessage && (
                <p
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: newsletterStatus === 'success' ? 'var(--cyan)' : '#ff6b6b',
                  }}
                >
                  {newsletterMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">© {currentYear} PixelLab. All rights reserved.</p>
            <div className="footer__bottom-links">
              <Link to="/" className="footer__bottom-link">Privacy Policy</Link>
              <Link to="/" className="footer__bottom-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
