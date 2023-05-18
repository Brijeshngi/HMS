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
  },
  contact: {
    type: String,
    minlength: [10, "minimum 10 digit required"],
    maxlength: [10, "maximum 10 digit required"],
    required: [true, "Contact required"],
  },
  email: {
    type: String,
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
      data: String,
      by: mongoose.Schema.Types.ObjectId,
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
    default: "OPD",
  },
  date_of_register: {
    type: Date,
    Date: Date.now(),
  },
  patient_status: {
    type: String,
    enum: ["Admit", "Discharge"],
  },
  date_of_discharge: {
    type: Date,
  },
  summary: [
    {
      data: String,
      by: mongoose.Schema.Types.ObjectId,
    },
  ],
  advice: [
    {
      data: String,
      by: mongoose.Schema.Types.ObjectId,
    },
  ],
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Patient = mongoose.model("Patient", schema);
