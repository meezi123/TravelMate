import React from 'react'
import Navbar from '../Components/Navbar'
import { Search, MapPin, Star } from "lucide-react"
import Card from '../Components/Card'
import { motion } from 'framer-motion'
import Footer from '../Components/Footer';

function Tours() {
  const places = [
    {
      image: "https://source.unsplash.com/400x300/?lahore",
      name: "Lahore, Pakistan",
      rating: 4.5,
      description: "A historical city known for Badshahi Mosque and vibrant culture.",
      buttonText: "Explore Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?paris",
      name: "Paris, France",
      rating: 4.8,
      description: "Home to the Eiffel Tower and world-famous museums.",
      buttonText: "Book Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?newyork",
      name: "New York, USA",
      rating: 4.7,
      description: "The city that never sleeps with iconic skyscrapers and Broadway.",
      buttonText: "Visit Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?tokyo",
      name: "Tokyo, Japan",
      rating: 4.9,
      description: "A bustling metropolis blending tradition and technology.",
      buttonText: "Discover",
    },
    {
      image: "https://source.unsplash.com/400x300/?rome",
      name: "Rome, Italy",
      rating: 4.6,
      description: "The Eternal City with ancient ruins and rich history.",
      buttonText: "See More",
    },
    {
      image: "https://source.unsplash.com/400x300/?dubai",
      name: "Dubai, UAE",
      rating: 4.7,
      description: "Luxury shopping, ultramodern architecture, and a lively nightlife scene.",
      buttonText: "Explore Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?sydney",
      name: "Sydney, Australia",
      rating: 4.8,
      description: "Famous for its Opera House and beautiful beaches.",
      buttonText: "Book Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?cape-town",
      name: "Cape Town, South Africa",
      rating: 4.6,
      description: "Known for Table Mountain and breathtaking coastal views.",
      buttonText: "Visit Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?rio",
      name: "Rio de Janeiro, Brazil",
      rating: 4.7,
      description: "The city of Christ the Redeemer and vibrant carnival celebrations.",
      buttonText: "Discover",
    },
    {
      image: "https://source.unsplash.com/400x300/?london",
      name: "London, UK",
      rating: 4.9,
      description: "Home to Big Ben, Buckingham Palace, and British culture.",
      buttonText: "See More",
    },
    {
      image: "https://source.unsplash.com/400x300/?singapore",
      name: "Singapore",
      rating: 4.8,
      description: "A futuristic city with gardens, skyscrapers, and street food.",
      buttonText: "Explore Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?istanbul",
      name: "Istanbul, Turkey",
      rating: 4.6,
      description: "Where East meets West with stunning mosques and bazaars.",
      buttonText: "Book Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?bali",
      name: "Bali, Indonesia",
      rating: 4.9,
      description: "A tropical paradise with beaches, temples, and rice terraces.",
      buttonText: "Visit Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?moscow",
      name: "Moscow, Russia",
      rating: 4.5,
      description: "Famous for Red Square, Kremlin, and rich history.",
      buttonText: "Discover",
    },
    {
      image: "https://source.unsplash.com/400x300/?seoul",
      name: "Seoul, South Korea",
      rating: 4.7,
      description: "A blend of ancient palaces and high-tech modernity.",
      buttonText: "See More",
    },
    {
      image: "https://source.unsplash.com/400x300/?cairo",
      name: "Cairo, Egypt",
      rating: 4.6,
      description: "The city of the pyramids and the Sphinx.",
      buttonText: "Explore Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?barcelona",
      name: "Barcelona, Spain",
      rating: 4.8,
      description: "Known for Gaudí’s architecture and Mediterranean beaches.",
      buttonText: "Book Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?amsterdam",
      name: "Amsterdam, Netherlands",
      rating: 4.7,
      description: "The city of canals, museums, and vibrant nightlife.",
      buttonText: "Visit Now",
    },
    {
      image: "https://source.unsplash.com/400x300/?hongkong",
      name: "Hong Kong",
      rating: 4.8,
      description: "A global financial hub with a stunning skyline.",
      buttonText: "Discover",
    },
    {
      image: "https://source.unsplash.com/400x300/?venice",
      name: "Venice, Italy",
      rating: 4.9,
      description: "Famous for its canals, gondolas, and romantic atmosphere.",
      buttonText: "See More",
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Navbar />
      <main className='flex-1'>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            className="w-[100%]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center w-[100%]"
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
                <div>
                  <Search className="h-4 w-4 text-black/50" />
                </div>
                <div>
                  <input
                    type="search"
                    placeholder="Search destinations..."
                    className="w-full border-none outline-none"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section className='w-full px-[150px]'>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {places.map((place, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <Card
                  image={place.image}
                  name={place.name}
                  rating={place.rating}
                  description={place.description}
                  buttonText={place.buttonText}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Tours