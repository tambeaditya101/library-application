import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api";

function Login() {
  let initStage = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initStage);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    signupToApi(user);
    setUser(initStage);
  };
  const signupToApi = async (userdata) => {
    await axios
      .post(`${API}/users/login`, userdata)
      .then((res) => {
        // console.log(res);
        alert("logged in successfully");
        localStorage.setItem("token", res.data.token);
        navigate("/library");
      })
      .catch((err) => {
        alert("Invalid Credentials");
        //console.log(err);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const { username, password } = user;
  return (
    <div
      style={{
        textAlign: "center",
        width: "250px",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "10px",
      }}
    >
      <div>
        <h1>Login Here to visit Library</h1>
        <form onSubmit={handleSubmit}>
          <label> Username:</label>
          <input
            type="text"
            placeholder="enter username"
            value={username}
            name="username"
            onChange={handleChange}
          />{" "}
          <br />
          <label> Password:</label>
          <input
            type="text"
            placeholder="enter password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <br />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
