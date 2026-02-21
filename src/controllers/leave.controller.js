import Leave from "../models/leave.model.js";

/* APPLY LEAVE (Faculty) */
export const applyLeave = async (req, res) => {
  try {
    const leave = await Leave.create({
      faculty: req.user._id,   // logged-in faculty
      reason: req.body.reason,
      from: req.body.from,
      to: req.body.to
    });

    res.json(leave);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

/* APPROVE LEAVE (Admin) */
export const approveLeave = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );

    res.json(leave);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

/* GET ALL LEAVES (Admin dashboard) */
export const getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate("faculty", "name email");

    res.json(leaves);
  } catch (err) {
    res.status(500).json(err.message);
  }
};