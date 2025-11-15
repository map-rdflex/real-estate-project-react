import React from 'react';
import './WhatMakesUsDifferent.css';

function WhatMakesUsDifferent() {
  const features = [
    {
      title: 'Experienced',
      description: 'Our experience of 25 years of building and making achievements in the world of development',
      image: 'images/ant-design_field-time-outlined (1).png'
    },
    {
      title: 'Competitive Price',
      description: 'The prices we offer you are very competitive without reducing the quality of the company\'s work in the slightest',
      image: 'images/bx_bx-check-shield.png'

    },
    {
      title: 'On Time',
      description: 'We prioritize the quality of our work and finish it on time',
      image: 'images/ion_pricetag-outline.png'

    },
    {
      title: 'Best Materials',
      description: 'The material determines the building itself so we recommend that you use the best & quality materials in its class.',
      image: 'images/Vector.png'

    }
  ];

  return (
    <section className="different">
      <div className="container">
        <div className="section-header">
          <h2>What Make Us Different?</h2>
          <p>Check out our best service you can possibly orders in building<br />
            your company and don't forget to ask via our email or our<br />
            customer service if you are interested in using our services</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.image} alt="" />
                {/* <img src="ant-design_field-time-outlined (1).png" alt="" style={{width}}/> */}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatMakesUsDifferent;
