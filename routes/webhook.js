const express = require('express');
const router = express.Router();
const Unit = require('../models/StorageUnit');
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SK);

router.post('/', express.raw({ type: 'application/json' }), async (req, res) => {
    // console.log("Raw request body received:", req.body);
    const sig = req.headers['stripe-signature'];
    try {
        const event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
        // console.log("Parsed event data:", event);

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            console.log("Checkout session metadata:", session.metadata);
            try {
                // Verify that unitId metadata exists before attempting update
                if (!session.metadata || !session.metadata.unitId) {
                    throw new Error("unitId metadata is missing from session.");
                }
                const unitId = session.metadata.unitId;
                const isAvailable = session.metadata.isAvailable;
                console.log(`isAvailable FUCKER: ${isAvailable}`);

                // Update the unit's isAvailable status
                const result = await Unit.findByIdAndUpdate(unitId, { isAvailable: false });
                
                if (result) {
                    console.log(`Storage unit ${unitId} is now unavailable.`);
                } else {
                    console.error(`Storage unit with ID ${unitId} not found.`);
                }
            } catch (error) {
                console.error('Error updating unit availability:', error.message);
            }
        }
        res.json({ received: true });
    } catch (error) {
        console.error('Webhook signature verification failed:', error.message);
        res.status(400).send(`Webhook Error: ${error.message}`);
    }
});

module.exports = router;

