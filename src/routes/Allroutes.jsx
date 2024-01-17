import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Homepage from "../components/Homepage";
import Library from "../components/Library";
import PrivateRoute from "./PrivateRoute";
import AddBookForm from "../components/AddBookForm";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/library"
          element={
            <PrivateRoute>
              <Library />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/addbookform"
          element={
            <PrivateRoute>
              <AddBookForm />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Allroutes;
