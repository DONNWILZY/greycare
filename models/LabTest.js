const mongoose = require("mongoose");

// Schema for Lab Test Records
const labTestSchema = new mongoose.Schema({
  // Reference to the patient (User model)
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Date of the lab test
  date: {
    type: Date,
    required: true,
  },
  // Doctor who ordered the lab test (User model)
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Lab test name
  testName: {
    type: String,
    required: true,
  },
  // Lab test results
  results: {
    type: String,
    required: true,
  },
  // Any additional notes
  notes: {
    type: String,
  },
});

// Create a model for Lab Test Records
const LabTestRecord = mongoose.model("LabTestRecord", labTestSchema);

module.exports = LabTestRecord;
