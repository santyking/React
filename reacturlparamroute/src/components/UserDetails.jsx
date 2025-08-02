import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const {userId} = useParams();

  return (
    <div>
        Details of {userId}
    </div>
  )
}

export default UserDetails