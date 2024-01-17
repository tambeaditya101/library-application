// AddBookForm.js
import React, { useState } from "react";
import axios from "axios";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

const AddBookForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const handleAddBook = async () => {
    if (!title || !author) {
      alert("both fields are required");
      return;
    }
    try {
      const response = await axios.post(
        `${API}/books/`,
        { title, author },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      //console.log(response);
      //onAdd(response.data.book);
      alert("Book Successfully added!");
      setTitle("");
      setAuthor("");
      navigate("/library");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "10px",
        width: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2>Add Book</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
      </label>
      <button
        style={{ width: "100px", margin: "auto" }}
        onClick={handleAddBook}
      >
        Add Book
      </button>
    </div>
  );
};

export default AddBookForm;
