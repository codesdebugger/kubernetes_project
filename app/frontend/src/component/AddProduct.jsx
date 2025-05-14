import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const AddProduct = () =>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const API_URL = process.env.APP_BACKEND_URL || "/api";

    const handleSubmit = async () =>{
        console.log('its wokring');
        let result = await fetch(`${API_URL}/add-product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,
                price,
                category
            })
        });
        result = await result.json();
        console.log(result);
        navigate('/');
        
    }
    return (
        <div className="register">
            <h1>Add Product</h1>
            <input type="text" className="inputBox" placeholder="Enter Product Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" className="inputBox" placeholder="Enter Product Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <input type="text" className="inputBox" placeholder="Enter Product Category" value={category} onChange={(e)=>setCategory(e.target.value)} />
            <button type="button" className="appButton" onClick={handleSubmit}>Add Product</button>
        </div>
    )
}

export default AddProduct;