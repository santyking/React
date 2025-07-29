import React from 'react'
import { NavLink } from 'react-router-dom'
function NavLinkBar() {
  return (
    <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    </div>
  )
}

export default NavLinkBar