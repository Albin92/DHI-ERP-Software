import express from "express";
import { createNotice, getNotices } from "../controllers/noticeController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all notices for the Bulletin
router.get("/", getNotices);

// Only Admin/Faculty can post new alerts
router.post("/", protect, restrictTo("admin", "faculty"), createNotice);

export default router;