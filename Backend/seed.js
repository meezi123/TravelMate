// Backend/seed.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./Db/connectDb.js";
import Country from "./Models/country.model.js";
import Tour from "./Models/tour.model.js";

dotenv.config();

async function importData() {
  try {
    await connectDB();

    // 1) wipe existing
    await Country.deleteMany({});
    await Tour.deleteMany({});

    // 2) define 20 countries
    const countryList = [
      { name: "United States", code: "US" },
      { name: "Canada", code: "CA" },
      { name: "United Kingdom", code: "GB" },
      { name: "France", code: "FR" },
      { name: "Italy", code: "IT" },
      { name: "Spain", code: "ES" },
      { name: "Germany", code: "DE" },
      { name: "Australia", code: "AU" },
      { name: "Japan", code: "JP" },
      { name: "China", code: "CN" },
      { name: "India", code: "IN" },
      { name: "Brazil", code: "BR" },
      { name: "Mexico", code: "MX" },
      { name: "South Africa", code: "ZA" },
      { name: "Egypt", code: "EG" },
      { name: "Thailand", code: "TH" },
      { name: "Russia", code: "RU" },
      { name: "Argentina", code: "AR" },
      { name: "New Zealand", code: "NZ" },
      { name: "Turkey", code: "TR" },
    ];

    // 3) top-5 attractions per country
    const attractions = {
      US: [
        "Statue of Liberty",
        "Grand Canyon",
        "Yosemite National Park",
        "Golden Gate Bridge",
        "Times Square",
      ],
      CA: [
        "Banff National Park",
        "CN Tower",
        "Old Quebec",
        "Niagara Falls",
        "Stanley Park",
      ],
      GB: [
        "London Eye",
        "Tower of London",
        "Stonehenge",
        "Edinburgh Castle",
        "Big Ben",
      ],
      FR: [
        "Eiffel Tower",
        "Louvre Museum",
        "Notre-Dame Cathedral",
        "Palace of Versailles",
        "Mont Saint-Michel",
      ],
      IT: [
        "Colosseum",
        "Venice Canals",
        "Leaning Tower of Pisa",
        "Vatican Museums",
        "Amalfi Coast",
      ],
      ES: [
        "Sagrada Família",
        "Alhambra",
        "Park Güell",
        "Plaza Mayor",
        "La Rambla",
      ],
      DE: [
        "Brandenburg Gate",
        "Neuschwanstein Castle",
        "Berlin Wall",
        "Oktoberfest",
        "Rhine Valley",
      ],
      AU: [
        "Sydney Opera House",
        "Great Barrier Reef",
        "Uluru",
        "Bondi Beach",
        "Daintree Rainforest",
      ],
      JP: [
        "Mount Fuji",
        "Fushimi Inari Shrine",
        "Tokyo Tower",
        "Arashiyama Bamboo Grove",
        "Itsukushima Shrine",
      ],
      CN: [
        "Great Wall of China",
        "Forbidden City",
        "Terracotta Army",
        "Li River",
        "Potala Palace",
      ],
      IN: [
        "Taj Mahal",
        "Red Fort",
        "Hawa Mahal",
        "Varanasi Ghats",
        "Kerala Backwaters",
      ],
      BR: [
        "Christ the Redeemer",
        "Iguazu Falls",
        "Copacabana Beach",
        "Amazon Rainforest",
        "Sugarloaf Mountain",
      ],
      MX: [
        "Chichen Itza",
        "Teotihuacan",
        "Cancun Beaches",
        "Cenote Ik Kil",
        "Frida Kahlo Museum",
      ],
      ZA: [
        "Kruger National Park",
        "Table Mountain",
        "Robben Island",
        "Blyde River Canyon",
        "Cape Point",
      ],
      EG: [
        "Pyramids of Giza",
        "Valley of the Kings",
        "Egyptian Museum",
        "Karnak Temple",
        "Nile River Cruise",
      ],
      TH: [
        "Grand Palace Bangkok",
        "Phi Phi Islands",
        "Ayutthaya Temples",
        "Railay Beach",
        "Floating Market",
      ],
      RU: [
        "Red Square",
        "Hermitage Museum",
        "Saint Basil's Cathedral",
        "Lake Baikal",
        "Kremlin",
      ],
      AR: [
        "Iguazu Falls",
        "Perito Moreno Glacier",
        "La Boca",
        "Teatro Colón",
        "Mendoza Vineyards",
      ],
      NZ: [
        "Milford Sound",
        "Waitomo Glowworm Caves",
        "Tongariro Alpine Crossing",
        "Bay of Islands",
        "Rotorua Geothermal Park",
      ],
      TR: ["Hagia Sophia", "Cappadocia", "Ephesus", "Pamukkale", "Blue Mosque"],
    };

    // 4) create documents
    for (const c of countryList) {
      const countryDoc = await Country.create({ name: c.name, code: c.code });
      const tops = attractions[c.code] || [];

      for (let i = 0; i < 5; i++) {
        const spotName = tops[i] || `${c.name} Spot ${i + 1}`;
        await Tour.create({
          country: countryDoc._id,
          name: spotName,
          description: `Experience the best of ${c.name} at ${spotName}.`,
          // random Unsplash image by keyword
          imageUrl: `https://source.unsplash.com/300x200/?${encodeURIComponent(
            spotName
          )}`,
          pricePerPerson: Math.floor(Math.random() * 400) + 100,
        });
      }
    }

    console.log("✅ Seed complete: 20 countries × 5 tours each");
    process.exit();
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
}

importData();
