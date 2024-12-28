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

// Try the following mongoose.connect for Vercel
// mongoose.connect(process.env.MONGO_URI, { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
// });

// For Stripe webhook listeners to work the following 2 lines must 
// precede `express.json()` because it interferes with raw data in webhook.js 
const webhookRoutes = require('./routes/webhook');
app.use('/webhook', webhookRoutes);

// Middleware
app.use(express.json());

const allowedOrigins = [
  'https://self-storage-frontend.vercel.app', 
  'http://localhost:5173', 
];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

// Serve static files from the React frontend build directory
// app.use(express.static('client/build'));

// Routes
const checkoutRoutes = require('./routes/checkout');
const unitsRouter = require('./routes/units');

app.use('/checkout', checkoutRoutes);
app.use('/units', unitsRouter);

// Root Route
app.get('/', (_, res) => {
  res.send('Welcome to Rourke Storage API!');
});

// Troubleshooting 404 Not Found error at Vercel with following log
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.path}`);
  next();
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});