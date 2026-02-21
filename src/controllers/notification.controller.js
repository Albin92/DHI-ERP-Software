import Notification from "../models/notification.model.js";

/* CREATE NOTIFICATION (Admin) */
export const createNotification = async (req, res) => {
  try {
    const notification = await Notification.create({
      title: req.body.title,
      message: req.body.message
    });

    res.json(notification);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

/* GET ALL NOTIFICATIONS */
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });

    res.json(notifications);
  } catch (err) {
    res.status(500).json(err.message);
  }
};