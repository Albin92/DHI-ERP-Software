import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  subject: String,
  date: Date,
  status: { type: String, enum: ["present", "absent"] },
  markedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Attendance", attendanceSchema);