import dotenv from "dotenv";
import express from "express";
<<<<<<< Updated upstream
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
=======
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import countryRoutes from "./routes/country.route.js";
import tourRoutes from "./routes/tour.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/countries", countryRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.error(err));
>>>>>>> Stashed changes
