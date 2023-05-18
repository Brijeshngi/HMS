import express from "express";
import {
  addPatient,
  allPatient,
  editPatient,
  updatePatient,
} from "../controllers/patientControllers.js";

import { isAdmin, isDoctor } from "../middlewares/auth.js";
const router = express.Router();

router.route("/addpatient").get(isAdmin, addPatient);
router.route("/allpatient").get(isAdmin, allPatient);
router.route("/editpatient/:id").put(isAdmin, editPatient);
router.route("/updatepatient/:id").get(isDoctor, updatePatient);

export default router;
