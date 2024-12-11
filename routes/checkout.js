const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SK);
const Unit = require('../models/StorageUnit');

// Fetch price details by priceId
router.get('/get-price-details/:priceId', async (req, res) => {
  const { priceId } = req.params;
  try {
    const price = await stripe.prices.retrieve(priceId);
    res.json({
      price: (price.unit_amount / 100).toFixed(2), // Convert from cents to dollars
      currency: price.currency.toUpperCase(),
    });
  } catch (error) {
    console.error('Error fetching price details:', error);
    res.status(500).json({ error: 'Failed to fetch price details' });
  }
});

// Fetch one-time price ID for a unit
router.get('/fetch-one-time-price-id/:unitId', async (req, res) => {
  const { unitId } = req.params;
  try {
    const unit = await Unit.findById(unitId);
    if (!unit) {
      return res.status(404).send({ error: 'Unit not found' });
    }
    const priceId = unit.priceId;
    const unitNumber = unit.unitNumber;
    if (!priceId) {
      return res.status(400).send({ error: `No price found for size: ${unit.size}` });
    }

    res.json({
      priceId,
      unitNumber,
      size: unit.size,
    });
  } catch (error) {
    console.error('Error fetching price ID:', error);
    res.status(500).send({ error: 'Failed to fetch price ID' });
  }
});

// Create a Stripe Checkout session
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { unitId, quantity } = req.body;
    const unit = await Unit.findById(unitId);
    if (!unit) {
      return res.status(404).send({ error: 'Unit not found' });
    }
    const priceId = unit.priceId;
    if (!priceId) {
      return res.status(400).send({ error: `No price found for size: ${unit.size}` });
    }

    const lineItems = [
      {
        price: priceId,
        quantity,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      metadata: {
        unitId,
        unitNumber: unit.unitNumber,
        size: unit.size,
        isAvailable: unit.isAvailable,
      },
      success_url: 'https://self-storage-frontend.vercel.app/success',
      cancel_url: 'https://example.com/cancel',
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send({ error: 'Checkout session creation failed' });
  }
});

module.exports = router;
