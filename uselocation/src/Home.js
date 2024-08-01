import { useLocation } from "react-router-dom";
export default function Home(){
    const location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Home Page</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, minima.</p>
        </div>
    );
}