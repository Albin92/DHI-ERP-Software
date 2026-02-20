import express from "express";
import { createNotification, getNotifications } from "../controllers/notification.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/",protect,createNotification);
router.get("/",protect,getNotifications);

export default router;