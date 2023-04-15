import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <h1>The Book Exchange Store</h1>

      <div className="auth">
        <Login />
        <Register />
      </div>
    </div>
  );
};

const Register = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  function handleForgotPassword() {}
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username,
      password,
    };

    axios
      .post("http://localhost:3001/auth/register", formData)
      .then((response) => {
        alert("Registration Completed Now Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form
      username={username}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
      label="Register"
      handleSubmit={handleSubmit}
      forgotPassword={false}
      handleForgotPassword={handleForgotPassword}
    />
  );
};

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("/forgot");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      if (typeof response.data.token === "undefined") {
        alert("Incorrect Id or Password");
      } else {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userId", response.data.userId);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      username={username}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
      label="Login"
      handleSubmit={handleSubmit}
      forgotPassword={true}
      handleForgotPassword={handleForgotPassword}
    />
  );
};

const Form = ({
  username,
  setUserName,
  password,
  setPassword,
  label,
  handleSubmit,
  forgotPassword,
  handleForgotPassword,
}) => {
  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        {/* {forgotPassword ? (
          <>
            <button className="reset-password" onClick={handleForgotPassword}>Reset Password</button>
            
          </>
        ) : null} */}

        <button type="submit">{label}</button>
      </form>
    </div>
  );
};

export default Auth;
