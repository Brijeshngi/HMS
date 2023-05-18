import { Room_Type } from "../models/room_type.js";
import ErrorHandler from "../middlewares/Error.js";
import "express-async-errors";
import { Room } from "../models/Room.js";

export const roomType = async (req, res, next) => {
  const { name, charge } = req.body;
  if (!name || !charge)
    return next(new ErrorHandler("please provide all details", 400));
  await Room_Type.create({
    name,
    charge,
  });

  res.status(201).json({
    success: true,
    message: "created",
  });
};

export const editRoomType = async (req, res, next) => {
  const { id } = req.params;

  let data = await Room_Type.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { name, charge } = req.body;

  if (!name || !charge)
    return next(new ErrorHandler("please provide all details", 400));

  if (name || charge)
    (data.name = name), (data.charge = charge), await Room_Type.save();

  res.status(201).json({
    success: true,
    data,
    message: "updated",
  });
};

export const createRoom = async (req, res, next) => {
  const { room_number, location, admitted_room_type } = req.body;
  if (!room_number || !location || !admitted_room_type)
    return next(new ErrorHandler("please provide all details", 400));
  const data = await Room.create({
    room_number,
    location,
    admitted_room_type,
  });

  res.status(201).json({
    success: true,
    data,
    message: "Room created",
  });
};

export const editRoom = async (req, res, next) => {
  const { id } = req.params;

  let data = await Room.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { room_number, location, admitted_room_type } = req.body;

  (data.room_number = room_number),
    (data.location = location),
    (data.admitted_room_type = admitted_room_type);

  res.status(200).json({
    success: true,
    message: "updated",
  });
};

export const allRoom = async (req, res, next) => {
  const data = await Room.find({});
  if (!data) return next(new ErrorHandler("no data found", 404));
  res.status(200).json({
    success: true,
    data,
  });
};
