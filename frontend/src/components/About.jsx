import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="/images/Mask Group (4).png" alt="Building" />
          </div>
          <div className="about-text">
            <h3>Our Story</h3>
            <h2>Who we are</h2>
            <p>Established in 1992, PT. Wahana Cipta operates as a General Contracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta.</p>
            <p>As the company grows, now we are present as a reliable...</p>
            <button className="btn-primary">See More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
