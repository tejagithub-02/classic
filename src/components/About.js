import React from 'react';
import './About.css';

const About = () => {
  const sectionStyle = {
    position: 'relative',
    zIndex: 1,
    backgroundImage: "url('/services/bg-about1.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(255,255,255,0.05)', // subtle tint fallback
  };

  const images = [
    '/services/about1.jpeg',
    '/services/about2.jpeg',
    '/services/about3.jpeg',
    '/services/about4.jpeg',
  ];

  return (
    <section className="about-catering" style={sectionStyle}>
      <div className="light-overlay" />

      <div className="about-container">
        <header className="about-header">
          <h3 className="section-title">~ Who We Are ~</h3>
          <h2 className="headline">Delivering Delight With Every Dish</h2>
        </header>

        <div className="about-main">
          <div className="about-image-gallery">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`About Gallery ${i + 1}`}
                style={{ animationDelay: `${i * 0.18}s` }}
                className="about-image-item"
              />
            ))}
          </div>

          <article className="about-text-features">
            <p className="about-description">
              We specialize in unforgettable food experiences, blending creativity and flavor
              to bring your event to life. Whether it's a cozy gathering or a grand celebration,
              our chefs and service team are committed to making it flawless.
            </p>

            <ul className="about-features">
              <li><span>🍽️</span> Fresh, Seasonal, and Gourmet Ingredients</li>
              <li><span>🧑‍🍳</span> Trained Culinary Professionals</li>
              <li><span>🎯</span> Fully Customized Menus for Every Event</li>
              <li><span>📦</span> Hassle-Free Delivery & On-site Setup</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
