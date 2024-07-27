import { useNavigate } from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
    const navigateToPage = () =>{
        let x = false;
        if(x){
            navigate('/');
        }
        else{
            navigate('/about');
        }
    }
    return(
        <>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link> */}
            <button onClick={()=>navigateToPage()}>Home</button>
            <button onClick={()=>navigateToPage()}>About</button>
        </>
    );
}
export default Navbar;