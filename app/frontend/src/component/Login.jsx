import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const API_URL = process.env.APP_BACKEND_URL || "/api";

    const handleLogin = async () =>{
        let result = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        console.log(result);
        result = await result.json();
        console.log(result);
    }

    return (
        <div className="register">
            <h2>Register</h2>
            <input type="email" className="inputBox" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" className="inputBox" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="button" className="appButton" onClick={handleLogin}>Login</button>
            <div>New user? <Link to="/register">Click here to register</Link></div>
        </div>
    )
}

export default Login;
