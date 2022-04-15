import React from 'react'

import { useParams } from 'react-router-dom'

const Profile = () => {

  let { username } = useParams();

  return (
    <div>C'est la Page Profile de { username }</div>
  )
}

export default Profile