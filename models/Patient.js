import mongoose from "mongoose";
import validator from "validator";

const schema = mongoose.Schema({
  name: {
    type: String,
    maxlength: [25, "don't exceed 25 characters"],
    required: [true, "Name required"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: [true, "Gender Required"],
  },
  age: {
    type: String,
    required: [true, "Age required"],
  },
  weight: {
    type: String,
    required: [true, "Weight required"],
  },
  contact: {
    type: String,
    minlength: [10, "minimum 10 digit required"],
    maxlength: [10, "maximum 10 digit required"],
    required: [true, "Contact required"],
  },
  email: {
    type: String,
    required: l[(true, "Email required")],
    validate: validator.isEmail,
  },
  address: {
    type: String,
    minlength: [20, "minimum 20 digit required"],
    maxlength: [50, "maximum 50 digit required"],
    required: [true, "address reuired"],
  },
  department: [
    {
      name: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    },
    {
      doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    },
  ],

  lab_reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lab_report",
    },
  ],
  prescription: [
    {
      type: Array,
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
    required: [true, "status required"],
    enum: ["IPD", "OPD"],
  },
  date_of_admission: {
    type: Date,
    Date: Date.now(),
  },
  patient_status: {
    type: String,
    enum: ["Admit", "Discharge"],
  },
  date_of_discharge: {
    type: Date,
    Date: Date.now(),
  },
  summary: {
    type: String,
  },
  advice: {
    type: String,
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Patient = mongoose.model("Patient", schema);
