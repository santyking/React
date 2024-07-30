import { NavLink, Outlet } from "react-router-dom";
function Contact() {
    return(
        <div>
            <h1>Contact us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, explicabo!</p>
            <ul className="navbar-head">
                <li><NavLink to="channel" className="navbar-item">Channel</NavLink></li>
                <li><NavLink to="other" className="navbar-item">Other</NavLink></li>
                <li><NavLink to="company" className="navbar-item">Company</NavLink></li>
                <Outlet></Outlet>
            </ul>
        </div>
    );
}
export default Contact;