import express from "express";
import ErrorMiddleware from "./middlewares/Error.js";
import { config } from "dotenv";
import cors from "cors";
config({
  path: "./config/config.env",
});

const app = express();

// middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
// importing routes

import patient from "./routes/patientRoutes.js";
import bill from "./routes/patientRoutes.js";
import department from "./routes/patientRoutes.js";
import doctor from "./routes/patientRoutes.js";
import room from "./routes/patientRoutes.js";
import labreport from "./routes/patientRoutes.js";
import outpatient from "./routes/patientRoutes.js";
import inpatient from "./routes/patientRoutes.js";
import payment from "./routes/patientRoutes.js";

app.use("/api/v1", patient);
app.use("/api/v1", bill);
app.use("/api/v1", department);
app.use("/api/v1", doctor);
app.use("/api/v1", room);
app.use("/api/v1", labreport);
app.use("/api/v1", outpatient);
app.use("/api/v1", inpatient);
app.use("/api/v1", payment);

export default app;

app.use(ErrorMiddleware);
