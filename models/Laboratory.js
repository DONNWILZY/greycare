const mongoose = require("mongoose");

// Schema for Laboratory
const laboratorySchema = new mongoose.Schema({
  // Laboratory name
  name: String,
  // Address of the laboratory
  address: String,
  // Contact information
  contact: {
    phone: String,
    email: String,
    website: String,
    fax: String,
    poBox: String,
  },
  // Images and media
  logo: String,
  profilePhoto: String,
  coverPhoto: String,
  images: [String],
  // License and registration information
  license: String,
  registrationInfo: {
    cert: String, // Certificate
    letterOfAuthorization: String, // Letter of Authorization
  },
});

// Create a model for Laboratory
const Laboratory = mongoose.model("Laboratory", laboratorySchema);

module.exports = Laboratory;
