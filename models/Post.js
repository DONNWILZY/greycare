const mongoose = require("mongoose");

// Schema for Posts
const postSchema = new mongoose.Schema({
  // Reference to the entity creating the post (e.g., Hospital, InsuranceCompany, Pharmacy)
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "postedByModel", // Dynamic reference based on "postedByModel" field
  },
  // Model type of the entity creating the post (e.g., "Hospital", "InsuranceCompany", "Pharmacy")
  postedByModel: {
    type: String,
    required: true,
    enum: ["Hospital", "InsuranceCompany", "Pharmacy"],
  },
  // Title of the post
  title: {
    type: String,
    required: true,
  },
  // Content or description of the post
  content: {
    type: String,
    required: true,
  },
  // Featured photo for the post
  featuredPhoto: String,
  // Timestamp of when the post was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for Posts
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
