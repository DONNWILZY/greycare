const mongoose = require("mongoose");

// Schema for Billing
const billingSchema = new mongoose.Schema({
  // ID of the customer or client being billed
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model (or the relevant model for customers/clients)
    required: true,
  },
  // Invoice number or identifier
  invoiceNumber: {
    type: String,
    required: true,
    unique: true, // Ensure each invoice has a unique identifier
  },
  // Date the invoice was issued
  invoiceDate: {
    type: Date,
    required: true,
  },
  // Due date for payment
  dueDate: {
    type: Date,
    required: true,
  },
  // Line items representing billable items or services
  items: [
    {
      description: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      unitPrice: {
        type: Number,
        required: true,
      },
    },
  ],
  // Total amount to be paid
  totalAmount: {
    type: Number,
    required: true,
  },
  // Status of the invoice (e.g., "unpaid," "paid," "overdue")
  status: {
    type: String,
    enum: ["unpaid", "paid", "overdue"],
    default: "unpaid", // Default status is "unpaid"
    required: true,
  },
  // Timestamp of when the billing record was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for Billing
const Billing = mongoose.model("Billing", billingSchema);

module.exports = Billing;
