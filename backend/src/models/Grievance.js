import mongoose from "mongoose";

const grievanceSchema = new mongoose.Schema({
  studentName: { type: String, required: true }, //
  subject: { type: String, required: true }, //
  question: { type: String, required: true }, //
  answer: { type: String, default: "Pending faculty response" }, //
  isPrivate: { type: Boolean, default: true }, // For the "introvert" feature
}, { timestamps: true });

export default mongoose.model("Grievance", grievanceSchema);