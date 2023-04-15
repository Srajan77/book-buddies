import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [books, setBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = books.filter((item) => item.name.includes(searchTerm));

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get("http://localhost:3001/book");
        setBooks(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBook();
  }, []);

  return (
    <div>
      <input
        type="search"
        placeholder="Enter Book Name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
