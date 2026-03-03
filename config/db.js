import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Mongo Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
