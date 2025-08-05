import { NavLink } from "react-router-dom"
import { useAuth } from "./Auth"

function Navbar() {
  const auth = useAuth()
  return (
    <div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {
              !auth.user && (
                <NavLink to='/login'>
                  Login
                </NavLink>
              )
            }
        </nav>
    </div>
  )
}

export default Navbar