import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <NavLink to='/' className="nav-link">Home</NavLink>
        <NavLink to='/about' className="nav-link">About</NavLink>
        <NavLink to='/user/santosh' className="nav-link">Santosh</NavLink>
        <NavLink to='/user/anvi' className="nav-link">Anvi</NavLink>
    </div>
  )
}
