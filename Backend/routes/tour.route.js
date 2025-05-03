import express from "express";
import { getToursByCountry } from "../Controllers/tour.controller.js";
const router = express.Router();
router.get("/country/:country", getToursByCountry);

export default router;
