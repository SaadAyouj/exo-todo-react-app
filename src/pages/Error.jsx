import React from 'react'

import { useNavigate } from 'react-router-dom'

const Error = () => {

  let navigate = useNavigate();

  return (
    <>
      <div>Erreur 404 Page Not Found</div>
      <button onClick={() => {
        navigate("/")
      }}>Retourner sur la Home Page !</button>
    </>
  )
}

export default Error