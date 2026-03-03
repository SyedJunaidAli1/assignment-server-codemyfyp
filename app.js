// app.js
import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

import authRoutes from "./routes/authRoutes.js";

app.use("/api/auth", authRoutes);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "ShaadiBio API running 🚀" });
});

export default app;
