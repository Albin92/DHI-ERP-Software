import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

/* CLOUDINARY STORAGE CONFIG */
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "resourcehub",
    resource_type: "auto"   // allows pdf, doc, image etc
  }
});

/* MULTER INSTANCE */
export const upload = multer({ storage });