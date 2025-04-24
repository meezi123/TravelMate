import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const Navbar = ({ handleAuthentication }) => {
  return (
    <header className=" fixed z-30 w-full flex items-center justify-between  py-4 px-[150px] bg-white/10 backdrop-blur-3xl border-b border-black/20">
      <div className="">
        <h1 className='text-black font-bold text-3xl '>Travel Mate</h1>
      </div>



      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
        <Link to="tour" className="text-sm font-medium hover:text-primary">Destinations</Link>
        <Link to="explore" className="text-sm font-medium hover:text-primary">Explore</Link>
        <Link to="about" className="text-sm font-medium hover:text-primary">About Us</Link>
        <Link to="contact" className="text-sm font-medium hover:text-primary">Contact</Link>
      </nav>
      <div className='gap-x-2 flex'>

        <Button bgColor='bg-[#48e2d7]' color='text-[#f0f8ff]'  >
          LogOut
        </Button>


      </div>
    </header>

  )
}

export default Navbar