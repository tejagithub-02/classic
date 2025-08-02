import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EnquiryForm.css';

const WHATSAPP_NUMBER = '919035815260';

const EnquiryForm = () => {
  const formRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const eventRef = useRef();
  const locationRef = useRef();
  const dateRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
✨ *New Event Enquiry* ✨

👤 *Name:* ${nameRef.current.value}
📞 *Phone:* ${phoneRef.current.value}
📧 *Email:* ${emailRef.current.value}
🎉 *Event Type:* ${eventRef.current.value}
📍 *Location:* ${locationRef.current.value}
📅 *Preferred Date:* ${dateRef.current.value}
💬 *Message:* ${messageRef.current.value}
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
    
    // Add submission animation
    formRef.current.classList.add('submitted');
    setTimeout(() => {
      formRef.current.classList.remove('submitted');
    }, 2000);
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: { scale: 1.02 },
    focus: { scale: 1.03, boxShadow: "0 0 0 2px rgba(101, 87, 255, 0.3)" }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.03,
      boxShadow: "0 5px 15px rgba(101, 87, 255, 0.4)",
      transition: { 
        yoyo: Infinity,
        duration: 0.8
      }
    },
    tap: { scale: 0.98 }
  };

  const formFields = [
    { ref: nameRef, type: "text", placeholder: "Your Name", required: true },
    { ref: phoneRef, type: "tel", placeholder: "Phone Number", required: true },
    { ref: emailRef, type: "email", placeholder: "Email Address", required: true },
    { ref: eventRef, type: "text", placeholder: "Event Type (e.g. Wedding, Corporate)", required: true },
    { ref: locationRef, type: "text", placeholder: "Event Location", required: true },
    { ref: dateRef, type: "date", required: true },
    { ref: messageRef, type: "textarea", placeholder: "Additional Message (Optional)", rows: 4 }
  ];

  return (
    <div className="enquiry-form-wrapper">
      <motion.div 
        className="enquiry-form-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="form-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="enquiry-title">Plan Your Perfect Event</h2>
          <p className="enquiry-subtitle">Fill out the form and we'll get back to you within 24 hours</p>
        </motion.div>

        <form className="enquiry-form" onSubmit={handleSubmit} ref={formRef}>
          <AnimatePresence>
            {formFields.map((field, i) => (
              <motion.div
                key={field.placeholder}
                custom={i}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileFocus="focus"
                className="form-field-container"
              >
                {field.type === "textarea" ? (
                  <textarea
                    ref={field.ref}
                    placeholder={field.placeholder}
                    rows={field.rows}
                    required={field.required}
                  />
                ) : (
                  <input
                    ref={field.ref}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.button
            type="submit"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="submit-button"
          >
            <span className="button-icon">📩</span>
            <span className="button-text">Send Enquiry</span>
          </motion.button>
        </form>

        <motion.div 
          className="form-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p>We respect your privacy. Your information will not be shared.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnquiryForm;