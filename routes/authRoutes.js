import express from "express";
const router = express.Router();
import { register, login } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

router.get("/me", protect, (req, res) => {
  res.json(req.user);
});
router.post("/register", register);
router.post("/login", login);

export default router;
