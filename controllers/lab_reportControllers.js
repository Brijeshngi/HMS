import ErrorHandler from "../utils/errorHandler.js";
import { Lab_report } from "../models/Lab_report.js";
import { Doctor } from "../models/Doctor.js";
import { Patient } from "../models/Patient.js";
import "express-async-errors";

export const createReport = async (req, res, next) => {
  const {
    patient_name,
    doctor_name,
    weight,
    test_name,
    reports,
    suggestion,
    amount,
    date,
  } = req.body;

  if (
    !patient_name ||
    !doctor_name ||
    !weight ||
    !test_name ||
    !reports ||
    !suggestion ||
    !amount ||
    !date
  )
    return next(new ErrorHandler("please provide all data", 400));

  const data = await Lab_report.create({
    patient_name,
    doctor_name,
    weight,
    test_name,
    reports,
    suggestion,
    amount,
    date,
  });

  res.status(201).json({
    success: true,
    message: "Report generated",
  });
};

export const editReport = async (req, res, next) => {
  const { id } = req.params;

  let reportData = await Lab_report.findById(id);

  if (!reportData) return next(new ErrorHandler("no data found", 404));

  const { weight, test_name, reports, suggestion } = req.body;

  if (!weight || !test_name || !reports || !suggestion)
    return next(new ErrorHandler("please provide all data", 400));

  (reportData.weight = weight),
    (reportData.test_name = test_name),
    (reportData.reports = reports),
    (reportData.suggestion = suggestion),
    await Lab_report.save();

  res.status(201).json({
    success: true,
    message: "Report updated",
  });
};

// request for test
