import React from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './About.css';

const About = () => {
  return (
    <Box className="about-section" sx={{ padding: '40px 20px' }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: '700', color: '#ff0000', textShadow: '-6px 0 7px #000' }}>
        About Us
      </Typography>
      <Grid container rowSpacing={{xs: 1, sm: 1.5, lg: 2.5}} columnSpacing={{ xs: 1, sm: 2, lg: 3 }} sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
            <img
              src="/assets/images/about.webp"
              alt="About Us"
              style={{ width: '100%', borderRadius: '8px' }}
            />
        </Grid>

        <Grid size={{ xs: 12, sm: 7 }}>
          <Typography variant="body1" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>        
            <p>At Tsunami Self Storage, we're the fair weather friend your possessions never knew they had. If the first wave of life's chaos doesn't sweep you off your feet, fear not, for subsequent waves are on their way. Here, we don't just store your belongings, we ride the waves with them, ensuring they're as safe as possible from the tempestuous seas of life.</p>
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 5 }}>
          <Typography variant="body1" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)'  }}>
            <p>We're committed to providing fair weather storage, but let's be honest. When Mother Nature decides to belch, sneeze, or fart, we accept no liability. Your items are on their own against the whims of the weather gods.</p> 
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 5 }}>
          <img
            src="/assets/images/inside.webp"
            alt="Storage Inside"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="body1" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)'  }}>
            <p>We value your legitimate business and appreciate your responsible patronage. No kidding. This is a haven for the orderly, a fortress for the law-abiding. Whether you're storing family heirlooms or the fruits of your legitimate labor, Tsunami is here to weather the storm with you - or at least try to.</p>
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 5 }}>
          <Typography variant="body1" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.4)'  }}>
            <p>Remember, at Tsunami, being a fair weather friend means when an actual tsunami rolls in, we're high-tailing it out of there faster than a Tesla Plaid Series can go. So, if you're ready to brave the waves with your possessions, welcome aboard. Just don't store anything you're not prepared to have washed out to sea.</p>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
