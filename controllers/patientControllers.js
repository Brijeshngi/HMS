import "express-async-errors";
import ErrorHandler from "../utils/errorHandler.js";

export const addPatient = async (req, res, next) => {
  const { name, gender, age, contact, address, department } = req.body;

  if (!name || !gender || !age || !contact || !address || !department)
    return next(new ErrorHandler("please provide all fields", 400));

  await Patient.create({
    name,
    gender,
    age,
    contact,
    address,
    department,
  });

  res.status(201).json({
    success: true,
    message: "Patient registered successfully",
  });
};

export const allPatient = async (req, res, next) => {
  const data = await Patient.find({});

  if (!data) return next(new ErrorHandler("no patient found", 404));

  res.status(200).json({
    success: true,
    data,
  });
};

export const editPatient = async (req, res, next) => {
  const { id } = req.params;

  const data = await Patient.findById(id);

  if (!data) return next(new ErrorHandler("no patient found", 404));

  const { name, gender, age, contact, address, department, email } = req.body;

  if (!name || !gender || !age || !contact || !address || !department || !email)
    return next(new ErrorHandler("please provide all fields", 400));

  await Patient.create({
    name,
    gender,
    age,
    contact,
    address,
    department,
  });

  res.status(201).json({
    success: true,
    message: "Patient registered successfully",
  });
};

export const updatePatient = async (req, res, next) => {
  const { id } = req.params;
  const data = await Patient.findById(id);

  if (!data) return next(new ErrorHandler("no patient found", 404));

  const {
    weight,
    department,
    lab_reports,
    prescription,
    bill,
    status,
    patient_status,
    date_of_discharge,
    summary,
    advice,
  } = req.body;

  if (
    !weight ||
    !email ||
    !department ||
    !lab_reports ||
    !prescription ||
    !bill ||
    !status ||
    !patient_status ||
    !date_of_discharge ||
    !summary ||
    !advice
  )
    return next(new ErrorHandler("please provide all fields", 400));

  await Patient.save();

  res.status(201).json({
    success: true,
    message: "Patient updated successfully",
  });
};
