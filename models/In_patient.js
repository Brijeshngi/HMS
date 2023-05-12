import mongoose from "mongoose";

const schema = mongoose.Schema({
  patientname: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  advance: {
    type: String,
    required: true,
  },
  dateofadmin: {
    type: String,
    required: true,
  },
  dateofdischarge: {
    type: String,
  },
  labreports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lab_report",
    },
  ],

  roomno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  doctors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      remarks: String,
    },
  ],
  temperature: [
    {
      type: String,
      time: Date.now(),
    },
  ],
  bloodpressure: [
    {
      type: String,
      time: Date.now(),
    },
  ],
  pulse: [
    {
      type: String,
      time: Date.now(),
    },
  ],
});

export const In_patient = mongoose.model("In_patient", schema);
