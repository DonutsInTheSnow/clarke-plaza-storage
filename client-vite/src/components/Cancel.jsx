import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Cancel = () => {
  return (
    <Box className="cancel-section" sx={{ padding: '40px 20px', backgroundColor: '#9abbcd' }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: '700', color: '#de3589' }}>
        Payment Cancelled!
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="body1" sx={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.6', textAlign: 'center', color: '#fff', textShadow: '0 0 3px #000' }}>
            So you decided not to rent from my establishment. May I call you Schumer? I'll call you Schumer. Scientific fact: Schumer's ladies, like Miss Dubble Bertha (pictured), love pancakes. No, not three coaster sized jobs. Twelve to fourteen while waiting on the waffles.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src="/assets/images/cancel.webp"
            alt="Payment Cancel"
            style={{ width: '100%', borderRadius: '8px', marginTop: '20px' }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a 
                href="/" 
                style={{
                textDecoration: 'none',
                backgroundColor: '#de3589',
                color: '#34ef23',
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
                HOOVER
            </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cancel;
