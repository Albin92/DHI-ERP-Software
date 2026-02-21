import express from "express";
import cors from "cors";

// Importing all Roadmap Modules 
import authRoutes from "./routes/auth.routes.js";
import noticeRoutes from "./routes/noticeRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import attendanceRoutes from "./routes/attendance.routes.js";
import bulletinRoutes from "./routes/bulletinRoutes.js";
import adminRoutes from "./routes/admin.routes.js"; // The Management Module [cite: 8]

const app = express();

app.use(cors());
app.use(express.json());

// Connecting Endpoints to the Frontend [cite: 41, 43]
app.use("/api/auth", authRoutes);           // Login & USN Registration
app.use("/api/notices", noticeRoutes);       // Push Notifications
app.use("/api/notes", noteRoutes);           // PDF/PPT Notes Manager
app.use("/api/attendance", attendanceRoutes); // Attendance & Leave Pager
app.use("/api/bulletin", bulletinRoutes);     // Grievances & New Badges
app.use("/api/admin", adminRoutes);           // Student/Teacher DB & Approvals

export default app;