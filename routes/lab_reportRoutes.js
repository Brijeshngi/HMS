import express from "express";
import { createReport, editReport } from "../controllers/lab_reportControllers";
import { isDoctor } from "../middlewares/auth.js";

const router = express.Router();

router.route("/createreport").post(isDoctor, createReport);
router.route("/updatereport").put(isDoctor, editReport);

export default router;
