const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //required: true,
    },
    avatar: {
      type: String,
      //required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
      // sparse: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["isUser", "isAdmin", "isDoctor", "isOthers"],
      default: "isUser",
    },
    status: {
      type: String,
      enum: ["isActive", "isInactive", "isDeactivated", "isSuspended", "isLimited"],
      default: "isActive",
    },

    applyDoctor: {
        credentials: doctorCredentialSchema, // Embed the doctor's credentials
        status: {
          type: String,
          enum: ["pending", "reviewing", "approved", "declined"],
          default: "pending",
        },
      },
    
    doctorInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    verifyBadge: {
      type: Boolean,
      default: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    dob: {
      type: Date,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    allergies: {
      type: [String],
    },
    pastAppointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
      },
    ],
    disease: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Questionaire",
    },
    bookedAppointments: [
      {
        appointment: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Appointment",
        },
        doctorInfo: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "DoctorInfo",
        },
        startTime: {
          type: String,
        },
        endTime: {
          type: String,
        },
        status: {
          type: String,
        },
      },
    ],
    receiveEmailNotification: {
      type: Boolean,
      default: true,
    },
    receivePushNotification: {
      startTime: {
        type: String,
      },
    },
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notification",
      },
    ],
  },
  { timestamps: true }
);


// Schema for Emergency Contacts
const emergencyContactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
  });

  const doctorCredentialSchema = new mongoose.Schema({
    // Degree information
    degree: {
      type: String,
      required: true,
    },
    // CV (Curriculum Vitae)
    cv: {
      type: String,
      required: true,
    },
    // Cover Letter
    coverLetter: {
      type: String,
      required: true,
    },
    // Photograph or License (you can specify which one)
    licenseOrPhotograph: {
      type: String,
      required: true,
    },
  });


const User = mongoose.model("User", UserSchema);

module.exports = User;
