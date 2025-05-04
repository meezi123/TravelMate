import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth.route.js";
import countryRoutes from "./routes/country.route.js";
import tourRoutes from "./routes/tour.route.js";
import { connectDB } from "./Db/connectDb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/countries", countryRoutes);
app.use("/api/tours", tourRoutes);

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port", PORT);
});
