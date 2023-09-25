const mongoose = require("mongoose");

// Schema for User Permissions
const userPermissionsSchema = new mongoose.Schema({
  // Reference to the user for whom permissions are granted (User model)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // List of permissions granted to the user (e.g., "create", "read", "update", "delete")
  permissions: [
    {
      type: String,
      required: true,
    },
  ],
});

// Create a model for User Permissions
const UserPermissions = mongoose.model("UserPermissions", userPermissionsSchema);

module.exports = UserPermissions;
