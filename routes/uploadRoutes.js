import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/photo", protect, upload.single("photo"), (req, res) => {
  res.json({
    message: "Photo uploaded successfully",
    imageUrl: req.file.path
  });
});

export default router;