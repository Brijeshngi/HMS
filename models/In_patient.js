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
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  dateofdischarge: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
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
  remarks: {
    type: String,
  },
});

export const In_patient = mongoose.model("In_patient", schema);
