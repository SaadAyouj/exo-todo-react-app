import {React, useState, useEffect } from 'react'
import {  motion } from 'framer-motion'

const About = () => {

  const [title, setTitle] = useState("Default")

  


  useEffect(() => {
    console.log('change');
  },[title])

  return (
    <motion.div
       initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >

      <h1 style={{ textAlign: "center" }}>{title}</h1>
      
      <button onClick={() => setTitle('Saad')}>Saad</button>
      <button onClick={() => setTitle('Sophia')}>Sophia</button>
      <button onClick={() => setTitle('Abdoulaye')}>Abdoulaye</button>
    
    
    </motion.div>
  )
}

export default About