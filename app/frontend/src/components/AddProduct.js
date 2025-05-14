import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const API_URL = process.env.APP_BACKEND_URL || "/api";

  const handleAddProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    } else {
      let result = await fetch(`${API_URL}/add-product`, {
        method: "POST",
        body: JSON.stringify({
          name,
          price,
          category,
          company,
          userId: JSON.parse(auth)._id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result)
      if (result._id) {
        alert("Product added successfully");
        navigate("/");
      } else {
        alert("Something went wrong");
      }
      //   console.log(result);
    }
  };
  return (
    <div className="register">
      <h1>Add Product</h1>
      <input
        type="text"
        className="inputBox"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && !name ? (
        <span className="invalid-input">Enter Valid Product Name</span>
      ) : (
        ""
      )}

      <input
        type="text"
        className="inputBox"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {error && !price ? (
        <span className="invalid-input">Enter Valid Product Price</span>
      ) : (
        ""
      )}

      <input
        type="text"
        className="inputBox"
        placeholder="Enter Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {error && !category ? (
        <span className="invalid-input">Enter Valid Product Category</span>
      ) : (
        ""
      )}

      <input
        type="text"
        className="inputBox"
        placeholder="Enter Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      {error && !company ? (
        <span className="invalid-input">Enter Valid Company</span>
      ) : (
        ""
      )}
      <button className="appButton" type="button" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};
export default AddProduct;
