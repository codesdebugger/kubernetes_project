import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const ProductList = () =>{
    const [products, setProducts] = useState([]);
    const API_URL = process.env.APP_BACKEND_URL || "/api";

    useEffect(()=>{
        getProduct()
    },[]);

    const getProduct = async () => {
        let result = await fetch(`${API_URL}/products`);
        result = await result.json();
        setProducts(result);
        // console.log("product", products);
    }

    const handleDelete = async (id) =>{
        console.log(id);
        let result = await fetch(`${API_URL}/product/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        getProduct();
    }

    return (
        <div className="product-list">
            <h3>Product List</h3>
            <input type="text" placeholder="Enter text to find" className="searchBox" />
            <ul>
                <li>Sl No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Action</li>
            </ul>

            {
                products.map((item, index)=>{
                    return(
                        <ul key={index}>
                            <li>{index+1}</li>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li>{item.category}</li>
                            <li>
                                <Link to={`/update/${item._id}`}>Edit</Link>
                                <button onClick={()=>{handleDelete(item._id)}}>Delete</button>
                            </li>
                        </ul>
                    )
                    
                })
            }
        </div>
    )
}

export default ProductList;