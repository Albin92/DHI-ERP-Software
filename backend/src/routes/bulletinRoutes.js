import express from "express";
import { getBulletin, postDoubt, getDoubtStatus } from "../controllers/bulletinController.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/alerts", getBulletin); //
router.post("/doubt", protect, postDoubt); //
router.get("/doubts-status", protect, getDoubtStatus); //

export default router;