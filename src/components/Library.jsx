// Library.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../api";
import { Link } from "react-router-dom";

const Library = ({ user }) => {
  const [books, setBooks] = useState([]);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/books/delete/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
    } catch (error) {
      alert("Your role is not appropriate to perform this operation");
    }
  };
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API}/books/`, {
          headers: { Authorization: localStorage.getItem("token") },
        });
        console.log(response);
        setBooks(response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [user]);

  return (
    <div
      style={{
        textAlign: "center",
        width: "500px",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "10px",
      }}
    >
      <p>
        <Link to="/">Back to Main menu</Link>
      </p>
      <h1>Books List</h1>
      <h2>
        Want to post a new book ?<Link to="/addbookform">Click here</Link>
      </h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong style={{ color: "red", paddingRight: "15px" }}>
              {book.title}
            </strong>{" "}
            -by {book.author}
            <button>Edit</button>
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
