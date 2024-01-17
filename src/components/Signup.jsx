import axios from "axios";
import React, { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

function Signup() {
  let initStage = {
    username: "",
    password: "",
    roles: [],
  };
  const [user, setUser] = useState(initStage);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(user);
    signupToApi(user);
    setUser(initStage);
  };
  const signupToApi = (userdata) => {
    axios
      .post(`${API}/users/register`, userdata)
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        //console.log(err);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const { username, password, roles } = user;
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
      <h1>Sign Up</h1>
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
        <label> Role:</label>
        <select value={roles} name="role" onChange={handleChange}>
          <option value="VIEWER">VIEWER</option>
          <option value="CREATOR">CREATOR</option>
          <option value="VIEW_ALL">VIEW_ALL</option>
        </select>{" "}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
