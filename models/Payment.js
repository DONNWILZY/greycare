const mongoose = require("mongoose");

// Schema for Payment
const paymentSchema = new mongoose.Schema({
  // Reference to the user making the payment (patient or hospital)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Payment gateway used for the transaction (e.g., Paystack, Stripe, Crypto)
  gateway: {
    type: String,
    required: true,
  },
  // Transaction ID or unique identifier from the payment gateway
  transactionId: {
    type: String,
    required: true,
  },
  // Payment amount (in the currency of the transaction)
  amount: {
    type: Number,
    required: true,
  },
  // Currency code (e.g., USD, NGN, BTC)
  currency: {
    type: String,
    required: true,
  },
  // Status of the payment (e.g., "completed," "pending," "failed")
  status: {
    type: String,
    required: true,
  },
  // Date and time of the payment transaction
  timestamp: {
    type: Date,
    default: Date.now,
  },
  // Additional payment details or metadata
  metadata: {
    type: mongoose.Schema.Types.Mixed,
    // You can store additional information here, such as payment descriptions, references, etc.
  },
});

// Create a model for Payment
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
