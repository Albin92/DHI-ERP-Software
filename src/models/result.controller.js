import Result from "../models/result.model.js";

export const addResult = async(req,res)=>{
  const r = await Result.create(req.body);
  res.json(r);
};

export const getStudentResult = async(req,res)=>{
  const r = await Result.find({student:req.params.id});
  res.json(r);
};