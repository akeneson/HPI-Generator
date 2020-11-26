const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hpigenerator"
);

const patientRecordSeed = [
  {
    apptDate: new Date(Date.now()),
    patientId: "001",
    symptom: "Trauma",
    palliative: ["massage", "hot compress"],
    provocative: ["arching", "bending"],
    qualityType: ["stabbing", "numbness"],
    radiation: ["lower back", "legs"],
    severity: 7,
    timeDuration: 3,
    durationType: "days"
  }
];

db.PatientRecord
  .remove({})
  .then(() => db.PatientRecord.collection.insertMany(patientRecordSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
