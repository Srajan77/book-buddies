import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/create-book">
        Add New Book
      </Link>

      <Link className="nav-item" to="/study-material">
        Study Material
      </Link>

      {!cookies.access_token ? (
        <Link className="nav-item" to="/auth">
          Login/Register
        </Link>
      ) : (
        <>
          <Link className="nav-item" to="/saved-book">
            Saved Books
          </Link>
          {/* <SearchBar /> */}
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;
