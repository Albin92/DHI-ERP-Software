import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  student:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
  subject:String,
  internal:Number,
  external:Number
});

export default mongoose.model("Result",resultSchema);