import "express-async-errors";
import { In_patient } from "../models/In_patient";
import ErrorHandler from "../utils/errorHandler.js";

export const createIPD = async (req, res, next) => {
  const {
    patient_name,
    date_of_admin,
    room_no,
    admitted_room_type,
    current_room_type,
  } = req.body;

  if (
    !patient_name ||
    !date_of_admin ||
    !room_no ||
    !admitted_room_type ||
    !current_room_type
  )
    return next(new ErrorHandler("please provide all data"));

  await In_patient.create({
    patient_name,
    date_of_admin,
    room_no,
    admitted_room_type,
    current_room_type,
  });

  res.status(201).json({
    success: true,
    message: "added to IPD",
  });
};

export const addData = async (req, res, next) => {
  const { id } = req.params;

  const data = await In_patient.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { advance, doctors } = req.body;

  (data.advance = advance), (data.doctors = doctors);

  await data.save();

  res.status(200).json({
    success,
    message: "added data",
  });
};

export const addDataByNurse = async (req, res, next) => {
  const { id } = req.params;

  const data = await In_patient.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { temperature, blood_pressure, pulse, remarks } = req.body;
  data.temperature = temperature;
  data.blood_pressure = blood_pressure;
  data.pulse = pulse;
  data.remarks = remarks;

  await data.save();

  res.status(200).json({
    success: true,
    message: "updated",
  });
};
