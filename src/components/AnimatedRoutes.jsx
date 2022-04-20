import React from 'react'

import { Routes, Route, useLocation } from 'react-router-dom'

//Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'
import Error from '../pages/Error'

import UseEffect from './UseEffect'

//import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {

    const location = useLocation();

    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="*" element={<Error />} />
            
            <Route path="/teste" element={<UseEffect />} />

        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes