import { createContext,useContext,useState } from "react";
const authContext = createContext(null);
export const authProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const login = (user)=>{
        setUser(user);
    }
    const logout = ()=>{
        setUser(null);
    }
    return <authContext.Provider value={{user,login,logout}}>
    {children}      
    </authContext.Provider>
}
export const useAuth = ()=>{
    return useContext(authContext);
}