import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API_URL = process.env.APP_BACKEND_URL || "/api";

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
      navigate('/');
    }
  },[]);

  const collectdata = async () => {
    // console.log(name, email, password)
    let result = await fetch(`${API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.table(result);
    if (result.auth) {
      localStorage.setItem('user',JSON.stringify(result.result));
      localStorage.setItem('token',JSON.stringify(result.auth));
      navigate("/");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="button" className="appButton" onClick={collectdata}>
        SignUp
      </button>
      <div>Already have an account? <Link to="/login">Click here to login</Link></div>
    </div>
  );
};
export default SignUp;
