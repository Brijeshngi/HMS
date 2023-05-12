import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  doctor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  ],
  createAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Department = mongoose.model("Department", schema);
