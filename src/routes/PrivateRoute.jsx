import React from "react";

function PrivateRoute({ children }) {
  let tok = localStorage.getItem("token");
  return tok ? children : <h1>User not Authenticated</h1>;
}

export default PrivateRoute;
