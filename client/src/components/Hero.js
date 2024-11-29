import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="heroStyle">
      <div className="overlayStyle"></div>
      <div className="contentStyle">
        <h1>WeStoreIt4You</h1>
        <h2 style={{ fontSize: '1.7rem', textAlign: 'center', maxWidth: '600px', letterSpacing: '1px' }}>
          Gain space at home or work by storing seasonal and rarely used items. Put your car back in the garage!
        </h2>
      </div>
    </div>
  );
};

export default Hero;

