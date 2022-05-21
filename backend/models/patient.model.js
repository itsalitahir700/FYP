const mongoose = require("mongoose");

var patientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "This field is required.",
  },
  email: {
    type: String,
  },
  age: {
    type: String,
  },
  weight: {
    type: String,
  },
  disease: {
    type: String,
  },
  fb_link: {
    type: String,
  },
  twitter_link: {
    type: String,
  },
  blood_pressure: {
    type: Number,
  },
  heart_rate: {
    type: Number,
  },
  respiratory_rate: {
    type: Number,
  },
  glucose: {
    type: Number,
  },
  mood: {
    type: String,
  },
  anxiety: {
    type: String,
  },
  thought: {
    type: String,
  },
  prescription: {
    type: String,
    required: "This field is required.",
  },
});

mongoose.model("Patient", patientSchema);
