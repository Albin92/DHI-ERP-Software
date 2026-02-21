import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only" });

  next();
};

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json("Not authorized");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json("Invalid token");
  }
};