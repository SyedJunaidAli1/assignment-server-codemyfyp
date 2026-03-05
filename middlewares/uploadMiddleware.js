import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "shaadibio_profiles",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
});

const upload = multer({ storage });

export default upload;
