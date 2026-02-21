import express from "express";
import { getAllStudents, approveUser, getFacultyDB } from "../controllers/adminController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router();

// Only Admins can access these management tools [cite: 4, 8]
router.get("/students", protect, restrictTo("admin"), getAllStudents);
router.get("/faculty", protect, restrictTo("admin"), getFacultyDB);
router.patch("/approve/:usn", protect, restrictTo("admin"), approveUser);

export default router;