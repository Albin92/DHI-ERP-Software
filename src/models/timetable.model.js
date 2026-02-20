import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema({
  semester:Number,
  file:String
});

export default mongoose.model("Timetable",timetableSchema);