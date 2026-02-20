export const createUpload = async (req, res) => {
  const status = req.user.role === "faculty" ? "approved" : "pending";

  const upload = await Upload.create({
    title: req.body.title,
    fileUrl: req.file.path,   // Cloudinary URL
    semester: req.body.semester,
    subjectCode: req.body.subjectCode,
    unit: req.body.unit,
    uploadedBy: req.user.id,
    status
  });

  res.json(upload);
};