import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import './Footer.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ff0000',
  color: '#ffffff',
  textAlign: 'center',
  padding: theme.spacing(2)
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '3em', padding: '3em 1em 5em 1em', backgroundColor: '#ff4444' }}>
      <Grid container spacing={3} sx={{ alignItems: 'center' }}>
        <Grid size="grow">
          <Item>
            <a href="https://x.com/rhudson4966" rel="noopener noreferrer" target="_blank">
              <XIcon sx={{ color: '#fff' }} />
            </a>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item sx={{ boxShadow: 'inset 0 0 10px #333' }}>
            <p>
              Copyright © <strong>Tsunami, Inc</strong>. All rights reserved.
            </p>
          </Item>
        </Grid>
        <Grid size="grow">
          <Item>
            <a href="https://www.facebook.com/profile.php?id=61550375770683" rel="noopener noreferrer" target="_blank">
              <FacebookIcon sx={{ color: '#fff' }} />
            </a>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
