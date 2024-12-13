import React from 'react';
import Box from '@mui/material/Box';
import './Hero.css';

const Hero = () => {
  return (
    <div className="heroStyle">
      <div className="overlayStyle"></div>
      <div className="contentStyle">
        <Box component="div" sx={{ px: 2, width: '100%', height: 'auto' }}>
          <img src="/assets/images/tsunami-logo.svg" alt="Tsunami logo" />
        </Box>
        <h2>Fair Weather Self-Storage</h2>
        <h3>
          Not liable for Mother Nature's flatulence.
        </h3>
      </div>
    </div>
  );
};

export default Hero;

