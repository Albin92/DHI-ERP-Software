import User from "../models/user.model.js";
import Attendance from "../models/attendance.model.js";
import Leave from "../models/leave.model.js";

/* GET ALL USERS */
export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

/* APPROVE USER */
export const approveUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { approved: true },
    { new: true }
  );
  res.json(user);
};

/* DELETE USER */
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

/* ATTENDANCE SHORTAGE */
export const getAttendanceShortage = async (req, res) => {
  const records = await Attendance.find().populate("student");

  const shortage = records.filter(r => r.percentage < 75);

  res.json(shortage);
};

/* LEAVE REQUESTS */
export const getLeaveRequests = async (req, res) => {
  const leaves = await Leave.find().populate("user");
  res.json(leaves);
};

/* UPDATE LEAVE STATUS */
export const updateLeaveStatus = async (req, res) => {
  const leave = await Leave.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(leave);
};