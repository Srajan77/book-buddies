import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookOrder = () => {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const orderBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/book/order");
        // console.log(response.data[0].name);
        setBook(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    orderBooks();
  }, []);

  function handlePay() {
    navigate("/order-details");
  }

  return (
    <div>
      <h1>Ordered Books</h1>
      {book.map((item) => {
        return (
          <ul className="ul-list">
            <li className="food" key={book._id}>
              <div className="instructions">
                <h2>{item.name}</h2>
              </div>

              <img src={item.imageURL} alt={item.name} />
              <p>ISBN:  {item.isbn}</p>
              <p>Book Version:  {item.bookVersion}</p>
              <p>authorName:  {item.authorName}</p>
              <p>{item.sellerEmail}</p>
              <p>{item.sellerMobile}</p>
              <p>{item.sellerAddress}</p>

              <p>Total Price: {item.price}</p>
              <button onClick={handlePay}>Order Now</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default BookOrder;
