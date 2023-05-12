import mongoose from "mongoose";

const schema = mongoose.Schema({
  room_number: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  room_type: {
    type: String,
  },
  createAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Room = mongoose.model("Room", schema);
