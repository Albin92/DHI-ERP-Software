import express from "express";
import { calculateAttendance, applyLeave, manageLeave } from "../controllers/attendanceController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router();

// Students check their own attendance
router.get("/status/:usn", calculateAttendance);

// Students apply for leave
router.post("/leave/apply", protect, applyLeave);

// Faculty/Admin approve/reject leave
router.patch("/leave/manage", protect, restrictTo("admin", "faculty"), manageLeave);

export default router;