import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true }, //
  semester: { type: Number, required: true }, //
  fileUrl: { type: String, required: true }, //
  format: { type: String, enum: ["PDF", "PPT", "DOC"], required: true }, //
  uploadedBy: { type: String }, // Faculty Name
}, { timestamps: true });

export default mongoose.model("Note", noteSchema);