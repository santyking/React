import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const loginUser = ()=>{
        localStorage.setItem('login',true);
        navigate('/');
    }
    return(
        <>
            <h1>Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password" />
            <button onClick={loginUser}>Login</button>
        </>
    );
}
export default Login;