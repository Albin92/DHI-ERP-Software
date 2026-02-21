import express from "express";
import { uploadNote, getNotesBySem } from "../controllers/noteController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to get notes for a specific semester
router.get("/:sem", getNotesBySem);

// Only Faculty or Admin can upload notes
router.post("/upload", protect, restrictTo("admin", "faculty"), uploadNote);

export default router;