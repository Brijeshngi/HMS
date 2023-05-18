import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
  ],
  degree: [
    {
      type: String,
      required: true,
    },
  ],
  specialty: [
    {
      type: String,
      required: true,
    },
  ],
  status: {
    type: String,
    enum: ["A", "P"],
  },
  patient: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  ],
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Doctor = mongoose.model("Doctor", schema);
