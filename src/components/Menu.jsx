import React from 'react'

import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <nav>

        <Link to="/"> Home </Link>
        {/*  <a href="/"> Home </a>  */}

        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>

    </nav>
  )
}

export default Menu