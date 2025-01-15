// src/components/misc/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import the CSS file for styling
import { useLocation } from 'react-router-dom'; // To track location changes

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 200) { // When scrolled down 200px, show the button
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Adding event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener
    };
  }, []);

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  };

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    isVisible && (
      <button className="scroll-to-top-btn" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
