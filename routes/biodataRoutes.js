import express from "express";
import {
  createBiodata,
  getMyBiodata,
  updateBiodata,
} from "../controllers/biodataController.js";

import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createBiodata);
router.get("/me", protect, getMyBiodata);
router.put("/:id", protect, updateBiodata);

export default router;
