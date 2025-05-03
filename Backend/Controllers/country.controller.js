import Country from "../Models/country.model.js";

export const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find().select("name code");
    res.json(countries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
