import mongoose from "mongoose";

const schema = mongoose.Schema({
  room_number: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  admitted_room_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "room_type",
  },
  createAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Room = mongoose.model("Room", schema);
