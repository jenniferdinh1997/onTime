import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const driverLogout = () => {
    localStorage.removeItem("driver");
    window.location.reload();
  };

  const userLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }

  if (user) {
    return (
      <div className="user-header-container">
        <Link to="/">
          <IoHomeOutline />
        </Link>
        <Link to={`/${user.message.name}`}>
          <FaRegUser />
        </Link>
        <Link to="/trip" onClick={handleShowForm}>
          <BsFillCarFrontFill />
        </Link>
        <Link to={`/trip/history/${user.message._id}`}>
          <HiOutlineClipboardDocumentList />
        </Link>
        <Link to="">
          <BiHelpCircle />
        </Link>
        <p onClick={userLogout}>
          <HiOutlineLogout />
        </p>
      </div>
    );
  }

  if (driver) {
    return (
      <div className="driver-header-container">
          <Link to="/home/driver">
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
          <p onClick={driverLogout}>
            <HiOutlineLogout />
          </p>
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
