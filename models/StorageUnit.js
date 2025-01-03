const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storageUnitSchema = new Schema({
  unitNumber: { type: String, required: true, unique: true },
  size: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
  priceId: { type: String, required: true },
}, {
  timestamps: true
});

const StorageUnit = mongoose.model('StorageUnit', storageUnitSchema);

module.exports = StorageUnit;
