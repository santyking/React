import { NavLink } from "react-router-dom";
function Navbar() {
    return(
        <>
        <ul>
            <li><NavLink to='/' className="navbar-items">Home</NavLink> </li>
            <li><NavLink to='/about' className="navbar-items">About</NavLink></li>
            <li><NavLink to='/login' className="navbar-items">Login</NavLink></li>
        </ul>
        </>
    );
}
export default Navbar;