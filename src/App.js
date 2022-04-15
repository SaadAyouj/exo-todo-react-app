import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Error from './pages/Error'

//Components
import Menu from './components/Menu'
import Footer from './components/Footer'

const App = () => {
  return (

    <Router>
      
      <Menu />
        
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<Error />} />

      </Routes>

      <Footer />
    
    </Router>
  )
}

export default App