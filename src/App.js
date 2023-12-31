import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/common/Navbar'

import Home from './components/Home'
import Bio from './components/Bio'
import Coaching from './components/Coaching'
import Contact from './components/Contact'
import AltContact from './components/AltContact'
import Stringing from './components/Stringing'

function App() {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/altcontact" element={<AltContact />} />
          <Route path="/stringing" element={<Stringing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App