import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="heroStyle">
      <div className="overlayStyle"></div>
      <div className="contentStyle">
        {/* <h1>Tsunami</h1> */}
        <img src="/assets/images/tsunami-logo.svg" alt="Tsunami logo" />
        <h2>Fair Weather Self-Storage</h2>
        <h3>
          Not liable for Mother Nature's sneezes, belches or farts.
        </h3>
      </div>
    </div>
  );
};

export default Hero;

