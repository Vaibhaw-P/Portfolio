import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; // Ensure you have the CSS file for Contact component

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <motion.p
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <strong>Email:</strong> <a href="mailto:strategicpandey@gmail.com">strategicpandey@gmail.com</a>
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <strong>Phone:</strong> +91 8318083366
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <strong>GitHub:</strong> <a href="https://github.com/Vaibhaw-P" target="_blank" rel="noopener noreferrer">Vaibhaw-P</a>
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;