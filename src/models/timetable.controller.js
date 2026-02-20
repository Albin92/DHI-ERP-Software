import Timetable from "../models/timetable.model.js";

export const uploadTimetable = async(req,res)=>{
  const t = await Timetable.create({semester:req.body.semester,file:req.file.path});
  res.json(t);
};

export const getTimetable = async(req,res)=>{
  const t = await Timetable.find();
  res.json(t);
};