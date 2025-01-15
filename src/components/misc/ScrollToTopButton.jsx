import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import the CSS file for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  };

  return (
    isVisible && (
      <button className="scroll-to-top-btn" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
