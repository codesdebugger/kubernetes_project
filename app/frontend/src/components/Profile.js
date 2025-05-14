import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [src, setSrc] = useState("");
  const API_URL = process.env.APP_BACKEND_URL || "/api";

  const getUserinfo = async () => {
    let result = await fetch(
      `${API_URL}/upload-profile/${
        JSON.parse(localStorage.getItem("user"))._id
      }`,
      {
        headers:{
            authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        }
      }
    );
    result = await result.json();
    // console.log(result);
    setSrc(result.filename);
    setName(result.name);
    setEmail(result.email);
  };

  useEffect(() => {
    getUserinfo();
  }, []);

  const saveFile = (e) => {
    // console.log(e.target.files[0])
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const handleProfile = async () => {
    // console.log(name, email, file)
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("filename", filename);
    formdata.append("email", email);
    formdata.append("name", name);
    let result = await fetch(
      `${API_URL}/update-profile/${
        JSON.parse(localStorage.getItem("user"))._id
      }`,
      {
        method: "PUT",
        body: formdata,
        headers: {
          // "Content-Type": "application/json"
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    result = await result.json();
    getUserinfo();
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <img
        src={`${API_URL}/${src}`}
        onError={(e)=>e.target.src = `${API_URL}/noimage/No_Image_Available.jpg`}
        alt="dp"
        style={{"maxWidth": "200px", "maxHeight": "200px"}}
      />
      <input className="inputBox" type="file" onChange={saveFile} />
      <button type="button" className="appButton" onClick={handleProfile}>
        Update
      </button>
    </div>
  );
};

export default Profile;
