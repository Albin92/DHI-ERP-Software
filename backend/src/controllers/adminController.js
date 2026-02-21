// This simulates the 'admn db' mentioned in your PDF [cite: 8]
let allUsers = [
  { 
    name: "Abdul Basith", 
    usn: "BCA401", 
    role: "student", 
    status: "pending", 
    semester: 4,
    parentDetails: { name: "Parent Name", phone: "9000000000" } 
  }
];

export const getAllStudents = async (req, res) => {
  // Filters the DB to show only students for the Admin view [cite: 11, 29]
  const students = allUsers.filter(u => u.role === "student");
  res.json(students);
};

export const approveUser = async (req, res) => {
  const { usn } = req.params;
  const user = allUsers.find(u => u.usn === usn);

  if (!user) return res.status(404).json({ message: "User not found" });

  // The 'Gatekeeper' action: Approving the student 
  user.status = "approved";
  res.json({ message: `User ${user.name} has been approved!`, user });
};

export const getFacultyDB = async (req, res) => {
  // Returns the teacher and staff database [cite: 18]
  const faculty = allUsers.filter(u => u.role === "faculty");
  res.json(faculty);
};