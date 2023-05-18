import mongoose from "mongoose";

const schema = mongoose.Schema({
  patient_name: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  advance: {
    type: String,
    required: true,
  },
  date_of_admin: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date_of_discharge: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  lab_reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lab_report",
    },
  ],

  room_no: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  admitted_room_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "room_type",
  },
  current_room_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "room_type",
  },
  doctors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  ],
  temperature: [
    {
      type: String,
      time: Date.now(),
    },
  ],
  blood_pressure: [
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
  remarks: {
    type: String,
  },
});

export const In_patient = mongoose.model("In_patient", schema);
