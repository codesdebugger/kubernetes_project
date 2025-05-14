import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  
  const API_URL = process.env.APP_BACKEND_URL || "/api";
  const navigate = useNavigate();
  useEffect(() => {
    verifyToken();
  });

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      // console.log("token", token);
      let result = await fetch(`${API_URL}/auth`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      // console.log(result);
      if (result.result !== "authenticated") {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateComponent;
