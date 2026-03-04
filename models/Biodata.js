import mongoose from "mongoose";

const biodataSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    personalDetails: {
      fullName: String,
      dob: Date,
      age: Number,
      height: String,
      religion: String,
      caste: String,
      location: String,
      contact: String,
    },

    familyDetails: {
      fatherName: String,
      fatherOccupation: String,
      motherName: String,
      siblings: String,
      familyType: String,
    },

    educationProfession: {
      highestQualification: String,
      college: String,
      profession: String,
      company: String,
      income: String,
    },

    horoscope: {
      rashi: String,
      nakshatra: String,
      manglik: Boolean,
    },

    profilePhoto: String,

    template: {
      type: String,
      default: "classic",
    },

    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Biodata", biodataSchema);