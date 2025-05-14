import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";
const UpdateProduct = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const param = useParams();
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.APP_BACKEND_URL || "/api";
  const updateProduct = async () => {
    if (!name || !category || !company || !price) {
      setError(true);
    } else {
      let result = await fetch(`${API_URL}/product/${param.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          price,
          category,
          company,
          userId: JSON.parse(auth)._id,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      // console.log(result)
      if (result.modifiedCount === 0) {
        alert("Data remaining same");
      } else if (result.modifiedCount > 0) {
        alert("Updated successfully");
        navigate("/");
      } else {
        alert("Something went wrong please check once and submit again.");
      }
    }
  };

  const getProductDetails = async () => {
    let result = await fetch(`${API_URL}/product/${param.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    // console.log(result);
    if (result._id) {
      setName(result.name);
      setCategory(result.category);
      setCompany(result.company);
      setPrice(result.price);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProductDetails();
    // console.log(param.id);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="register">
          <h1>Edit Product</h1>
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
          <button className="appButton" type="button" onClick={updateProduct}>
            Update Product
          </button>
        </div>
      )}
    </>
  );
};
export default UpdateProduct;
