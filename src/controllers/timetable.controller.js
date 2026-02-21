import Timetable from "../models/timetable.model.js";

/* UPLOAD TIMETABLE */
export const uploadTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.create({
      semester: req.body.semester,
      file: req.file.path
    });

    res.json(timetable);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

/* GET TIMETABLE */
export const getTimetable = async (req, res) => {
  try {
    const data = await Timetable.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};