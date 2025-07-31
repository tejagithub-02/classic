import React from 'react';
import './Video.css';

const Video = () => {
  const sectionStyle = {
    backgroundImage: "url('/services/bg-about.avif')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'overlay',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    minHeight: '100vh',
    padding: '60px 40px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    fontFamily: "'Poppins', 'Segoe UI', sans-serif",
    color: '#333',
  };

  return (
    <section className="video-section" style={sectionStyle}>
      {/* Left: Video */}
      <div className="video-left fade-in">
        <div className="video-container">
          <video
            className="video-player"
            controls
            poster="/services/banquet.jpeg"
          >
            <source src="/services/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Right: Info */}
      <div className="video-right slide-in">
        <h2>Unforgettable Catering Moments</h2>
        <p>
          Let our passionate team craft your perfect event. Whether you're planning a wedding, corporate function, or celebration — we bring culinary magic and seamless service to every table.
        </p>

        <div className="info-grid">
          <div className="info-card">
            <h3>Premium Ingredients</h3>
            <p>Locally sourced, seasonal, and hand-picked for quality.</p>
          </div>
          <div className="info-card">
            <h3>Tailored Experiences</h3>
            <p>Menus & service styled for your taste and theme.</p>
          </div>
          <div className="info-card">
            <h3>Trusted Team</h3>
            <p>Professional chefs and coordinators to handle every detail.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
