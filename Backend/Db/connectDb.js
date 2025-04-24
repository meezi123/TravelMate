import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connected.connection.host}`);
  } catch (error) {
    console.log("error in connecting MongoDB ", error);
    process.exit(1);
  }
};
