const mongoose = require("mongoose");

// Schema for Medical Records
const medicalRecordsSchema = new mongoose.Schema({
  // Reference to the patient (User model)
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Date of the medical record
  date: {
    type: Date,
    required: true,
  },
  // Doctor who created the medical record (User model)
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Diagnosis details
  diagnosis: {
    type: String,
    required: true,
  },
  // Treatment details
  treatment: {
    type: String,
    required: true,
  },
  // Procedure details
  procedure: {
    type: String,
  },
  // Lab test results
  labTestResults: {
    type: String,
  },
  // Medication prescribed
  medications: [
    {
      medicationName: String,
      dosage: String,
      frequency: String,
    },
  ],
  // Any additional notes
  notes: {
    type: String,
  },
});

// Create a model for Medical Records
const MedicalRecords = mongoose.model("MedicalRecords", medicalRecordsSchema);

module.exports = MedicalRecords;
