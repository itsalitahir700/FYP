const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const PatientProgress = mongoose.model("PatientProgress");

router.get("/progress/:id", async (req, res) => {
  try {
    const progress = await PatientProgress.find({ pId: req.params.id }).sort({
      created_at: 1,
    });
    return res.status(200).json(progress);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.post("/add-progress/:id", (req, res) => {
  var patient = new PatientProgress();
  patient.pId = req.params.id;
  patient.date = req.body.date;
  patient.progress = req.body.progress;
  patient.save((err, _doc) => {
    if (!err)
      return res
        .status(201)
        .json(` Patient progress succesfully add for ${req.body.date}`);
    else {
      return res.status(500).json({ error: err });
    }
  });
});

module.exports = router;
