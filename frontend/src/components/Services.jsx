import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Industrial',
      description: 'Industrial development is our main line of business. We do Factory Construction, Warehouse and others',
      icon: '/images/properties/property-1.png'
    },
    {
      title: 'Commercial',
      description: 'Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings',
      icon: '/images/properties/property-2.png'
    },
    {
      title: 'Residential',
      description: 'Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments',
      icon: '/images/properties/property-3.png'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Excellent Services</h2>
          <p>Check out our best service you can possibly orders in building<br />
            your company and don't forget to ask via our email or our<br />
            customer service if you are interested in using our services</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;



