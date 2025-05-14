import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Nav = () =>{
    return (
        <>
            <Link to="/"><img src={logo} alt="" className="logo" /></Link>
            <ul className="nav-ul nav-ul-right">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </>
    )
}
export default Nav;