import React, { useEffect } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="contact-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id='contact'
    >
      <motion.h3 
        className="contact-title"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        Contact Us
      </motion.h3>
      
      <div className="contact-content">
       
        <motion.div 
          className="contact-info"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="info-header">
            <h3 className="contact-name">UPENDRA BEHERA</h3>
            <p className="contact-role">Director & Marketing Head</p>
            <h2 className="contact-brand">The Classic Kitchen</h2>
          </div>

          <div className="contact-details">
            <motion.div 
              className="detail-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="detail-icon">📞</span>
              <a href="tel:+919035815260" className="detail-link">90358 15260</a>
            </motion.div>
            <motion.div 
              className="detail-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="detail-icon">📧</span>
              <a href="mailto:info@tckitchen.com" className="detail-link">info@tckitchen.com</a>
            </motion.div>
            <motion.div 
              className="detail-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="detail-icon">📍</span>
              <div className="address">
                No 180/2B, Ground Floor, 6th Cross,<br />
                Lakshmi Layout, Garvebhavi Palya,<br />
                Bangalore - 560068
              </div>
            </motion.div>
          </div>
        </motion.div>

        
        <motion.div 
          className="map-container"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <iframe
            title="Classic Kitchen Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62243.87080262877!2d77.58824309726562!3d12.8912151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8037ef871f%3A0x1a792230570347f6!2sNo%20180%2F2B%2C%20Ground%20Floor%2C%206th%20Cross%2C%20Lakshmi%20Layout%2C%20Garvebhavi%20Palya%2C%20Bangalore%20-%20560068!5e0!3m2!1sen!2sin!4v1691494702040!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-iframe"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;