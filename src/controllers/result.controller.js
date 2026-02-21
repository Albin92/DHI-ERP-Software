import Result from "../models/result.model.js";

/* ADD RESULT (Teacher/Admin) */
export const addResult = async (req, res) => {
  try {
    const result = await Result.create({
      student: req.body.student,
      subject: req.body.subject,
      internal: req.body.internal,
      external: req.body.external
    });

    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

/* GET RESULT FOR A STUDENT */
export const getStudentResult = async (req, res) => {
  try {
    const results = await Result.find({ student: req.params.id }).populate(
      "student",
      "name email"
    );

    res.json(results);
  } catch (err) {
    res.status(500).json(err.message);
  }
};