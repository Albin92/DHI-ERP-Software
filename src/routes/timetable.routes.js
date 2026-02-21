import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
import {
  uploadTimetable,
  getTimetable
} from "../controllers/timetable.controller.js";

const router = express.Router();

/* UPLOAD TIMETABLE (Admin) */
router.post("/", protect, upload.single("file"), uploadTimetable);

/* GET TIMETABLE */
router.get("/", protect, getTimetable);

export default router;