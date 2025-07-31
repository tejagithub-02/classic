import React, { useEffect } from 'react';
import './Services.css';

const Services = () => {
  const backgroundImage = '/services/service-bg.jpeg'; // from public folder

  const services = [
    {
      title: 'Wedding Services',
      description: 'Elegant full-service catering for your big day.',
      more: 'Includes decoration, live counters, and custom menus.',
      image: '/services/wedding.jpg',
    },
    {
      title: 'Corporate Catering',
      description: 'Professional meals for your business events.',
      more: 'On-time delivery, branded setup, and quality cuisine.',
      image: '/services/corporate.jpg',
    },
    {
      title: 'Cocktail Reception',
      description: 'Stylish drinks and bites for your cocktail parties.',
      more: 'Signature cocktails, mixologists, and themed snacks.',
      image: '/services/cocktail.jpg',
    },
    {
      title: 'Bento Catering',
      description: 'Delicious boxed meals for convenient occasions.',
      more: 'Ideal for schools, offices, and travel groups.',
      image: '/services/bento.jpg',
    },
    {
      title: 'Buffet Catering',
      description: 'Variety-rich buffets to delight every guest.',
      more: 'Live counters, customizable themes, and desserts.',
      image: '/services/buffet.jpg',
    },
    {
      title: 'Sit-Down Catering',
      description: 'Formal multi-course dining experience.',
      more: 'Served meals with waitstaff and table settings.',
      image: '/services/sitdown.jpeg',
    },
    {
      title: 'Home Delivery',
      description: 'Get gourmet food delivered to your doorstep.',
      more: 'Fresh, fast, and hygienic for home events.',
      image: '/services/home.webp',
    },
    {
      title: 'Pub Party',
      description: 'Catering for fun, casual party vibes.',
      more: 'Snacks, grills, and craft drinks for every mood.',
      image: '/services/pub.jpeg',
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 150 * index);
    });
  }, []);

  return (
    <div
      className="services-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="section-overlay" />
      <div className="section-content">
        <div className="section-subtitle">Our Services</div>
        <h1 className="section-title1"><strong>What We Offer</strong></h1>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="hover-content-wrap">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-hover-info">
                  <p>{service.more}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
