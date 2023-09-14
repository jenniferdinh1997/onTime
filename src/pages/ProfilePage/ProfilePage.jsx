import React, { useEffect, useState } from "react";
import userService from "../../utils/userService";
import { getDriver } from "../../utils/driverService";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaCreditCard, FaCar, FaQuestion } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Default from "../../assets/default.jpg";
import { useParams, Link } from "react-router-dom";
import "./ProfilePage.css";

export default function ProfilePage({ handleLogout }) {
  const [error, setError] = useState("");
  const user = userService.getUser()?.message;
  const driver = getDriver()?.message;

  if (user) {
    return (
      <div>
        <Header user={user} handleLogout={handleLogout} />
        <div className="profile-page-container">
          <div className="profile-page-row_1">
            <img src={Default} className="pfp_avatar" />
            <div className="profile-page_info">
              <h1>{user.name}</h1>
              <div className="profile-page_contact">
                <BsTelephoneFill />
                <p>{user.phone}</p>
              </div>
              <div className="profile-page_contact">
                <MdEmail />
                <p>{user.email}</p>
              </div>
            </div>
          </div>
          <div className="profile-page-row">
            <div className="wallet">
              <FaCreditCard style={{ fontSize: "2em", color: "gray" }} />
              <p>Wallet</p>
            </div>

            <div className="trips">
              <Link to="/trip/history">
                <FaCar style={{ fontSize: "2em", color: "gray" }} />
                <p>Trips</p>
              </Link>
            </div>

            <div className="help">
              <FaQuestion style={{ fontSize: "2em", color: "gray" }} />
              <p>Help</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (driver) {
    return (
      <div>
        <Header user={user} handleLogout={handleLogout} />
        <div className="profile-page-container">
          <div className="profile-page-row_1">
            <img src={Default} className="pfp_avatar" />
            <div className="profile-page_info">
              <h1>{driver.name}</h1>
              <div className="profile-page_contact">
                <BsTelephoneFill />
                <p>{driver.phone}</p>
              </div>
              <div className="profile-page_contact">
                <MdEmail />
                <p>{driver.email}</p>
              </div>
            </div>
          </div>
          <div className="profile-page-row">
            <div className="wallet">
              <FaCreditCard style={{ fontSize: "2em", color: "gray" }} />
              <p>Wallet</p>
            </div>

            <div className="trips">
              <Link to={`/drive/history/${driver._id}`}>
                <FaCar style={{ fontSize: "2em", color: "gray" }} />
                <p>Trips</p>
              </Link>
            </div>

            <div className="help">
              <FaQuestion style={{ fontSize: "2em", color: "gray" }} />
              <p>Help</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
