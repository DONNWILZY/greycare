const mongoose = require("mongoose");

// Schema for Notifications
const notificationSchema = new mongoose.Schema({
  // ID of the user receiving the notification
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model (or the relevant model for recipients)
    required: true,
  },
  // Content of the notification message
  content: {
    type: String,
    required: true,
  },
  // Timestamp of when the notification was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Flag to mark the notification as read or unread
  isRead: {
    type: Boolean,
    default: false, // Default to unread
  },
  // Link or URL associated with the notification (optional)
  link: {
    type: String,
  },
  // Type of notification (e.g., "message", "alert", "request")
  type: {
    type: String,
    required: true,
  },
});

// Create a model for Notification
const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
