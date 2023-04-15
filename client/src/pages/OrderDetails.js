import React, { useState } from "react";
import axios from "axios";

const OrderDetails = () => {
  const [otp, setOtp] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  const handleOtp = () => {
    setOtp(1);
    axios
      .post("http://localhost:3001/book/order-details", { email: userEmail })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = () => {
    alert("Your Order has been Booked");
  };

  return (
    <div className="auth">
      <div className="auth-container">
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>

        {!otp ? (
          <button onClick={handleOtp}>Get Otp</button>
        ) : (
          <div className="form-group">
            <label htmlFor="name">OTP</label>
            <input type="text" placeholder="Enter OTP" />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="name">Address</label>
          <input type="text" placeholder="Enter Address" />
        </div>

        <div className="form-group">
          <label htmlFor="name">Phone Number</label>
          <input type="text" placeholder="Enter phone number" />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default OrderDetails;
