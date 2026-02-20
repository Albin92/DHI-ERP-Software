import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  title:String,
  message:String,
  createdAt:{type:Date,default:Date.now}
});

export default mongoose.model("Notification",notificationSchema);