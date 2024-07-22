import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/user/santosh'>Santosh</Link></li>
            <li><Link to='/user/anvi'>Anvi</Link></li>
        </ul>
    </div>
  )
}
