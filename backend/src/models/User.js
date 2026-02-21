import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["admin", "faculty", "student"], 
    required: true 
  },
  
  // Student Specific Requirements (Integrated USN/Sem)
  usn: { type: String, unique: true, sparse: true }, //
  semester: { type: Number }, //
  dob: { type: Date }, //
  phoneNo: { type: String }, //
  parentDetails: {
    name: String,
    phoneNo: String
  }, //

  // Faculty Specific Requirements
  facultyId: { type: String, unique: true, sparse: true }, //

  // The "Gatekeeper" system status
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending" //
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);