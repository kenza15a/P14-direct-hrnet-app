import React from 'react';
import './Loading.scss'; // Import the CSS file for styling
import { useEffect } from 'react';
import { useState } from 'react';
/**
 *Loading component
 */
const Loading = () => { 
  
  const [dots, setDots] = useState('');
  useEffect(() => {
  // Function to animate the dots
  const animateDots = () => {
    setTimeout(() => setDots('.'), 500);
    setTimeout(() => setDots('..'), 1000);
    setTimeout(() => setDots('...'), 1500);
    setTimeout(() => setDots(''), 2000);
  };

  // Start the animation
  animateDots();

  // Clean up the timer when the component unmounts
  return () => clearTimeout(animateDots);
}, []);

  return (
    <div className="loading-container">
      <div className="loader"></div>
      <div className="loading-text">HRNET {dots}</div>
    </div>
  );
};
export default Loading;