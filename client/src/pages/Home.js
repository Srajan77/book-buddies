import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import BookOrder from "./BookOrder";

import { useGetUserID } from "../hooks/getUserID";

const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);
  const [subjectDropDown, setSubjectDropDown] = useState("");
  const [authorDropDown, setAuthorDropDown] = useState("");
  const [isbnDropDown, setIsbnDropDown] = useState("");
  const [dropDownValue, setDropDownValue] = useState("");

  const userID = useGetUserID();

  const [pageNumber, setPageNumber] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get("http://localhost:3001/book");
        setBooks(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/book/savedBook/ids/${userID}`
        );

        setSavedBooks(response.data.savedBook);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBook();
    if (cookies.access_token) fetchSavedBooks();
  }, []);

  const saveBook = async (bookID) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/book",
        {
          bookID,
          userID,
        },
        { headers: { authorization: cookies.access_token } }
      );
      setSavedBooks(response.data.savedBook);
    } catch (err) {
      console.log(err);
    }
  };

  const isBookSaved = (id) => {
    return savedBooks.includes(id);
  };

  const bookOrder = (orderBook) => {
    axios
      .post("http://localhost:3001/book/order", orderBook, {
        headers: { authorization: cookies.access_token },
      })
      .catch((error) => {
        console.log(error);
      });
    if (cookies.access_token) navigate("/order");
  };

  const displayBook = books
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((book) => {
      return (
        <div>
          <ul className="ul-list">
            <li className="food" key={book._id}>
              <div className="instructions">
                <h2>{book.name}</h2>
              </div>

              <img src={book.imageURL} alt={book.name} />
              <div>
                <p>Price: {book.price}</p>
                <p>ISBN Number: {book.isbn}</p>
                <p>Version: {book.bookVersion}</p>
                <p>Author Name: {book.authorName}</p>
              </div>

              <button
                onClick={() => saveBook(book._id)}
                disabled={isBookSaved(book._id)}
              >
                Save
              </button>
              <button onClick={() => bookOrder(book)}>Order</button>
            </li>
          </ul>
        </div>
      );
    });

  const pageCount = Math.ceil(books.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  function handleSearch(e) {
    setSearchTerm(e.target.value);
    const filteredData = books.filter((item) => item.name.includes(searchTerm));
    setBooks(filteredData);
  }

  function handleNameSearch(e){
    setSubjectDropDown(e.target.value);
    const filteredData = books.filter((item) => item.name.includes(subjectDropDown));
    console.log("book name  ", filteredData)
    setBooks(filteredData);
  }

  function handleIsbnSearch(e){
    setIsbnDropDown(e.target.value);
    const filteredData = books.filter((item) => item.isbn.includes(isbnDropDown));
    console.log("isbn  ", filteredData);
    setBooks(filteredData);
  }

  function handleAuthorNameSearch(e){
    setAuthorDropDown(e.target.value);
    const filteredData = books.filter((item) => item.authorName.includes(authorDropDown));
    console.log("author  ", filteredData);
    setBooks(filteredData);
  }

  function handleDropDown(e){
    setDropDownValue(e.target.value);
  }

  

  return (
    <div className="food-background">
      {/* {cookies.access_token ? (
        <input
          className="search-box"
          type="text"
          placeholder="Enter Book Name"
          value={searchTerm}
          onChange={handleSearch}
        />
      ) : null} */}

      <div className="dropdown">
        <select value={dropDownValue} onChange={handleDropDown}>
          <option value="subjectDropDown">Subject Name</option>

          <option value="authorDropDown">Author Name</option>

          <option value="isbnDropDow">ISBN Number</option>
        </select>
        {dropDownValue === "subjectDropDown" ? (
          <input
            type="text"
            placeholder="Enter Subject Name"
            onChange={handleNameSearch}
          />
        ) : dropDownValue === "authorDropDown" ? (
          <input
            type="text"
            placeholder="Enter Author Name"
            onChange={handleAuthorNameSearch}
          />
        ) : (
          <input
            type="text"
            placeholder="Enter ISBN Number"
            onChange={handleIsbnSearch}
          />
        )}
      </div>

      <div className="home-books">
        {displayBook}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Home;







// import "./styles.css";
// import {useState} from "react";

// export default function App() {
//   const [value, setValue] = useState('fruit');

//  const handleChange = (event) => {
//    setValue(event.target.value);
//   }
//   return (
//     <div>
//     <label>

//     What do we eat?

//     <select value={value} onChange={handleChange}>

//       <option value="fruit">Fruit</option>

//       <option value="vege">Vegetable</option>

//       <option value="meat">Meat</option>

//     </select>
//     {value === "fruit" ? <input type="text" placeholder="ENter fruit"  /> :
//     value === "meat" ? <input type="text" placeholder="ENter meat" /> : <input type="text" placeholder="ENter Vege" /> }
    

//   </label>

//   <p>We eat {value}!</p>

// </div>
//   );
// }
