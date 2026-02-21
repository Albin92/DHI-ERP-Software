import express from "express";
import { protect, adminOnly } from "../middleware/auth.middleware.js";

import {
  getAllUsers,
  approveUser,
  deleteUser,
  getAttendanceShortage,
  getLeaveRequests,
  updateLeaveStatus
} from "../controllers/admin.controller.js";

const router = express.Router();

/* USERS */
router.get("/users", protect, adminOnly, getAllUsers);
router.put("/approve/:id", protect, adminOnly, approveUser);
router.delete("/user/:id", protect, adminOnly, deleteUser);

/* ATTENDANCE */
router.get("/attendance/shortage", protect, adminOnly, getAttendanceShortage);

/* LEAVE */
router.get("/leaves", protect, adminOnly, getLeaveRequests);
router.put("/leave/:id", protect, adminOnly, updateLeaveStatus);

export default router;