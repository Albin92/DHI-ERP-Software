import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  reason: String,
  from: Date,
  to: Date,
  status: { type: String, default: "pending" }
});

export default mongoose.model("Leave", leaveSchema);