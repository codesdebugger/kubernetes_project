import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateProduct = () =>{
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const API_URL = process.env.APP_BACKEND_URL || "/api";

    useEffect(()=>{
        getProduct();
    }, []);

    const getProduct = async () =>{
        // console.log(params)
        const pid = params.id;
        let result = await fetch(`${API_URL}/product/${pid}`);
        result = await result.json();
        console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
    }

    const handleUpdate = async () =>{
        const pid = params.id;
        let result = await fetch(`${API_URL}/product/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                price,
                category
            })
        });
        result = await result.json();
        console.log(result);
        navigate("/");

    }

    return (
        <div className="register">
            <h1>Update Product</h1>
            <input type="text" className="inputBox" placeholder="Enter Product Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" className="inputBox" placeholder="Enter Product Price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            <input type="text" className="inputBox" placeholder="Enter Product Category" value={category} onChange={(e)=>{setCategory(e.target.value)}} />
            <button type="button" className="appButton" onClick={handleUpdate}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;