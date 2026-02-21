// Local temporary storage for the hackathon bulletin
const notices = [
  {
    title: "Welcome to DHI Portal",
    content: "System is live for the hackathon!",
    isImportant: true,
    isNew: true,
    createdAt: new Date()
  }
];

export const createNotice = async (req, res) => {
  try {
    const { title, content, isImportant, type } = req.body;
    
    // Validates that we actually received data from Postman
    if (!title || !content) {
      return res.status(400).json({ message: "Title and Content are required" });
    }

    const newNotice = { 
      title, 
      content, 
      isImportant: isImportant || false, 
      type: type || "general",
      isNew: true, 
      createdAt: new Date() 
    };

    notices.push(newNotice);
    
    // Returns the full notice object so you see it in Postman
    res.status(201).json({ message: "Notice posted successfully!", notice: newNotice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotices = async (req, res) => {
  // Logic to return the bulletin for the student dashboard
  res.json(notices);
};