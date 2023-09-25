//// Prescription

const mongoose = require("mongoose");

// Schema for Medications
const medicationSchema = new mongoose.Schema({
  // Medication name
  name: {
    type: String,
    required: true,
  },
  // Dosage information
  dosage: String,
  // Side effects of the medication
  sideEffects: String,
  // Reference to the hospital where the medication is available (Hospital model)
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  // Reference to the pharmacy where the medication is stocked (Pharmacy model)
  pharmacy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pharmacy",
    required: true,
  },
  // Reference to the patient prescribed the medication (User model)
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // Reference to the doctor or pharmacist who prescribed or dispensed the medication (User model)
  prescribingDoctorOrPharmacist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // Date of prescription or dispensing
  prescriptionDate: {
    type: Date,
    default: Date.now,
  },
  // Instructions for taking the medication
  instructions: String,
  // Any additional notes or comments
  notes: String,
});

// Create a model for Medications
const Medication = mongoose.model("Medication", medicationSchema);

module.exports = Medication;
