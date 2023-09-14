import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillCarFrontFill } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BiHelpCircle } from "react-icons/bi";

export default function Header({ handleLogout, handleShowForm }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const driver = JSON.parse(localStorage.getItem("driver"));

  if (user) {
    return (
      <div className="header-container">
        <div className="left-nav">
          <Link to="/">
            <img src={Logo} className="header-logo" />
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/trip" onClick={handleShowForm}>
            Ride
          </Link>
          <Link to={`/trip/history/${user.message._id}`}>History</Link>
        </div>

        <div className="right-nav">
          {/* <img src={user.photoUrl} className="nav-avatar" /> */}
          <Link to={`/${user.message.name}`}>{user.message.name}</Link>
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        </div>
      </div>
    );
  }

  if (driver) {
    return (
      <div className="driver-header-container">
          <Link to="/">
            <IoHomeOutline />
          </Link>
          <Link to={`/${driver.message.name}`}>
            <FaRegUser />
          </Link>
          <Link to="/drive">
            <BsFillCarFrontFill />
          </Link>
          <Link to={`/drive/history/${driver.message._id}`}>
            <HiOutlineClipboardDocumentList />
          </Link>
          <Link to="">
            <BiHelpCircle />
          </Link>
          <Link to="" onClick={handleLogout}>
            <HiOutlineLogout />
          </Link>
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
