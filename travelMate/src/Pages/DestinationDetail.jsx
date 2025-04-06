import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import TourCard from '../Components/TourCard';
import imageUrl from '../assets/lhr.jpg'
import img from '../assets/swissa.jpg'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn, slideIn, textVariant } from '../utils/motion';

function DestinationDetail() {
  const params = useParams();
  const name = params.name
  const tours = [
    {
      image: img,
      tags: ["Bestseller", "Guided Tour"],
      title: "Majestic Swiss Alps Adventure",
      rating: "4.9 (128)",
      location: "Switzerland",
      duration: "7 days",
      groupSize: 12,
      description: "Experience the beauty and culture of Switzerland with our expert guides.",
      price: 1299,
    },
    {
      image: "https://source.unsplash.com/400x300/?beach",
      tags: ["Luxury", "All-Inclusive"],
      title: "Tropical Maldives Escape",
      rating: "4.8 (98)",
      location: "Maldives",
      duration: "5 days",
      groupSize: 8,
      description: "Relax on pristine beaches and enjoy luxury stays in the Maldives.",
      price: 1599,
    },
    {
      image: "https://source.unsplash.com/400x300/?desert",
      tags: ["Adventure", "Cultural"],
      title: "Sahara Desert Expedition",
      rating: "4.7 (85)",
      location: "Morocco",
      duration: "6 days",
      groupSize: 10,
      description: "Discover the vast Sahara desert and immerse yourself in Moroccan culture.",
      price: 999,
    },
    {
      image: "https://source.unsplash.com/400x300/?cityscape",
      tags: ["City Tour", "Food & Culture"],
      title: "Tokyo Explorer Tour",
      rating: "4.9 (140)",
      location: "Japan",
      duration: "4 days",
      groupSize: 15,
      description: "Explore Tokyo’s vibrant streets, food, and culture with expert guides.",
      price: 1399,
    },
    {
      image: "https://source.unsplash.com/400x300/?forest",
      tags: ["Wildlife", "Nature"],
      title: "Amazon Rainforest Adventure",
      rating: "4.8 (110)",
      location: "Brazil",
      duration: "8 days",
      groupSize: 10,
      description: "Journey through the Amazon rainforest and experience wildlife like never before.",
      price: 1499,
    }
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>
      <main className='mt-0.1 flex flex-col justify-center items-center w-full'>
        {/* Hero Image Section with Parallax Effect */}
        <motion.div
          className="w-full h-[650px]  relative overflow-hidden"
          initial="hidden"
          animate="show"
        >
          <motion.img
            src={imageUrl}
            alt="Background"
            className="w-full h-full object-cover"
            variants={zoomIn(0.1, 1)}
            initial="hidden"
            animate="show"
          />
          <motion.div
            className="absolute inset-0 bg-black/30 flex items-center justify-center"
            variants={textVariant(1.1)}
          >
            <motion.h1
              className="text-6xl font-bold text-white"
              variants={textVariant(1.2)}
            >
              Discover {name}
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Tours Grid with Staggered Animation */}
        <motion.div
          className="mt-5 px-8 w-full"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div className="flex flex-wrap justify-between">
            {tours.map((tour, index) => (
              <motion.div
                key={index}
                className="w-[48%] mb-6"
                variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <TourCard {...tour} n={name} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>



      </main>
    </>
  )
}

export default DestinationDetail;