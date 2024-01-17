import React from "react";

function Homepage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        //border: "1px solid black",
        textAlign: "center",
      }}
    >
      <h1>welcome to the library</h1>
      <h3>
        {" "}
        New user ? please <a href="/signup">Signup</a> or{" "}
        <a href="/login">Login</a>{" "}
      </h3>
    </div>
  );
}

export default Homepage;
