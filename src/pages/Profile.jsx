import React from 'react'

import { useParams } from 'react-router-dom'

const Profile = () => {

  let { username } = useParams();

  return (
    <div><h1 style={{ textAlign: "center" }}>Page About</h1></div>
  )
}

export default Profile