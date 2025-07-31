import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import Navbar from './Navbar'

function Products() {
  return (
    <div>
        <Navbar/>
        <h1>Products</h1>
        <nav>
        <NavLink to='featured'>Featured</NavLink>
        <NavLink to='new'>New</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products