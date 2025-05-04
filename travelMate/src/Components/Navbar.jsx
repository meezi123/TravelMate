import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useAuth } from '../Store/Auth'
const Navbar = () => {
  const { isLoggedIn, user } = useAuth();


  return (
    <header className=" fixed z-30 w-full flex items-center justify-between  py-4 px-[150px] bg-white/10 backdrop-blur-3xl border-b border-black/20">
      <div className="">
        {isLoggedIn ? (<h1 className='text-[#48e2d7] font-bold text-3xl '>Hello <span className='text-[15px] font-medium text-black'>{user.name}</span></h1>) : (<h1 className='text-[#48e2d7] font-bold text-3xl '>Travel Mate</h1>)}

      </div>



      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
        <Link to="/tour" className="text-sm font-medium hover:text-primary">Destinations</Link>
        <Link to="/bookings" className="text-sm font-medium hover:text-primary">Bookings</Link>
        <Link to="/about" className="text-sm font-medium hover:text-primary">About Us</Link>
        <Link to="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
      </nav>
      <div className='gap-x-2 flex'>
        {isLoggedIn ? (
          <Link to='/logout'>
            <Button bgColor='bg-[#48e2d7]' color='text-[#f0f8ff]'  >
              LogOut
            </Button>
          </Link>
        ) : (
          <>
            <Link to='/signin' className='cursor-pointer'>
              <Button bgColor='bg-[#48e2d7]' color='text-[#f0f8ff]'  >
                Sign In
              </Button>
            </Link>
            <Link to='/signup' className='cursor-pointer'>
              <Button bgColor='bg-[#48e2d7]' color='text-[#f0f8ff]'  >
                Sign Up
              </Button>
            </Link>
          </>)}




      </div>
    </header>

  )
}

export default Navbar