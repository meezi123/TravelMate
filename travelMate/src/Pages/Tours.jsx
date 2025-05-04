import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Tours() {
  const [step, setStep] = useState(1);
  const [countries, setCountries] = useState([]);
  const [tours, setTours] = useState([]);
  const [selectedCountry, setCountry] = useState(null);
  const [selectedTour, setTour] = useState(null);

  useEffect(() => {
    if (step === 1) {
      fetch("http://localhost:5000/api/countries")
        .then((r) => r.json())
        .then(setCountries)
        .catch(console.error);
    }
  }, [step]);

  useEffect(() => {
    if (step === 2 && selectedCountry) {
      fetch(`http://localhost:5000/api/tours/country/${selectedCountry._id}`)
        .then((r) => r.json())
        .then(setTours)
        .catch(console.error);
    }
  }, [step, selectedCountry]);

  const fadeUpContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (step === 1) {
    return (
      <>
        <Navbar />
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <motion.div className="w-full" initial="hidden" animate="visible" variants={fadeIn}>
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center w-full"
                variants={slideUp}
              >
                <div className="space-y-4">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    Discover Popular Destinations
                  </motion.h1>
                  <motion.p
                    className="max-w-[700px] text-muted-foreground md:text-xl"
                    whileHover={{ scale: 1.01 }}
                  >
                    Explore the world's most breathtaking locations and plan your next adventure.
                  </motion.p>
                </div>

                <motion.div
                  className="relative flex items-center justify-between space-x-2 pr-10 pl-2 py-1.5 border-1 border-black/50 rounded-[15px]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Search className="h-4 w-4 text-black/50" />
                  <input
                    type="search"
                    placeholder="Search destinations..."
                    className="w-full border-none outline-none"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </section>

          <section className="w-full px-[150px]">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={fadeUpContainer}
              initial="hidden"
              animate="show"
            >
              {countries.map((c, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpItem}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Card
                    key={c._id}
                    image={`/images/countries/${c._id}.jpg`}
                    name={c.name}
                    description=""
                    rating={null}
                    buttonText="View Tours"
                    onClick={() => {
                      setCountry(c);
                      setStep(2);
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Navbar />
        <button
          className="m-4 px-4 py-2 border rounded"
          onClick={() => {
            setStep(1);
            setCountry(null);
          }}
        >
          ← Back to Countries
        </button>
        <motion.div
          className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-6"
          variants={fadeUpContainer}
          initial="hidden"
          animate="show"
        >
          {tours.map((t, index) => (
            <motion.div key={index} variants={fadeUpItem} whileHover={{ scale: 1.02 }}>
              <Card
                key={t._id}
                image={`/images/tours/${t._id}.jpg`}
                name={t.name}
                description={t.description}
                rating={t.rating}
                buttonText={`Book – $${t.pricePerPerson}`}
                onClick={() => {
                  setTour(t);
                  setStep(3);
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        <Footer />
      </>
    );
  }

  if (step === 3 && selectedTour) {
    return (
      <>
        <Navbar />
        <button
          className="m-4 px-4 py-2 border rounded"
          onClick={() => {
            setStep(2);
            setTour(null);
          }}
        >
          ← Back to Tours
        </button>
        <motion.div
          className="max-w-xl mx-auto p-6 bg-white rounded shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={selectedTour.imageUrl}
            className="w-full h-64 object-cover rounded"
            alt={selectedTour.name}
          />
          <h2 className="mt-4 text-2xl font-bold">{selectedTour.name}</h2>
          <p className="mt-2">{selectedTour.description}</p>
          <p className="mt-2 font-semibold">
            Price: ${selectedTour.pricePerPerson} per person
          </p>
          <p className="mt-2">Rating: ⭐ {selectedTour.rating}</p>
          <motion.button
            className="mt-6 px-6 py-3 bg-teal-500 text-white rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Proceed to booking…")}
          >
            Proceed to Book
          </motion.button>
        </motion.div>
        <Footer />
      </>
    );
  }

  return null;
}
