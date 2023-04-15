import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGetUserID } from "../hooks/getUserID";
import { useCookies } from "react-cookie";

const CreateBook = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isbn, setIsbn] = useState("");
  const [bookVersion, setBookVersion] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [sellerEmail, setSellerEmail]= useState("");
  const [sellerMobile, setSellerMobile] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [cookies, _] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const userId = useGetUserID();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      price,
      imageURL,
      isbn,
      bookVersion,
      authorName,
      userOwner: userId,
    };

    axios
      .post("http://localhost:3001/book", formData, {
        headers: { authorization: cookies.access_token },
      })
      .then((response) => {
        alert("Successfully added the book");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth">
      <div className="auth-container">
        <h1>Add New Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Book Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Book Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Book Price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="isbn">ISBN Number</label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              onChange={(e) => setIsbn(e.target.value)}
              placeholder="Enter ISBN Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="authorName">Author Name</label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Enter Author Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Book Version</label>
            <input
              type="text"
              id="bookVersion"
              name="bookVersion"
              onChange={(e) => setBookVersion(e.target.value)}
              placeholder="Enter Book Version"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">URL</label>
            <input
              type="text"
              id="image"
              name="image"
              onChange={(e) => setImageURL(e.target.value)}
              placeholder="Enter URL"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Mobile Number</label>
            <input
              type="text"
              onChange={(e) => setSellerMobile(e.target.value)}
              placeholder="Enter your Mobile Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="text"
              onChange={(e) => setSellerEmail(e.target.value)}
              placeholder="Enter your Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Address</label>
            <input
              type="text"
              onChange={(e) => setSellerAddress(e.target.value)}
              placeholder="Enter your Address"
            />
          </div>

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
