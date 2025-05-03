import React, { useState, useEffect } from "react";
import { useParams }            from "react-router-dom";
import Navbar                   from "../Components/Navbar";
import TourCard                 from "../Components/TourCard";
import imageUrl                 from "../assets/lhr.jpg";
import { motion }               from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  zoomIn,
  textVariant,
} from "../utils/motion";

export default function DestinationDetail() {
  const { country } = useParams();              // must match your <Route path="/tour/:country" />
  const [tours, setTours]     = useState(null); // null = not loaded yet
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!country) return;

    console.log("▶️ Fetching tours for country:", country);
    fetch(`http://localhost:5000/api/tours/country/${encodeURIComponent(country)}`)
      .then(async (res) => {
        console.log("Raw response:", res.status, res.headers.get("content-type"));
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status}: ${text}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("✅ Fetched tours:", data);
        if (!Array.isArray(data)) {
          throw new Error("Response is not an array");
        }
        setTours(data);
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err);
        setError(err);
        setTours([]); // prevent infinite retry
      });
  }, [country]);

  // Loading state
  if (tours === null && !error) {
    return (
      <>
        <Navbar />
        <p className="p-8 text-center">Loading tours for {country}…</p>
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <Navbar />
        <p className="p-8 text-center text-red-600">
          Error loading tours: {error.message}
        </p>
      </>
    );
  }

  // No tours found
  if (Array.isArray(tours) && tours.length === 0) {
    return (
      <>
        <Navbar />
        <p className="p-8 text-center">
          No tours found for {country}.
        </p>
      </>
    );
  }

  // Render normally
  return (
    <>
      <Navbar />
      <motion.div
        className="w-full h-[650px] relative overflow-hidden"
        initial="hidden"
        animate="show"
      >
        <motion.img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover"
          variants={zoomIn(0.1, 1)}
        />
        <motion.div
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
          variants={textVariant(1.1)}
        >
          <motion.h1
            className="text-6xl font-bold text-white"
            variants={textVariant(1.2)}
          >
            Discover {country}
          </motion.h1>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-5 px-8 w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div className="flex flex-wrap justify-between">
          {tours.map((tour, i) => (
            <motion.div
              key={tour._id}
              className="w-[48%] mb-6"
              variants={fadeIn("up", "spring", i * 0.1, 0.75)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <TourCard
                image={`/images/tours/${tour._id}.jpg`}
                onError={e => { e.target.onerror = null; e.target.src = tour.imageUrl }}
                tags={[]} // add if you seed tags
                title={tour.name}
                rating={`${tour.rating}`}
                location={country}
                duration={tour.duration || ""}
                groupSize={tour.groupSize || ""}
                description={tour.description}
                price={tour.pricePerPerson}
                n={country}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
