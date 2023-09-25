const mongoose = require("mongoose");

// Schema for Reports
const reportUserSchema = new mongoose.Schema({
  // ID of the user who submitted the report
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  // ID of the user who is being reported
  reportedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  // Type of report (e.g., "harassment," "spam," "inappropriate content")
  type: {
    type: String,
    required: true,
  },
  // Description of the report (additional details)
  description: {
    type: String,
    required: true,
  },
  // Status of the report (e.g., "pending," "resolved," "action taken")
  status: {
    type: String,
    enum: ["pending", "resolved", "action taken"],
    default: "pending", // Default status is "pending"
    required: true,
  },
  // Timestamp of when the report was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for Report
const ReportUser = mongoose.model("Report", reportUserSchema);

module.exports = ReportUser;
