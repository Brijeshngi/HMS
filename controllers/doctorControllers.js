import { Doctor } from "../models/Doctor.js";
import ErrorHandler from "../utils/errorHandler.js";

export const registerDoctor = async (req, res, next) => {
  const { name, department, degree, specialty } = req.body;

  if (!name || !department || !degree || !specialty)
    return next(new ErrorHandler("please provide all data", 400));

  const data = await Doctor.create({
    name,
    department,
    degree,
    specialty,
  });

  res.status(201).json({
    success: true,
    data,
    message: "registered",
  });
};

export const editDoctorData = async (req, res, next) => {
  const { id } = req.params;
  const doctorData = await Doctor.findById(id);
  if (!doctorData) return next(new ErrorHandler("no data found", 404));

  const { name, department, degree, specialty } = req.body;

  if (!name || !department || !degree || !specialty)
    return next(new ErrorHandler("please provide all data", 400));
  (doctorData.name = name),
    (doctorData.department = department),
    (doctorData.degree = degree),
    (doctorData.specialty = specialty);

  await Doctor.save();

  res.status(201).json({
    success: true,
    doctorData,
    message: "updated",
  });
};

export const addPatientToDoctor = async (req, res, next) => {
  const { id } = req.params;

  let data = await Doctor.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { patientId } = req.body;

  await Doctor.patient.push(patientId);

  res.status(200).json({
    success: true,
    message: "patient added",
  });
};

export const updateStatus = async (req, res, next) => {
  const { id } = req.params;

  const data = await Doctor.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { status } = req.body;

  data.status = status;

  await data.save();

  res.status(200).json({
    success: true,
    message: `Marked ${status}`,
  });
};

// remove patient
// patients on the day
// patients on advance appointment
