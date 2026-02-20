import express from "express";
import { markAttendance, getStudentAttendance, attendanceShortage } from "../controllers/attendance.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, markAttendance);
router.get("/student/:id", protect, getStudentAttendance);
router.get("/shortage", protect, attendanceShortage);

export default router;