import Biodata from "../models/Biodata.js";

// CREATE BIODATA
export const createBiodata = async (req, res) => {
  try {
    const userId = req.user._id;

    // check if biodata already exists
    const existing = await Biodata.findOne({ userId });

    if (existing) {
      return res.status(400).json({
        message: "Biodata already exists. Please update instead.",
      });
    }

    const biodata = await Biodata.create({
      userId,
      ...req.body,
    });

    res.status(201).json({
      message: "Biodata created successfully",
      biodata,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// GET MY BIODATA
export const getMyBiodata = async (req, res) => {
  try {
    const biodata = await Biodata.findOne({ userId: req.user._id });

    if (!biodata) {
      return res.status(404).json({ message: "No biodata found" });
    }

    res.json(biodata);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// UPDATE BIODATA
export const updateBiodata = async (req, res) => {
  try {
    const biodata = await Biodata.findById(req.params.id);

    if (!biodata) {
      return res.status(404).json({ message: "Biodata not found" });
    }

    // ensure user owns the biodata
    if (biodata.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const updated = await Biodata.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Biodata updated successfully",
      biodata: updated,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};