import express from "express";
import {
  allRoom,
  createRoom,
  editRoom,
  editRoomType,
  roomType,
} from "../controllers/roomControllers.js";
import { isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.route("/room/type").post(isAdmin, roomType);
router.route("/room/type/:id").put(isAdmin, editRoomType);
router.route("/createroom").post(isAdmin, createRoom);
router.route("/createroom/:id").post(isAdmin, editRoom);
router.route("/room").get(isAdmin, allRoom);
export default router;
