import express from "express";

import {
  registerDoctor,
  editDoctorData,
  addPatientToDoctor,
  updateStatus,
} from "../controllers/doctorControllers";

import { isAdmin, isDoctor } from "../middlewares/auth.js";

const router = express.Router();

router.route("/registerdoctor").post(isAdmin, registerDoctor);
router.route("/editdoctordata").put(isAdmin, editDoctorData);
router.route("/addpatienttodoctor").post(isAdmin, addPatientToDoctor);
router.route("/updatestatus").put(isAdmin, isDoctor, updateStatus);

export default router;
