// Local mock data for hackathon testing
const attendanceRecords = [
  { usn: "BCA401", subject: "Programming", attended: 40, total: 50 }
];

const leaveRequests = [
  { usn: "BCA401", reason: "Medical", status: "pending", days: 2 }
];

export const calculateAttendance = async (req, res) => {
  const { usn } = req.params;
  const record = attendanceRecords.find(r => r.usn === usn);
  
  if (!record) return res.status(404).json({ message: "No record found" });

  // Attendance Calculator logic
  const percentage = (record.attended / record.total) * 100;
  const shortage = percentage < 75; // Requirement

  res.json({ ...record, percentage: percentage.toFixed(2), shortage });
};

export const applyLeave = async (req, res) => {
  const { reason, days } = req.body;
  const newRequest = { usn: "BCA401", reason, days, status: "pending" };
  leaveRequests.push(newRequest);
  res.status(201).json({ message: "Leave applied successfully", request: newRequest });
};

export const manageLeave = async (req, res) => {
  // Faculty/Admin can approve or reject
  const { usn, status } = req.body; // status: "approved" or "rejected"
  const request = leaveRequests.find(r => r.usn === usn);
  if (request) request.status = status;
  res.json({ message: `Leave ${status}`, request });
};