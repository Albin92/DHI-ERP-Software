import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "faculty", "student"],
    default: "student"
  },
  usn: String,
  semester: Number
});

export default mongoose.model("User", userSchema);