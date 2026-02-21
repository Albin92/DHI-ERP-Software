import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  applyLeave,
  approveLeave,
  getLeaves
} from "../controllers/leave.controller.js";

const router = express.Router();

/* FACULTY APPLY LEAVE */
router.post("/", protect, applyLeave);

/* ADMIN APPROVE LEAVE */
router.patch("/:id", protect, approveLeave);

/* GET ALL LEAVES */
router.get("/", protect, getLeaves);

export default router;