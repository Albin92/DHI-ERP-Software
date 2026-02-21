import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import attendanceRoutes from "./routes/attendance.routes.js";
import leaveRoutes from "./routes/leave.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import timetableRoutes from "./routes/timetable.routes.js";
import resultRoutes from "./routes/result.routes.js";
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";


const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/attendance",attendanceRoutes);
app.use("/api/leaves",leaveRoutes);
app.use("/api/notifications",notificationRoutes);
app.use("/api/timetable",timetableRoutes);
app.use("/api/results",resultRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Backend running");
});
export default app;