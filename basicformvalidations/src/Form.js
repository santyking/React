import React,{useState} from 'react';
import './App.css';

function Form() {
    const [uerr,setuerr] = useState(true);
    const [perr,setperr] = useState(true);
    let submitForm = (e) => {
        e.preventDefault();
        if (uerr || perr) {
            alert("User name or passwor is invalid");
        }
        else{
            alert("Welcome! You are logged in :-) ");
        }
    }
    let validateUserid = (e) =>{
        // console.log(e.target.value);
        let ulen = e.target.value;
        if (ulen.length >= 3) {
            setuerr(false);
        }
        else{
            setuerr(true);
        }
    }
    let validatePassword = (e) =>{
        // console.log(e.target.value);
        let plen = e.target.value;
        if (plen.length >= 3 ) {
            setperr(false);
        }
        else{
            setperr(true);
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Login Page</h1>
                <form onSubmit={submitForm}>
                    <input type="text" placeholder='User Id' onChange={validateUserid}/>
                    { uerr?<span> Invalid Userid </span>:<span></span>}<br></br>
                    <input type="password" name="pwd" id="pwd" placeholder='Password' onChange={validatePassword}/>
                    { perr?<span> Invalid Password </span>:<span></span>}
                    <br />
                    <button type="submit">Login</button>
                </form>
            </header>
        </div>
    );
}
export default Form;