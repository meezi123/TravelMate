import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Tours from './Pages/Tours'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import DestinationDetail from './Pages/DestinationDetail'
import TourDetail from './Pages/TourDetail'
import Logout from './Pages/Logout'
import ReceiptDetail from './Pages/ReceiptDetail'

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tour' element={<Tours />} />
      <Route path='/tour/:name' element={<DestinationDetail />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/receipt' element={<ReceiptDetail />} />
      <Route path='/tour/:name/:title' element={<TourDetail />} />
    </Routes>
  </Router>
)

export default App;
