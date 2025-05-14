import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import debounce from 'lodash.debounce';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.APP_BACKEND_URL || "/api";

  useEffect(() => {
    getproduct();
  }, []);
  const getproduct = async () => {
    let result = await fetch(`${API_URL}/products`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setProducts(result);
    setLoading(false);
    // console.log(result)
  };
  //   console.table(products);
  const handleProductDelete = async (id) => {
    setLoading(true);
    let result = await fetch(`${API_URL}/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    if (result.deletedCount > 0) {
      alert("Deleted Successfully");
      getproduct();
    }
  };

  const searchHandle = (e) => {
    // console.log(e.target.value)
    let key = e.target.value
    setLoading(true);
    setTimeout(async () => {
      if (key) {
        let result = await fetch(`${API_URL}/search/${key}`, {
          headers: {
            // authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        });
        result = await result.json();
        // console.log(result)
        if (!result.result) {
          setProducts(result);
          setLoading(false);
        } else {
          setProducts([]);
          setLoading(false);
        }
      } else {
        getproduct();
      }
    }, 1000);
  };

  const debouncedChangeHandler = useCallback(
      debounce(searchHandle, 2000)
  , []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="product-list">
          <h3>Product List</h3>
          <input
            type="text"
            placeholder="Enter text to find"
            className="searchBox"
            onChange={debouncedChangeHandler}
          />
          <ul>
            <li>Sl. No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
            <li>Action</li>
          </ul>

          {products.length > 0 ? (
            products.map((item, index) => {
              return (
                <ul key={index}>
                  <li>{index + 1}</li>
                  <li>{item.name}</li>
                  <li>${parseFloat(item.price).toFixed(2)}</li>
                  <li>{item.category}</li>
                  <li>{item.company}</li>
                  <li>
                    <Link to={`/update/${item._id}`}>Edit</Link>
                    <button
                      onClick={() => {
                        handleProductDelete(item._id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              );
            })
          ) : (
            <h2>No Data Found</h2>
          )}
        </div>
       )} 
    </>
  );
};
export default ProductList;
