import * as React from 'react';
import Box from '@mui/material/Box';
import './BottomNav.css';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PaymentIcon from '@mui/icons-material/Payment';
import Paper from '@mui/material/Paper';

export default function FixedBottomNavigation({ scrollToStorageUnits }) {
  const [value, setValue] = React.useState(0);
  return (
    <Box>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Rent A Unit"
            icon={<PaymentIcon />}
            onClick={scrollToStorageUnits}
          />
          <BottomNavigationAction label="Contact Form" icon={<MailOutlineIcon />} />
          <BottomNavigationAction label="Call Us" icon={<SmartphoneIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}


