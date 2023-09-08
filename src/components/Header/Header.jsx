import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

export default function Header({ handleLogout, handleShowForm }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return (
      <div className="header-container">
        <div className="left-nav">
          <Link to="/">
            <img src="/logo.png" className="header-logo" />
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/trip" onClick={handleShowForm}>
            Ride
          </Link>
          <Link to="/trip/history">History</Link>
        </div>

        <div className="right-nav">
          <img src={user.photoUrl} className="nav-avatar" />
          <Link to={`/${user.message.name}`}>{user.message.name}</Link>
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="header-container">
      <div className="left-nav">
        <Link to="/">
          <img src="/logo.png" className="header-logo" />
        </Link>
      </div>

      <div className="right-nav">
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
