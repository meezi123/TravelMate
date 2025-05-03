import express from "express";
import cors    from "cors";
import dotenv  from "dotenv";
import mongoose from "mongoose";

import countryRoutes from "./routes/country.route.js";
import tourRoutes    from "./routes/tour.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/countries", countryRoutes);
app.use("/api/tours",      tourRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch(err => console.error(err));
