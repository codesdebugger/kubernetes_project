import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png'

const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    // navigate("/signup");
  };

  return (
    <>
    <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
      {auth ? (
        <ul className="nav-ul nav-ul-right">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/login">
              Logout {JSON.parse(auth).name.toUpperCase()}
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-ul-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
