import React, { useState } from "react";
import "./Login.css";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import { login } from "../../../utils/driverService";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage({ setDriver }) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
    role: "driver"
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
    await login(state).then((res) => {
      localStorage.setItem("driver", JSON.stringify(res));
      setDriver(res);
    });
    navigate("/");
  };

  return (
    <>
      <div className="loginPage">
        <div className="login-header-container">
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
                label="Password"
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
            <p className="member">Not a driver?</p>
            <Link to="/signup/driver" className="signup-link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
