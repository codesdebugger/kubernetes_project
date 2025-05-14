import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const SignUp = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const API_URL = process.env.APP_BACKEND_URL || "/api";

    const handleRegister = async () =>{
        // console.log("handleRegister")
        let result = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        result = await result.json();

        if(result._id!=='')
        {
            navigate('/');
        }
    }

    return (
        <div className="register">
            <h2>Register</h2>
            <input type="text" className="inputBox" placeholder="Enter Name" name={name} onChange={(e)=>setName(e.target.value)}  />
            <input type="email" className="inputBox" placeholder="Enter Email" name={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" className="inputBox" placeholder="Enter Password" name={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="button" className="appButton" onClick={handleRegister}>Register</button>
            <div>Already have an account? <Link to="/login">Click here to login</Link></div>
        </div>
    )
}
export default SignUp;