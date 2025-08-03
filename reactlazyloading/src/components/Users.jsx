import React from 'react'
import { Outlet } from 'react-router-dom'

function Users() {
  return (
    <div>Users
        <Outlet/>
    </div>
    
  )
}

export default Users