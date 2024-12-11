import React from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Success = () => {
  return (
    <Box className="success-section" sx={{ padding: '40px 20px', backgroundColor: '#defdef' }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: '700', color: '#2e7d32' }}>
        Payment Successful!
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="body1" sx={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.6', textAlign: 'center' }}>
            Hi there! Thanks for being cool as you are to rent from my establishment. You're obviously blessed with a miraculously high intelligence quotient because you've picked the greatest storage rental unit ever created in the Universe. That's a scientific fact. Who her? That's not me I can tell you that. Naw, man. I'm a bald nearly 60-year-old man with stanky breath, ear wax, and a general hostility towards authoritarians. Just sayin.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src="/assets/images/success.webp"
            alt="Payment Success"
            style={{ width: '100%', borderRadius: '8px', marginTop: '20px' }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a 
                href="/" 
                style={{
                textDecoration: 'none',
                backgroundColor: '#1976d2',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
                padding: '20px 40px',
                borderRadius: '12px',
                textAlign: 'center',
                display: 'block',
                width: '100%',
                maxWidth: '300px',
                }}
            >
                HOME
            </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Success;
