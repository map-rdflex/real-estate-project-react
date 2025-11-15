import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>We Provide<br />Architectural design<br />and Construction</h1>
          <p>More than 100 building and housing projects that we have built.<br />
            The building owner chose us over other contractors in Jakarta,<br />
            because our work is different</p>
          <button className="btn-primary">Discover More</button>
        </div>
        <div className="hero-image">
          <img src="/images/hero/hero-image.png" alt="Building" />
        </div>
      </div>
    </section>



  );
}

export default Hero;
