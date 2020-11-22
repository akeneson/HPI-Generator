const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const illnessRecordSchema = new Schema({
  apptDate: {
    type: Date,
  },
  patientId: {
    type: String,
    required: true
  },
  symptom: {
    type: String,
    required: true
  },
  palliative: [String],
  provocative: [String],
  qualityType: [String],
  radiation: [String],
  severity: Number,
  timeDuration: {
    type: Number,
    required: true
  },
  durationType: String,
  diagnosis: [String],
  status: {
    type: String,
    required: true,
    default: "active"
  }
});

const IllnessRecord = mongoose.model("Illness Record", illnessRecordSchema);

module.exports = IllnessRecord;