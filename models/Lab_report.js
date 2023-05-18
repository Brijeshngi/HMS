import mongoose from "mongoose";

const schema = mongoose.Schema({
  patient_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  test_name: {
    type: String,
    required: true,
  },
  reports: {
    type: String,
    required: true,
  },
  suggestion: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  createAt: {
    type: String,
    required: true,
  },
});

export const Lab_report = mongoose.model("Lab_report", schema);

// make separate test_name with rate
