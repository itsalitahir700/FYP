const mongoose = require("mongoose");

var doctorSchema = new mongoose.Schema({
  name: { type: String, required: "This field is required." },
  email: { type: String, required: "This field is required." },
  password: { type: String, required: "This field is required." },
  specialty: {
    type: String,
    required: "This field is required.",
  },
  profile_pic: { type: String, required: "This field is required." },
});

mongoose.model("Doctor", doctorSchema);
