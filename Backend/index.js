import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./Db/connectDb.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
const app = express(); //1st step
dotenv.config(); //4th step
app.use(cors());
const PORT = process.env.PORT || 5000; // 3rd step
app.listen(PORT, () => {
  connectDB(); //5th step
  console.log("server is running on port", PORT);
}); //2nd step

app.use(express.json()); //7th step
app.use("/api/auth", authRoutes); //6th step
//bbKStWpHcXarryup
