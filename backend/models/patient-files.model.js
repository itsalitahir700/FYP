var mongoose = require("mongoose");

var patientFilesSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: "This field is required.",
  },
  name: {
    type: String,
  },
  fileName: {
    type: String,
  },
  filePath: {
    type: String,
  },
  fileType: {
    type: String,
  },
  fileSize: {
    type: String,
  },
  fileExtension: {
    type: String,
  },
});

mongoose.model("PatientFiles", patientFilesSchema);
