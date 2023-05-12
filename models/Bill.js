import mongoose from "mongoose";

const schema = mongoose.Schema({
  patient_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  patient_type: {
    type: String,
    enum: ["IPD", "OPD"],
  },
  medicine_charge: {
    type: String,
    required: true,
  },
  room_charge: {
    type: String,
    required: true,
  },
  surgery_charge: {
    type: String,
  },
  no_of_days: {
    type: String,
  },
  nursing_charge: {
    type: String,
  },
  health_card: {
    type: String,
  },
  advance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "In_patient",
  },
  lab_report_charge: {
    type: String,
  },
  doctor_fees: [
    {
      type: String,
    },
  ],
  bill_total: {
    type: String,
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Bill = mongoose.model("Bill", schema);
