// app.js
import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

import authRoutes from "./routes/authRoutes.js";
import biodataRoutes from "./routes/biodataRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

app.use("/api/upload", uploadRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/biodata", biodataRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("ShaadiBio API running 🚀");
});

export default app;
