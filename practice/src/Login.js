import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
export default function Login() {
    const [Uerr, setUerr] = useState(false);
    const [Perr, setPerr] = useState(false);
    let login = (e) => {
        e.preventDefault();
        if (Uerr || Perr) {
            alert("Invalid Credentials");
        }
        else {
            alert("You are successfully logged in")
        }
    }
    let user_validate = (e) => {
        if (e.target.value.length >= 3) {
            setUerr(false);
        }
        else {
            setUerr(true);
        }
    }
    let password_validate = (e) => {
        if (e.target.value.length >= 3) {
            setPerr(false);
        }
        else {
            setPerr(true);
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} width={100} />
                <h1>Login Page</h1>
                <form onSubmit={login}>
                    <input type="text" name="userid" id="userid" placeholder='Enter Userid' onChange={user_validate} />
                    {
                        Uerr ? <span> Invalid User id</span> : null
                    }
                    <br />
                    <input type="password" name="passwordid" id="passwordid" placeholder='Enter Password' onChange={password_validate} />
                    {
                        Perr ? <span> Invalid Password</span> : null
                    }
                    <br />
                    <button type="submit">Login</button>
                </form>
            </header>
        </div>
    )
}
