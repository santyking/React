import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

function Users() {
const [search,setSearch] = useSearchParams();
const showActiveUsers = search.get('filter')==='active'
  return (
    <div>
        <Navbar/>
        <h1>Users List</h1>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <button onClick={()=>setSearch({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearch({})}>Reset Filter</button>
        {
            showActiveUsers?<h2>Showing Active users</h2>:<h2>Showing all users</h2>
        }
        <Outlet/>
    </div>
  )
}

export default Users