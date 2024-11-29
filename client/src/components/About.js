import React from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './About.css';

const About = () => {
  return (
    <Box className="about-section" sx={{ padding: '40px 20px', backgroundColor: '#defdef' }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: '700' }}>
        About Us
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        <Grid size={{ xs: 12, md: 6 }}>
            <img
              src="/assets/images/about.webp"
              alt="About Us"
              style={{ width: '100%', borderRadius: '8px' }}
            />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body1" sx={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.6', padding: '2em 1em' }}>
            WeStoreIt4You is a privately owned facility, managed by the courteous staff of Rourke Fine Home Building, LLC. We value your business and appreciate your patronage.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body1" sx={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.6', padding: '2em 1em' }}>
            We provide homeowners, businesses, and contractors with storage solutions. Whether it's boxes, furniture, seasonal items, or vehicles—we've got you covered.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src="/assets/images/inside.webp"
            alt="Storage Inside"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="body1" sx={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.6' }}>
            Conveniently located, our facility is accessible whenever you need it. Clean and secure, we cater to both short- and long-term storage needs.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
