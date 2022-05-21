require("./models/db");

//express server
const express = require("express");

//using handlebars in nodejs app
//HandleBars can be used to render web pages to the client side from data on the server-side
const path = require("path");

//body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require("body-parser");

const patientController = require("./controllers/patientController");
const patientProgressController = require("./controllers/patientProgressController");
const doctorController = require("./controllers/doctorController");

var app = express();
var cors = require("cors");
const router = require("./controllers/patientController");
app.use(cors());
app.options("*", cors());
// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));

app.listen(3000, () => {
  console.log("Express server started at port : 3000");
});

//calling use middleware function
// partient->base URI for this patientController &patientProgressController
app.use("/patient", patientController);
app.use("/patient", patientProgressController);
app.use("/doctor", doctorController);

//these lines will configure the routing for node js application
