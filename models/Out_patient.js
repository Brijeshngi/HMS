import mongoose from "mongoose";

const schema = mongoose.Schema({
  patient_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  lab_report: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lab_report",
    required: true,
  },
  date: {
    type: Date,
    Date: Date.now(),
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const OutPatient = mongoose.model("OutPatient", schema);
