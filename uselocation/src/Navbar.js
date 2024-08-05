import { NavLink } from "react-router-dom";
export default function Navbar(){
    return(
        <div>
            <ul>
                <li><NavLink to="/" className="navbar-items">Home</NavLink></li>
                <li><NavLink to="/about" className="navbar-items">About us</NavLink></li>
            </ul>
        </div>
    );
}