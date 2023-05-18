import express from "express";
import {
  addData,
  addDataByNurse,
  createIPD,
} from "../controllers/in_patientControllers";
import { isAdmin, isNurse } from "../middlewares/auth.js";
const router = express.Router();

router.route("/ipd").post(isAdmin, createIPD);
router.route("/ipd/:id").post(isAdmin, addData);
router.route("/adddataipd/:id").post(isNurse, addDataByNurse);

export default router;
