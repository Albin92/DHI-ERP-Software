let grievances = []; // Mock storage for doubts

export const getBulletin = async (req, res) => {
  // Mock notices from earlier, now with Badge logic
  const notices = [
    { title: "Exam Fee Deadline", isImportant: true, createdAt: new Date() },
    { title: "Holiday Notice", isImportant: false, createdAt: new Date(Date.now() - 86400000) }
  ];

  const noticesWithBadges = notices.map(n => ({
    ...n,
    showBadge: (new Date() - n.createdAt) < 24 * 60 * 60 * 1000 // New if < 24h
  }));

  res.json(noticesWithBadges);
};

export const postDoubt = async (req, res) => {
  const { subject, question } = req.body;
  const newDoubt = { 
    id: grievances.length + 1,
    studentName: "Student User", 
    subject, 
    question, 
    answer: "Pending" 
  };
  grievances.push(newDoubt);
  res.status(201).json({ message: "Doubt sent to faculty", doubt: newDoubt });
};

export const getDoubtStatus = async (req, res) => {
  res.json(grievances); // For the Grievances Portal
};