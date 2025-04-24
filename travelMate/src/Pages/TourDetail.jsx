import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import BookingForm from '../Components/BookingFrorm';
import { motion } from 'framer-motion';

function TourDetail() {
  const params = useParams();
  const tourTitle = params.title;

  return (
    <>
      <div className="w-full flex flex-col space-y-4">
        <Navbar />
        <main className="mt-16 pt-20 flex flex-col space-y-20 justify-center w-full items-center">
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold">Details of {tourTitle}</h1>
          </motion.div>

          {/* Parent Container */}
          <motion.div
            className="w-full h-screen flex justify-center px-20 space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Left Side - Gallery */}
            <motion.div
              className="w-[60%] h-[700px] grid grid-cols-4 grid-rows-3 gap-3 px-5"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                className='rounded-2xl col-span-4 row-span-2 bg-black/15'
                whileHover={{ scale: 1.01 }}
              />
              <motion.div
                className='rounded-2xl col-span-2 row-span-1 bg-black/25'
                whileHover={{ scale: 1.02 }}
              />
              <motion.div
                className='rounded-2xl col-span-2 row-span-1 bg-black/35'
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Right Side - Booking Form */}
            <motion.div
              className="w-[40%] h-[700px] flex justify-center items-center"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <BookingForm country='Pakistan' place={tourTitle} />
              </motion.div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </>
  )
}

export default TourDetail;