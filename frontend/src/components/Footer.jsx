import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>General Project</h3>
            <p>is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.</p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#how">How it Works</a>
            <a href="#term">Term</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div className="footer-column">
            <h4>More</h4>
            <a href="#doc">Documentation</a>
            <a href="#license">License</a>
          </div>
          <div className="footer-column">
            <div className="social-icons">
              <div className="social-icon">
                <img src='images/Icon.png' />
              </div>
              <div className="social-icon">
                <img src='images/Icon (1).png' />
              </div>
              <div className="social-icon">
                <img src='images/Icon (2).png' />
              </div>
              <div className="social-icon">
                <img src='images/Icon-1.png' />
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
