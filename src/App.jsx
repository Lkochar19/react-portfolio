import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Cards from './components/Cards'
import Blackout from './components/pages/Blackout'
import BHistories from './components/pages/BHistories'
import About from './components/pages/About'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/portfolio' exact element={<Cards />} />
        <Route path='/blackout' exact element={<Blackout />} />
        <Route path='/broken-histories' exact element={<BHistories />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
