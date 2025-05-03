import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Card   from "../Components/Card";
import Footer from "../Components/Footer";

export default function Tours() {
  const [step, setStep]               = useState(1);
  const [countries, setCountries]     = useState([]);
  const [tours, setTours]             = useState([]);
  const [selectedCountry, setCountry] = useState(null);
  const [selectedTour, setTour]       = useState(null);

  // STEP 1: load countries
  useEffect(() => {
    if (step === 1) {
      fetch("http://localhost:5000/api/countries")
        .then((r) => r.json())
        .then(setCountries)
        .catch(console.error);
    }
  }, [step]);

  // STEP 2: load tours for the selected country
  useEffect(() => {
    if (step === 2 && selectedCountry) {
      fetch(
        `http://localhost:5000/api/tours/country/${selectedCountry._id}`
      )
        .then((r) => r.json())
        .then(setTours)
        .catch(console.error);
    }
  }, [step, selectedCountry]);

  // STEP 1: show country cards
  if (step === 1) {
    return (
      <>
        <Navbar />
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-6">
        {countries.map((c) => (
            <Card
              key={c._id}
              image={`/images/countries/${c._id}.jpg`} // new static path in React public/
              name={c.name}
              description=""
              rating={null}
              buttonText="View Tours"
              onClick={() => {
                setCountry(c);
                setStep(2);
              }}
            />
          ))}
        </div>
        <Footer />
      </>
    );
  }

  // STEP 2: show tour cards
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
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-6">
          {tours.map((t) => (
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
          ))}
        </div>
        <Footer />
      </>
    );
  }

  // STEP 3: booking details
  if (step === 3) {
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
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
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
          <button
            className="mt-6 px-6 py-3 bg-teal-500 text-white rounded"
            onClick={() => alert("Proceed to booking…")}
          >
            Proceed to Book
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return null;
}
