//rqst statement for mongoose
const mongoose = require("mongoose");
//the first time you call require('mongoose') , it is creating an instance of the Mongoose class and returning it.
//Mongoose is a Node. js-based Object Data Modeling (ODM) library for MongoDB

//creating connection and connecting to db
mongoose.connect(
  "mongodb://localhost:27017/PatientDB",
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

//request statement for bellow models
require("./patient.model");
require("./patient-progress.model");
require("./doctor.model");
require("./patient-files.model");
