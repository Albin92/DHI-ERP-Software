import Leave from "../models/leave.model.js";

export const applyLeave = async (req,res)=>{
  const leave = await Leave.create({...req.body, faculty:req.user.id});
  res.json(leave);
};

export const approveLeave = async (req,res)=>{
  const leave = await Leave.findByIdAndUpdate(req.params.id,{status:"approved"});
  res.json(leave);
};

export const getLeaves = async (req,res)=>{
  const leaves = await Leave.find();
  res.json(leaves);
};