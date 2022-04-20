import React from 'react'

import { useNavigate } from 'react-router-dom'

const Error = () => {

  let navigate = useNavigate();

  return (
    <>
      <div><h1 style={{ textAlign: "center" }}>Page About</h1></div>
      <button onClick={() => {
        navigate("/")
      }}>Retourner sur la Home Page !</button>
    </>
  )
}

export default Error