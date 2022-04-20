import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'


//Components
import Menu from './components/Menu'
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

const App = () => {
  
  return (

    <Router>
      
      <Menu />
        
        <AnimatedRoutes />

      <Footer />
    
    </Router>
  )
}

export default App