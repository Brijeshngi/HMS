import express from "express";
import {
  addOPD,
  editOPD,
  opdData,
} from "../controllers/out_patientControllers";
import { isAdmin } from "../middlewares/auth.js";
const router = express.Router();

router.route("/opd").post(isAdmin, addOPD);
router.route("/opd/:id").put(isAdmin, editOPD);
router.route("/opd").get(isAdmin, opdData);

export default router;
