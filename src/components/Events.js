import React, { useState } from 'react';
import './Events.css';
import { motion } from 'framer-motion';

const eventCategories = [
  'All',
  'Corporate Lunch & Dinner',
  'Corporate Events',
  'Wedding Events',
  'Social Events',
  'Regional Events',
  'Theme Lunch',
  'Indian, Western & Asian Cuisine'
];

const eventImages = [
  { src: '/events/corporate-lunch.png', category: 'Corporate Lunch & Dinner' },
  { src: '/events/corporate-events.png', category: 'Corporate Events' },
  { src: '/events/wedding-events.png', category: 'Wedding Events' },
  { src: '/events/social-events.png', category: 'Social Events' },
  { src: '/events/regional-events.png', category: 'Regional Events' },
  { src: '/events/theme-lunch.png', category: 'Theme Lunch' },
  { src: '/events/multi-cuisine.png', category: 'Indian, Western & Asian Cuisine' }
];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredImages = selectedCategory === 'All'
    ? eventImages
    : eventImages.filter(img => img.category === selectedCategory);

  return (
    <div className="events-gallery-container" id='events'>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="highlight">Our</span> Events Gallery
      </motion.h2>

      <div className="category-buttons">
        {eventCategories.map(cat => (
          <button
            key={cat}
            className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        className={`events-grid${filteredImages.length === 1 ? ' single-item' : ''}`}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {filteredImages.map((img, idx) => (
          <motion.div 
            key={idx}
            className="event-card"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <img src={img.src} alt={img.category} className="event-img" />
            <p className="event-label">{img.category}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Events;
