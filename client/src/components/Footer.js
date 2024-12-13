import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ff0000',
  color: '#ffffff',
  textAlign: 'center',
  padding: theme.spacing(2),
  boxShadow: 'inset 0 0 7px #000',
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '3em', padding: '3em 1em 5em 1em', backgroundColor: '#ff4444' }}>
      <Grid container spacing={3}>
        <Grid size="grow">
          <Item>
            <p>Something Else</p>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <p>
              Copyright © <strong>Tsunami Fair Weather Self-Storage</strong>. All rights reserved.
            </p>
          </Item>
        </Grid>
        <Grid size="grow">
          <Item sx={{ padding: 3.3 }}>
            <a href="https://richhudson.org" rel="noopener noreferrer" target="_blank">
              <FacebookIcon sx={{ color: '#fff', fontSize: 30 }} />
            </a>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
