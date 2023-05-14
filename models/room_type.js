import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  charge: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Room_Type = mongoose.model("Room_Type", schema);
