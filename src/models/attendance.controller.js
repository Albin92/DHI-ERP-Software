import Attendance from "../models/attendance.model.js";

/* MARK ATTENDANCE */
export const markAttendance = async (req, res) => {
  const data = await Attendance.create({
    student: req.body.student,
    subject: req.body.subject,
    date: new Date(),
    status: req.body.status,
    markedBy: req.user.id
  });

  res.json(data);
};

/* GET STUDENT ATTENDANCE */
export const getStudentAttendance = async (req, res) => {
  const data = await Attendance.find({ student: req.params.id });
  res.json(data);
};

/* ATTENDANCE SHORTAGE */
export const attendanceShortage = async (req, res) => {
  const shortage = await Attendance.aggregate([
    { $group: { _id: "$student", total: { $sum: 1 }, present: { $sum: { $cond: [{ $eq: ["$status","present"] },1,0] } } } },
    { $project: { percent: { $multiply: [{ $divide: ["$present","$total"] },100] } } },
    { $match: { percent: { $lt: 75 } } }
  ]);

  res.json(shortage);
};