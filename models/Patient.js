import mongoose from "mongoose";
import validator from "validator";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  age: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: validator.isEmail,
  },
  address: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
  doctor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  ],
  lab_reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lab_report",
    },
  ],
  bill: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bill",
    },
  ],
  status: {
    type: String,
    enum: ["IPD", "OPD"],
  },
  patient_status: {
    type: String,
    enum: ["Admit", "Discharge"],
  },
  summary: {
    type: String,
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Patient = mongoose.model("Patient", schema);
