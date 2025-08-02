import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Aarav Sharma',
    text: 'The catering was amazing! Everyone loved the food and service. Will definitely recommend.',
    image: '/clients/client.png',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    text: 'Delicious food, on-time service, and wonderful presentation. Highly appreciated!',
    image: '/clients/client.png',
    rating: 4,
  },
  {
    name: 'Ravi Kumar',
    text: 'We booked for a wedding event. Everything was perfectly organized. Thank you!',
    image: '/clients/client.png',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    text: 'Their South Indian spread was truly authentic and flavorful. Great experience!',
    image: '/clients/client.png',
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);
  const visibleTestimonials = testimonials.slice(
    currentSlide * itemsPerPage,
    currentSlide * itemsPerPage + itemsPerPage
  );

  return (
    <div className="testimonial-wrapper">
      <h4 className="testimonial-sub">— Our Testimonials —</h4>
      <h2 className="testimonial-head"><span>What</span> Our Customers Say!</h2>

      <div className="testimonial-cards-container">
        <AnimatePresence mode="wait">
          {visibleTestimonials.map((t, i) => (
            <motion.div
              className="testimonial-card"
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-header">
                <img src={t.image} alt={t.name} className="testimonial-img" />
                <div>
                  <h4>{t.name}</h4>
                </div>
                <div className="testimonial-quotes">❝❞</div>
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className={idx < t.rating ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="testimonial-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
