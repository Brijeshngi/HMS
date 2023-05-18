import "express-async-errors";
import ErrorHandler from "../utils/errorHandler.js";
import { Out_patient } from "../models/Out_patient.js";
import { Patient } from "../models/Patient.js";
import { Lab_report } from "../models/Lab_report.js";

export const addOPD = async (req, res, next) => {
  const { patient_name, lab_report } = req.body;

  if (!patient_name || !lab_report)
    return next(new ErrorHandler("provide all data", 400));

  const data = await Out_patient.create({
    patient_name,
    lab_report,
  });

  res.status(201).json({
    success: true,
    message: "added to OPD",
  });
};

export const editOPD = async (req, res, next) => {
  const { id } = req.params;

  const data = await Out_patient.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { patient_name, lab_report } = req.body;

  if (!patient_name || !lab_report)
    return next(new ErrorHandler("provide all data", 400));
  (data.patient_name = patient_name),
    (data.lab_report = lab_report),
    await Out_patient.save();

  res.status(201).json({
    success: true,
    message: "updated",
  });
};

export const opdData = async (req, res, next) => {
  const data = await Out_patient.find({});
  res.status(200).json({
    success: true,
    data,
  });
};
