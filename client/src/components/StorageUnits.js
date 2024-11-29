import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Typography, Box, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import './StorageUnits.css';

const StorageUnits = () => {
  const [units, setUnits] = useState([]);
  const [filteredUnits, setFilteredUnits] = useState([]);
  const [sizeFilter, setSizeFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await axios.get('/units/available');
        const unitsWithPrices = await Promise.all(
          response.data.map(async (unit) => {
            if (unit.priceId) {
              try {
                const priceResponse = await axios.get(`/checkout/get-price-details/${unit.priceId}`);
                return { ...unit, price: priceResponse.data.price };
              } catch (err) {
                console.error(`Failed to fetch price for unit ${unit.unitNumber}:`, err);
                return { ...unit, price: 'N/A' }; // Handle missing price gracefully
              }
            }
            return { ...unit, price: 'N/A' }; // Handle units without a priceId
          })
        );
        setUnits(unitsWithPrices);
        setFilteredUnits(unitsWithPrices); // Set initial units without filtering
      } catch (err) {
        console.error('Failed to fetch units:', err);
      }
    };

    fetchUnits();
  }, []); // Empty array ensures this runs every time component is mounted

  // Filter units by size
  const handleFilterChange = (event) => {
    setSizeFilter(event.target.value);
    if (event.target.value === '') {
      setFilteredUnits(units); // Reset to all units if filter is empty
    } else {
      const filtered = units.filter((unit) => unit.size.includes(event.target.value));
      setFilteredUnits(filtered);
    }
  };

  const rentUnit = (unit) => {
    navigate('/checkout', { state: { selectedUnit: unit } });
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }} className="main-box">
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', marginBottom: 5, textShadow: '-1px -2px 3px #aaffaa' }}>
        Available Storage Units
      </Typography>

      {/* Filter by size */}
      <TextField
        label="Filter by Size"
        variant="outlined"
        value={sizeFilter}
        onChange={handleFilterChange}
        sx={{ marginBottom: 3 }}
      />

      <Grid container spacing={3}>
        {filteredUnits.map((unit) => (
          <Grid size={{ xs: 6, sm: 3, md: 2 }} key={unit._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  Unit {unit.unitNumber}
                </Typography>
                <Typography color="text.secondary">
                  Size: {unit.size}
                </Typography>
                <Typography color="text.secondary">
                  Price: ${unit.price !== 'N/A' ? unit.price : 'Loading...'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => rentUnit(unit)}>Rent Now</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StorageUnits;

