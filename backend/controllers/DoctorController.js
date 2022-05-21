const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Doctor = mongoose.model("Doctor");

router.post("/signup", (req, res) => {
  insertRecord(req, res);
});

router.post("/login", (req, res) => {
  login(req, res);
});

function insertRecord(req, res) {
  var doctor = new Doctor();
  doctor.name = req.body.name;
  doctor.email = req.body.email;
  doctor.password = req.body.password;
  doctor.specialty = req.body.specialty;
  doctor.profile_pic = req.body.profile_pic;

  doctor.save((err, _doc) => {
    if (!err)
      return res
        .status(201)
        .json(` Doctor ${doctor.name} successfully created`);
    else {
      return res.status(500).json({ error: err });
    }
  });
}

function login(req, res) {
  Doctor.findOne({ email: req.body.email }, (err, doc) => {
    if (!err) {
      if (doc) {
        if (doc.password === req.body.password) {
          return res.status(200).json(doc);
        } else {
          return res.status(401).json({ error: "Password is incorrect" });
        }
      } else {
        return res.status(401).json({ error: "User does not exist" });
      }
    } else {
      return res.status(500).json({ error: err });
    }
  });
}

module.exports = router;
