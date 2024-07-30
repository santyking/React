import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return(
        <div>
            <ul class="navbar-head">
                <li><NavLink to="/" className="navbar-item">Home</NavLink></li>
                <li><NavLink to="/contact" className="navbar-item">Contact us</NavLink></li>
            </ul>
            
            
        </div>
    );
}
export default Navbar;