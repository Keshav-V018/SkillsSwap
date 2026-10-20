const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [2, "Name must be atleast 2 characters"],
      maxlength: [80, "Name cannot exceed 80 characters"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      maxlength: 254,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: [8, "Password must be atleast 8 characters"],
    },
    role: {
      type: String,
      enum: ["learner", "mentor"],
      required: [true, "Please select the role"],
    },
    primarySkillArea: {
      type: String,
      enum: [
        "Design & creative",
        "Development & IT",
        "Business & Marketing",
        "Language",
        "Lifestyles & Wellness",
        "Other",
      ],
      default: null,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
