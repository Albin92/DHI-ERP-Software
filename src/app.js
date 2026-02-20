import attendanceRoutes from "./routes/attendance.routes.js";
import leaveRoutes from "./routes/leave.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import timetableRoutes from "./routes/timetable.routes.js";
import resultRoutes from "./routes/result.routes.js";

app.use("/api/attendance",attendanceRoutes);
app.use("/api/leaves",leaveRoutes);
app.use("/api/notifications",notificationRoutes);
app.use("/api/timetable",timetableRoutes);
app.use("/api/results",resultRoutes);
export default app;