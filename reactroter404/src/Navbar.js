import {Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
function Navbar(){
    return(
        <>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='/abouta'>Contact</Link>
        </>        
    );
}
export default Navbar;