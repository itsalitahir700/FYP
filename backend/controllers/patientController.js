//this file -> to create a route in node js apllication

//rqst statement for express
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Patient = mongoose.model("Patient");
const PatientFile = mongoose.model("PatientFiles");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

router.get("/", (req, _res) => {
  return req;
});

router.post("/add", (req, res) => {
  insertRecord(req, res);
});

router.put("/update", (req, res) => {
  updateRecord(req, res);
});

function insertRecord(req, res) {
  var patient = new Patient();
  patient.fullName = req.body.fullName;
  patient.email = req.body.email;
  patient.weight = req.body.weight;
  patient.age = req.body.age;
  patient.disease = req.body.disease;
  patient.fb_link = req.body.fb_link;
  patient.twitter_link = req.body.twitter_link;
  patient.blood_pressure = req.body.blood_pressure;
  patient.heart_rate = req.body.heart_rate;
  patient.respiratory_rate = req.body.respiratory_rate;
  patient.glucose = req.body.glucose;
  patient.mood = req.body.mood;
  patient.anxiety = req.body.anxiety;
  patient.thought = req.body.thought;
  patient.prescription = req.body.prescription;

  patient.save((err, _doc) => {
    if (!err)
      return res
        .status(201)
        .json(` Patient ${patient.fullName} succesfully created`);
    else {
      return res.status(500).json({ error: err });
    }
  });
}

function updateRecord(req, res) {
  Patient.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, _doc) => {
      if (!err) {
        return res
          .status(201)
          .json(` Patient ${req.body.fullName} succesfully updated`);
      } else {
        return res.status(500).json({ error: err });
      }
    }
  );
}

router.get("/list", (_req, res) => {
  Patient.find((err, docs) => {
    if (!err) {
      return res.status(200).json(docs);
    } else {
      console.log("Error in retrieving patient list :" + err);
    }
  });
});

router.get("/details/:id", (req, res) => {
  Patient.findById(req.params.id, (err, doc) => {
    if (!err) {
      return res.status(200).json(doc);
    }
  });
});

router.delete("/:id", (req, res) => {
  console.log(req.params);
  Patient.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      console.log(doc);
      return res.status(201).json(`Patient succesfully deleted`);
    } else {
      return res.status(500).json({ error: err });
    }
  });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(req, req?.body, req?.recording, req?.file);
    const { patientId } = req.body;
    const dir = `./recordings/${patientId}`;
    fs.exists(dir, (exist) => {
      if (!exist) {
        return fs.mkdir(dir, (error) => {
          console.log(error);
          cb(error, dir);
        });
      }
      return cb(null, dir);
    });
  },
  filename: (req, file, cb) => {
    const { patientId } = req.body;
    cb(
      null,
      `${patientId}-recording-${Date.now()}.${file.mimetype.split("/")[1]}`
    );
  },
});
const upload = multer({ storage });

router.post("/recording", upload.any(), function (req, res, next) {
  const { patientId } = req.body;
  const file = req.files[0];
  const fileName = file.filename;
  const filePath = file.path;
  const fileType = file.mimetype;
  const fileSize = file.size;
  const fileExtension = file.originalname.split(".").pop();
  const newFile = new PatientFile({
    patientId,
    fileName,
    name: file.originalname,
    filePath,
    fileType,
    fileSize,
    fileExtension,
  });
  newFile.save((err, doc) => {
    if (!err) {
      res.status(201).json({
        message: "File uploaded successfully",
        data: doc,
      });
    } else {
      res.status(500).json({
        message: "File upload failed",
        error: err,
      });
    }
  });
});

router.get("/recording/:id", (req, res) => {
  PatientFile.find({ patientId: req.params.id }).exec((err, docs) => {
    if (!err) {
      res.status(200).json(docs);
    } else {
      res.status(500).json({ error: err });
    }
  });
});

router.get("/recording/:id/:fileName", (req, res) => {
  console.log("fileName", req.params.fileName);
  const { id, fileName } = req.params;
  const filePath = `./recordings/${id}/${fileName}`;
  res.sendFile(filePath, { root: "." });
});

//exporting router obj from this controller
module.exports = router;
