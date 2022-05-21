const mongoose = require("mongoose");


//schema->structure of document
var patientProgressSchema = new mongoose.Schema({
  pId: {
    type: String,
  },
  date: {
    type: String,
  },
  progress: {
    type: Number,
  },
},{
  timestamps: true
});

//mongoose model is a wrapper on mongoose schema ,provides an interface to db schema for crud etc.

//collection creation
//PatientProgress->collectionName

mongoose.model("PatientProgress", patientProgressSchema);

