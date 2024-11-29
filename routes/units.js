const express = require('express');
const router = express.Router();
const StorageUnit = require('../models/StorageUnit');

// GET: Fetch available units with filtering by size if query is provided
router.get('/available', async (req, res) => {
  try {
    const { size } = req.query; // Get size filter from query parameter
    let query = { isAvailable: true };

    if (size) {
      query.size = { $regex: size, $options: 'i' }; // Case-insensitive filter by size
    }

    const availableUnits = await StorageUnit.find(query);
    res.status(200).json(availableUnits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
