// Backend/Controllers/tour.controller.js
import mongoose from "mongoose";
import Tour from "../Models/tour.model.js";
import Country from "../Models/country.model.js";

export const getToursByCountry = async (req, res) => {
  try {
    const raw = decodeURIComponent(req.params.country);
    let country = null;

    // 1) if it looks like an ObjectId, try findById
    if (mongoose.Types.ObjectId.isValid(raw)) {
      country = await Country.findById(raw);
    }
    // 2) otherwise, find by name
    if (!country) {
      country = await Country.findOne({ name: raw });
    }
    // 3) Not found?
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    // 4) Now use the _id to fetch tours
    const tours = await Tour.find({ country: country._id });
    return res.json(tours);
  } catch (err) {
    console.error("getToursByCountry error:", err);
    return res.status(500).json({ message: err.message });
  }
};
