require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// For Stripe webhook listeners to work the following 2 lines must 
// precede `express.json()` because it interferes with raw data in webhook.js 
const webhookRoutes = require('./routes/webhook');
app.use('/webhook', webhookRoutes);

// Middleware
app.use(express.json());

// app.use(cors({ origin: 'http://localhost:3000' }));

// Allows all origins during deployment and serves as a placeholder
app.use(cors({ origin: 'https://self-storage-frontend.vercel.app/' }));



// Serve static files from the React frontend build directory
app.use(express.static('client/build'));

// Routes
const checkoutRoutes = require('./routes/checkout');
const unitsRouter = require('./routes/units');

app.use('/checkout', checkoutRoutes);
app.use('/units', unitsRouter);

// Root Route
app.get('/', (_, res) => {
  res.send('Welcome to Rourke Storage API!');
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
