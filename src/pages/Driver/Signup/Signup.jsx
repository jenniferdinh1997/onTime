import React, { useState } from "react";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import driverService from "../../../utils/driverService";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";
import { GiHealthCapsule } from "react-icons/gi";
import { MdOutlineDriveEta } from "react-icons/md";
import { GiTimeBomb } from "react-icons/gi";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    language: "English",
    carMake: "",
    carModel: "",
    carYear: 2000,
    carColor: "",
    accessibility: "",
    password: "",
    role: "driver"
  });

  const [authRequest, setAuthRequest] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setAuthRequest({ ...authRequest, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await driverService.signup(user).then((res) => {
      console.log(res, "driver res");
      localStorage.setItem("jwttoken", JSON.stringify(res));
    });
    await driverService.login(authRequest).then((res) => {
      console.log(res, "res2");
      localStorage.setItem("driver", JSON.stringify(res));
    });
    navigate("/");
  };

  return (
    <>
      <div className="signup-container">
        <div className="side-blurb">
          <div id="side-blurb-text">
            <span>
              <GiHealthCapsule />
            </span>
            <p>Top Notch Care</p>
          </div>
          <div id="side-blurb-text">
            <span>
              <MdOutlineDriveEta />
            </span>
            <p>Driver-Passenger Compatibility</p>
          </div>
          <div id="side-blurb-text">
            <span>
              <GiTimeBomb />
            </span>
            <p>Minimal Wait Times</p>
          </div>
        </div>

        <form className="driver-signup-form" onSubmit={handleSubmit}>
          <h3>Drive with Healthshare</h3>
          <div className="driver-signup_name">
            <label className="formLabel">Name (required)</label>
            <input
              type="text"
              className="input"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="driver-signup_dob">
            <label className="formLabel">Date of Birth</label>
            <input
              type="date"
              className="input"
              name="dob"
              value={user.dob}
              onChange={handleChange}
            />
          </div>
          <div className="driver-signup_phone">
            <label className="formLabel">Phone Number</label>
            <input
              type="tel"
              className="input"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
          <div className="driver-signup_email">
            <label className="formLabel">Email (required)</label>
            <input
              type="email"
              className="input"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="driver-signup_lang">
            <label className="formLabel">Language</label>
            <select
              className="input"
              name="language"
              value={user.language}
              onChange={handleChange}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Mandarin">Mandarin</option>
              <option value="French">French</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="driver-signup_acc">
            <label className="formLabel">Accessibility</label>
            <div className="radio">
              <input
                type="radio"
                name="accessibility"
                value="yes"
                id="yes"
                className="input"
                onChange={handleChange}
              />
              <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                name="accessibility"
                value="no"
                id="no"
                className="input"
                onChange={handleChange}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className="driver-signup_pw">
            <label className="formLabel">Password (required)</label>
            <input
              type="password"
              name="password"
              value={user.password}
              className="input"
              onChange={handleChange}
            />
          </div>
          <div className="driver-signup_make">
            <label className="formLabel">Car Make</label>
            <input
              type="text"
              className="input"
              name="carMake"
              value={user.carMake}
              onChange={handleChange}
            />
          </div>
          <div className="driver-signup_model">
            <label className="formLabel">Car Model</label>
            <input
              type="text"
              className="input"
              name="carModel"
              value={user.carModel}
              onChange={handleChange}
            />
          </div>
          <div className="driver-signup_year">
            <label className="formLabel">Car Year</label>
            <input
              type="number"
              className="input"
              name="carYear"
              value={user.carYear}
              onChange={handleChange}
            />
          </div>
          <div className="driver-signup_color">
            <label className="formLabel">Car Color</label>
            <input
              type="text"
              className="input"
              name="carColor"
              value={user.carColor}
              onChange={handleChange}
            />
          </div>
          <div className="driver-signup_submit">
            <button type="submit" id="signup-form_btn">
              Sign Up
            </button>
            <p>
              Already driving? &nbsp;
              <Link to="/login/driver" id="nav-to-login">
                Login
              </Link>
            </p>
            <Link to="/signup" id="nav-to-login">
              Ride with Healthshare
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
