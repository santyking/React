import React,{useState} from 'react'
import { useAuth } from './Auth';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const [user,setUser] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || '/';
    const handleLogin = ()=>{
        auth.login(user);
        navigate('/profile', { replace: true });
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder='User id'/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login