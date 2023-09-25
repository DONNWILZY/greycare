const mongoose = require("mongoose");

// Schema for Insurance Plan
const insurancePlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    // Name of the insurance plan (e.g., "Health Plan A")
  },
  description: {
    type: String,
    // Description of the insurance plan (e.g., coverage details)
  },
  coverageType: {
    type: String,
    required: true,
    // Type of coverage (e.g., "Health", "Auto", "Life")
  },
  coverageAmount: {
    type: Number,
    // Coverage amount or limit (e.g., maximum payout)
  },
  premiumAmount: {
    type: Number,
    required: true,
    // Premium amount (e.g., monthly cost)
  },
  deductibleAmount: {
    type: Number,
    // Deductible amount (e.g., amount paid by the insured before coverage applies)
  },
  coveragePeriod: {
    type: String,
    required: true,
    // Coverage period (e.g., "Annual", "Monthly")
  },
  eligibilityCriteria: {
    type: String,
    // Eligibility criteria for the plan (e.g., age, health condition)
  },
  // Additional fields as needed (e.g., waiting periods, exclusions)
});

// Create a model for Insurance Plan
const InsurancePlan = mongoose.model("InsurancePlan", insurancePlanSchema);

module.exports = InsurancePlan;
