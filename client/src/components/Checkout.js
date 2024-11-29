import React from 'react';
import { Button, Typography, Card, CardContent } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useStripe } from '@stripe/react-stripe-js';

const Checkout = () => {
  const location = useLocation();
  const { selectedUnit } = location.state || {}; // Ensure selectedUnit is passed correctly
  const stripe = useStripe();

  const handleCheckout = async () => {
    if (!stripe || !selectedUnit) return;

    try {
      const response = await fetch('http://localhost:3001/checkout/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          unitId: selectedUnit._id,  
          priceId: selectedUnit.priceId,
          quantity: 1, // Include quantity to avoid backend errors
        }),
      });

      const paymentData = await response.json();

      if (response.ok) {
        // Redirect to Stripe Checkout
        const { id: sessionId } = paymentData;
        const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });

        if (stripeError) {
          console.error('Stripe redirect error:', stripeError);
          alert('An error occurred while redirecting to checkout. Please try again.');
        }
      } else {
        console.error('Payment error:', paymentData.error);
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred during checkout. Please try again.');
    }
  };

  return (
    <Card>
      <CardContent>
        {selectedUnit ? (
          <>
            <Typography variant="h5">Checkout</Typography>
            <Typography>Unit Number: {selectedUnit.unitNumber}</Typography>
            <Typography>Price per Month: ${selectedUnit.price || 'Loading...'}</Typography> {/* Dynamically display price */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              disabled={!stripe}
            >
              Pay Now
            </Button>
          </>
        ) : (
          <Typography>Please select a unit to rent.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Checkout;
