import React from 'react';
import './Stats.css';

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-intro">
          <h3>As a trusted general project that has been<br />
            operating for 25 years, our commitment is<br />
            always to prioritize our client satisfaction</h3>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <h2>300+</h2>
            <p>Happy<br />Client</p>
          </div>
          <div className="stat-item">
            <h2>900+</h2>
            <p>Amazing<br />Projects</p>
          </div>
          <div className="stat-item">
            <h2>20+</h2>
            <p>Awards<br />Winning</p>
          </div>
          <div className="stat-item">
            <h2>25</h2>
            <p>Years<br />Operated</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
