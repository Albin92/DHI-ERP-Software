const notes = [
  {
    title: "Unit 1: Data Structures",
    subject: "Computer Science",
    semester: 4,
    fileUrl: "http://localhost:5000/uploads/ds_unit1.pdf",
    format: "PDF",
    uploadedBy: "Prof. Najeeb"
  }
];

export const uploadNote = async (req, res) => {
  try {
    const { title, subject, semester, format, fileUrl } = req.body;

    if (!title || !subject || !semester || !format) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newNote = { title, subject, semester, format, fileUrl, uploadedBy: "Faculty User" };
    notes.push(newNote);

    res.status(201).json({ message: "Note uploaded successfully!", note: newNote });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotesBySem = async (req, res) => {
  const { sem } = req.params;
  // Filters notes based on the student's current semester
  const filteredNotes = notes.filter(n => n.semester == sem);
  res.json(filteredNotes);
};