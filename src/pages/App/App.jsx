import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import RideDetails from '../RideDetails/RideDetails';
import ProfilePage from '../ProfilePage/ProfilePage';
import Home from '../Home/Home';
import About from '../About/About';
import userService from "../../utils/userService";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route
          path='/'
          element={<Home user={user} handleLogout={handleLogout} />} />
        <Route 
          path="/trip" 
          element={<RideDetails user={user} />} /> 
        <Route
          path='/:name'
          element={<ProfilePage user={user} />} />
        <Route 
          path='/about'
          element={<About />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route 
        path="/*" 
        element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
