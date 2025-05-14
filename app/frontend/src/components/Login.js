import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const API_URL = process.env.APP_BACKEND_URL || "/api";

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const handleLogin = async () => {
    // console.log(email, password)
    if(!email || !password)
    {
      setError(true)
    }
    else{
      let result = await fetch(`${API_URL}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      // console.log(result);
      if (result.auth) {
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate("/");
      } else {
        alert("Please check once provided details");
      }
    }
  };
  return (
    <div className="register">
    <h1>Login</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && !email ? (
        <span className="invalid-input">Enter Valid Email Address</span>
      ) : (
        ""
      )}
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && !password ? (
        <span className="invalid-input">Enter Valid Password</span>
      ) : (
        ""
      )}
      <button className="appButton" type="button" onClick={handleLogin}>
        Login
      </button>
      <div>New User? <Link to="/signup">Click here to signup</Link></div>
    </div>
  );
};
export default Login;
