import Notification from "../models/notification.model.js";

export const createNotification = async(req,res)=>{
  const n = await Notification.create(req.body);
  res.json(n);
};

export const getNotifications = async(req,res)=>{
  const n = await Notification.find().sort({createdAt:-1});
  res.json(n);
};