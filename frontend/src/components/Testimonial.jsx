import React from 'react';
import './Testimonial.css';

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-content">
          <div className="testimonial-text">
            <h2>What we have done &<br />what our Customers say</h2>
            <p>We are to help you build a excellent build, with us nothing is impossible. See what we have done and what they have to say about our work perform.</p>
          </div>
          <div className="testimonial-card">
            <p className="quote">"We like the final result this project, in extraordinary and also provides the best service to the client"</p>
            <img src="images/backgrounds/pattern.jpg" alt="" style={{ height: '200px', width: "200px", borderRadius: "50%", marginBottom: "20px", marginRight: "20px" }} />
            <div className="author">
              <h4>Jacob Molen</h4>
              <p>General Project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
