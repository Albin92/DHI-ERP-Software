import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  type: { 
    type: String, 
    enum: ["general", "exam", "holiday", "event"], 
    default: "general" 
  },
  isImportant: { type: Boolean, default: false }, //
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Notice", noticeSchema);