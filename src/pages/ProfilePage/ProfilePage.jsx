import React, { useEffect, useState } from "react";
import userService from "../../utils/userService";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaCreditCard, FaCar, FaQuestion } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import "./ProfilePage.css";

export default function ProfilePage({ handleLogout }) {
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const { name } = useParams();

  async function getProfile() {
    try {
      const data = await userService.getProfile(name);
      setUser(() => data.user);
    } catch (err) {
      setError("no profile");
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <Header user={user} handleLogout={handleLogout} />
      <div className="profile-page-container">
        <h1>Profile</h1>
        <div className="profile-page-row-1">
          <div className="profile-page_info">
            <h1>{user.name}</h1>
            <h6>{user.phone}</h6>
            <h6>{user.email}</h6>
          </div>
          <img src={user.photoUrl} className="avatar" />
        </div>

        <h3>Account Settings</h3>
        <div className="profile-page-row-2">
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
      <Footer />
    </div>
  );
}
