const mongoose = require("mongoose");

// Define the Hospital schema
const hospitalSchema = new mongoose.Schema({
  // Hospital name
  name: {
    type: String,
  },
  // Other hospital details
  // ...
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

// Define a schema to format Number fields
const NumberFieldSchema = {
  type: Number,
  // Additional properties for Number fields can be added here
};

// Schema for Insurance Company
const insuranceCompanySchema = new mongoose.Schema({
  // Company name
  name: {
    type: String,
  },
  // Address of the company
  address: {
    type: String,
  },
  // Contact information
  contact: {
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    website: {
      type: String,
    },
    fax: {
      type: String,
    },
    poBox: {
      type: String,
    },
  },
  // Insurance plans offered by the company
  plans: [
    {
      name: {
        type: String,
      },
      coverageDetails: {
        type: String,
      },
    },
  ],
  // List of subscribed patients
  subscribedPatients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for patients
    },
  ],
  // Partner hospitals
  partnerHospitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital", // Reference to the Hospital model
      yearOfExperience: NumberFieldSchema,
    },
  ],
  // License and registration information
  license: {
    type: String,
  },
  registrationInfo: {
    cert: {
      type: String,
    }, // Certificate
    letterOfAuthorization: {
      type: String,
    }, // Letter of Authorization
  },
  // Year of experience for the insurance company
  yearOfExperience: NumberFieldSchema,
  // Other related fields
  // ...
});

// Create a model for Insurance Company
const InsuranceCompany = mongoose.model("InsuranceCompany", insuranceCompanySchema);

module.exports = InsuranceCompany;
