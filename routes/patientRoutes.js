import express from "express";
import { register } from "../controllers/patientControllers.js";
const router = express.Router();

router.route("/register").get(register);

export default router;
