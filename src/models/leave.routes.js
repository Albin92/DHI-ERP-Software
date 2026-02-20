import express from "express";
import { applyLeave, approveLeave, getLeaves } from "../controllers/leave.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/",protect,applyLeave);
router.patch("/:id",protect,approveLeave);
router.get("/",protect,getLeaves);

export default router;