import express from "express";
import { getAllCountries } from "../Controllers/country.controller.js";

const router = express.Router();
router.get("/", getAllCountries);
export default router;
