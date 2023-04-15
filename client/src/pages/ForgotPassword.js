import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [username, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username,
    };

    axios
      .post("http://localhost:3001/auth/forgot", formData)
      .then((response) => {
        //    alert("Registration Completed Now Login");
        if (response.data.message !== "") alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
