import React, { useState } from "react";
import "./LoginPage.css";
import Header from "../../components/Header/Header";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function LoginPage({ setUser }) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
    role: "rider"
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await userService.login(state).then((res) => {
      localStorage.setItem("user", JSON.stringify(res));
      setUser(res);
    });
    navigate("/");
  };

  return (
    <>
      <div className="loginPage">
        <div className="login-header-container">
          <div className="left-nav">
            <Link to="/">
              <img src={Logo} className="header-logo" />
            </Link>
          </div>

          <div className="right-nav">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
        <div className="loginCard">
          <h3>Get Started</h3>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="loginForm"
          >
            <div className="emailLI">
              <label className="formLabel">Email</label>
              <input
                type="email"
                name="email"
                value={state.email}
                className="input"
                onChange={handleChange}
                required
              />
            </div>
            <div className="pwLI">
              <label className="formLabel">Password</label>
              <input
                type="password"
                name="password"
                value={state.password}
                className="input"
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-container_btn">
              <button type="submit" id="login-page_login-btn">
                Log In
              </button>
            </div>
          </form>

          <div className="error">
            {error ? <ErrorMessage error={error} /> : null}
          </div>

          <div className="signup">
            <p className="member">Not a member?</p>
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
