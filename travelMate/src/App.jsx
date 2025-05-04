import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Tours from './Pages/Tours'
import SignUp from './Pages/SignUp'

import DestinationDetail from './Pages/DestinationDetail'
import TourDetail from './Pages/TourDetail'
import Logout from './Pages/Logout'
import ReceiptDetail from './Pages/ReceiptDetail'
import SignIn from './Pages/SignIn'
import AboutUs from './Pages/AboutUs'



const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tour' element={<Tours />} />

      <Route path='/tour/:country' element={<DestinationDetail />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/bookings' element={<ReceiptDetail />} />
      <Route path='/tour/:name/:title' element={<TourDetail />} />

    </Routes>
  </Router>
)

export default App;
