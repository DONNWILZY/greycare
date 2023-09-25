const mongoose = require("mongoose");

// Schema for Hospital Department
const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Schema for Hospital Research Project
const researchProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  principalInvestigator: {
    type: String,
    required: true,
  },
});

// Schema for Staff
const staffSchema = new mongoose.Schema({
    // Reference to User Schema (staff as user)
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department", // Reference to the Department schema
    },
    role: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    isCurrentlyEmployed: {
      type: Boolean,
      default: true, // Default to currently employed
    },
    nextOfKin: {
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
    },
    emergencyContact: {
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
    },
  });
  

// Schema for Hospital
const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  // Reference to Hospital Departments
  departments: [departmentSchema],
  
  // Reference to Hospital Research Projects
  researchProjects: [researchProjectSchema],

  // Emergency Contacts
  emergencyContacts: [emergencyContactSchema],
  
  // Staff in Array
  staff: [staffSchema],

  // Other hospital-related fields
});

// Create a model for Hospital
const Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = Hospital;
