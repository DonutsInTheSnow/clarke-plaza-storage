require('dotenv').config();
const mongoose = require('mongoose');
const StorageUnit = require('./models/StorageUnit'); // Assuming correct path to your StorageUnit model
const mockUnits = require('./mockUnits.json'); // Assuming you have a mockUnits.json file for your mock data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
    // Seed the data
    return StorageUnit.insertMany(mockUnits); // Insert mock data into the DB
  })
  .then(() => {
    console.log('Seeding completed!');
    mongoose.disconnect(); // Disconnect after seeding
  })
  .catch(err => {
    console.error('Error seeding database:', err);
    mongoose.disconnect(); // Disconnect in case of error
  });
