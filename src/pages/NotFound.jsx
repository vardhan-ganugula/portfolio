import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <motion.div 
      className="not-found-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="error-code">404</h1>
      <motion.div
        className="error-text"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <h2>Oops! Page Not Found</h2>
        <p>The page you're looking for seems to have vanished into thin air.</p>
      </motion.div>
      <Link to="/" className="home-button">
        Return Home
      </Link>
    </motion.div>
  );
}

export default NotFound;