import React from 'react';
import './Team.css';

function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team-content">
          <div className="team-text">
            <h2>Meet and talk with our best architecture</h2>
            <h3>Dianne Russell</h3>
            <p>All our teams are professional and competent in their fields and will help you realize your dream building with the excellent result.</p>
            <p className="experience">More than 20 years of experience in the field architecture and has worked on project up to 100+</p>
            <button className="btn-primary">See all team</button>
          </div>
          <div className="team-image">
            <img src="/images/a6d43b0782b7c2ca8fe07449577734cdd6232aaf (1).jpg" alt="Dianne Russell" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
