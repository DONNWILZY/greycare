const mongoose = require("mongoose");

// Schema for Diagnosis
const diagnosisSchema = new mongoose.Schema({
  // Diagnosis code (e.g., ICD-10 code)
  code: {
    type: String,
    required: true,
    unique: true, // Each diagnosis code should be unique
  },
  // Description of the diagnosis
  description: {
    type: String,
    required: true,
  },
  // Additional details about the diagnosis
  details: String,
  // Timestamp of when the diagnosis was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for Diagnosis
const Diagnosis = mongoose.model("Diagnosis", diagnosisSchema);

module.exports = Diagnosis;
