import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </nav>
    </div>
  )
}

export default Navbar