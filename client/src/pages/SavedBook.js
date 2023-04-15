import React, { useEffect, useState } from "react";
import axios from "axios";

import { useGetUserID } from "../hooks/getUserID";

const SavedBook = () => {
  const [books, setBooks] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/book/savedBook/${userID}`
        );

        setBooks(response.data.savedBook);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedBooks();
  }, [books]);

  const unSave = async (bookID) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/book/deleteSavedBook",
        {
          bookID,
          userID,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="food-background">
      <h1>All Saved Books are Here</h1>

      {books.map((book) => (
        <ul className="ul-list">
          <li className="food" key={book._id}>
            <div>
              <h2>{book.name}</h2>
              <img src={book.imageURL} alt={book.name} />
              <p>{book.hotel}</p>
              <p>{book.price}</p>
              <button onClick={() => unSave(book._id)}>Unsave</button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default SavedBook;
