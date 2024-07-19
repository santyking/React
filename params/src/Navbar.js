import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/user/santosh'>Santosh</Link>
        <Link to='/user/anvi'>Anvi</Link>

    </div>
  )
}
