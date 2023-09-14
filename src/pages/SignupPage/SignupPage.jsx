import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import "./SignupPage.css";
import { GiHealthCapsule } from "react-icons/gi";
import { MdOutlineDriveEta } from "react-icons/md";
import { GiTimeBomb } from "react-icons/gi";

export default function SignUpPage(props) {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    language: "English",
    accessibility: "",
    password: "",
    role: "rider"
  });
  // const [file, setFile] = useState('');
  const navigate = useNavigate();

  const [authRequest, setAuthRequest] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setAuthRequest({ ...authRequest, [e.target.name]: e.target.value });
  }

  // function handleFileInput(e) {
  //   setFile(e.target.files[0]) //places our uploaded file in the first place of files array
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData()
    // formData.append('photo', file)

    // for (let fieldName in state) {
    //   formData.append(fieldName, state[fieldName])
    // }
    await userService.signup(user).then((res) => {
      localStorage.setItem("jwttoken", JSON.stringify(res));
    });
    await userService.login(authRequest).then((res) => {
      localStorage.setItem("user", JSON.stringify(res));
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
        <form autoComplete="off" onSubmit={handleSubmit} className="signupForm">
          <h3>Get Started with Healthshare</h3>
          <div className="nameSU">
            <label className="formLabel">Name (required)</label>
            <input
              type="text"
              name="name"
              value={user.name}
              className="input"
              onChange={handleChange}
            />
          </div>

          <div className="dobSU">
            <label className="formLabel">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={user.dob}
              className="input"
              onChange={handleChange}
            />
          </div>

          <div className="phoneSU">
            <label className="formLabel">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={user.phone}
              className="input"
              onChange={handleChange}
            />
          </div>

          <div className="emailSU">
            <label className="formLabel">Email (required)</label>
            <input
              type="text"
              name="email"
              value={user.email}
              className="input"
              onChange={handleChange}
            />
          </div>

          <div className="langSU">
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

          <div className="accSU">
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

          <div className="pwSU">
            <label className="formLabel">Password (required)</label>
            <input
              type="password"
              name="password"
              value={user.password}
              className="input"
              onChange={handleChange}
            />
          </div>

          {/* <div className='uploadSU'>
            <label className='formLabel'>Upload Photo: </label>
            <label className='uploadLabel' for='upload-btn'>Choose File</label>
            <input
              type='file' 
              name='photo'
              id='upload-btn'
              onChange={handleFileInput} 
              hidden />
          </div> */}
          <div className="submitSU">
            <button type="submit" id="signup-form_btn">
              Sign Up
            </button>
            <p>
              Have an account?{" "}
              <Link to="/login" id="nav-to-login">
                Login
              </Link>
            </p>
            <Link to="/signup/driver" id="nav-to-login">
              Drive with Healthshare
            </Link>
          </div>
        </form>

        {/* <div className="error">
          {error ? <ErrorMessage error={error} /> : null}
        </div> */}
      </div>
    </>
  );
}
