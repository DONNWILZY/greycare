const mongoose = require("mongoose");

// Schema for Referral
const referralSchema = new mongoose.Schema({
  // Reference to the patient being referred (User model)
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Reference to the entity making the referral (e.g., doctor, insurance company, hospital, pharmacy)
  referringEntity: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "referringEntityType", // Dynamic reference based on "referringEntityType" field
    required: true,
  },
  // Type of the referring entity (e.g., "Doctor", "InsuranceCompany", "Hospital", "Pharmacy")
  referringEntityType: {
    type: String,
    enum: ["Doctor", "InsuranceCompany", "Hospital", "Pharmacy"],
    required: true,
  },
  // Reference to the entity being referred to (e.g., another hospital, pharmacy, insurance company, or lab)
  referredToEntity: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "referredToEntityType", // Dynamic reference based on "referredToEntityType" field
    required: true,
  },
  // Type of the entity being referred to (e.g., "Hospital", "Pharmacy", "InsuranceCompany", "Lab")
  referredToEntityType: {
    type: String,
    enum: ["Hospital", "Pharmacy", "InsuranceCompany", "Lab"],
    required: true,
  },
  // Additional details or notes about the referral
  notes: String,
  // Timestamp of when the referral was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for Referral
const Referral = mongoose.model("Referral", referralSchema);

module.exports = Referral;
