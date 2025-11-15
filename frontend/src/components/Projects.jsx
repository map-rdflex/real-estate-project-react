import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="portfolio" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Our collection best project</h2>
          <h3>Treasury Tower</h3>
          <p>Project Completed</p>
        </div>
        <div className="projects-grid">
          <div className="project-card large">
            <img src="/images/properties/property-1.png" alt="Treasury Tower Main" className="project-image" />
          </div>
          <div className="project-card">
            <img src="/images/properties/property-2.png" alt="Treasury Tower View 1" className="project-image" />
          </div>
          <div className="project-card">
            <img src="/images/properties/property-3.png" alt="Treasury Tower View 2" className="project-image" />
          </div>
        </div>
      </div>




    </section>
  );
}

export default Projects;
