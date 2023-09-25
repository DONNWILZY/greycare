const mongoose = require("mongoose");

// Schema for Pharmacy
const pharmacySchema = new mongoose.Schema({
  // Pharmacy name
  name: {
    type: String,
  },
  // Location
  location: {
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    cityOrTown: {
      type: String,
    },
  },
  // Contact information
  contact: {
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  // Logo, profile photo, and cover photo
  logo: {
    type: String,
  },
  profilePhoto: {
    type: String,
  },
  coverPhoto: {
    type: String,
  },
  // Posts
  posts: [
    {
      type: String,
    },
  ],
});

// Create a model for Pharmacy
const Pharmacy = mongoose.model("Pharmacy", pharmacySchema);

module.exports = Pharmacy;
