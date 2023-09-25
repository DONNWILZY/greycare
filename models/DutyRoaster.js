const mongoose = require("mongoose");

// Schema for Duty Roster
const dutyRoasterSchema = new mongoose.Schema({
  // Date of the duty roster
  date: {
    type: Date,
    required: true,
  },
  // Shift information (e.g., morning, evening)
  shift: {
    type: String,
    required: true,
  },
  
  timeslots: [
    {
      startTime: Date,
      endTime: Date,
    },
  ],
  // Array of staff members assigned to the duty
  assignedStaff: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff", // Reference to the Staff model (or the relevant model for staff members)
    },
  ],
  // Array of doctors assigned to the duty
  assignedDoctors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the Doctor model (or the relevant model for doctors)
    },
  ],
  // Activities or tasks for the duty roster
  activities: {
    type: String,
    required: true,
  },
  // Array of patients assigned to the duty
  patientAssignments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the Patient model (or the relevant model for patients)
    },
  ],
  // Timestamp of when the duty roster was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for Duty Roaster
const DutyRoaster = mongoose.model("DutyRoaster", dutyRoasterSchema);

module.exports = DutyRoaster;
