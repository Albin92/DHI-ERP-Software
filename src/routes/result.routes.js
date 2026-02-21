import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  addResult,
  getStudentResult
} from "../controllers/result.controller.js";

const router = express.Router();

/* ADD RESULT (Teacher/Admin) */
router.post("/", protect, addResult);

/* GET RESULT FOR A STUDENT */
router.get("/student/:id", protect, getStudentResult);

export default router;