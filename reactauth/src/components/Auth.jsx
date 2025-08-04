import { createContext,useState } from "react";
const authContext = createContext(null);
export const authProvider = ()=>{
    const [user,setUser] = useState(null);
    const login = (user)=>{
        setUser(user);
    }
    const logout = ()=>{
        setUser(null);
    }
    return 
}