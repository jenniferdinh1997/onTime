import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import RideDetails from "../RideDetails/RideDetails";
import ProfilePage from "../ProfilePage/ProfilePage";
import Home from "../Home/Home";
import About from "../About/About";
import RideHistory from "../RideHistory/RideHistory";
import userService from "../../utils/userService";

function App() {
  const [user, setUser] = useState(userService.getUser());

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  return (
    <>
      {user ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={<Home user={user} handleLogout={handleLogout} />}
          />
          <Route
            path="/trip"
            element={<RideDetails user={user} handleLogout={handleLogout} />}
          />
          <Route
            path="/trip/history"
            element={<RideHistory user={user} handleLogout={handleLogout} />}
          />
          <Route
            path="/:name"
            element={<ProfilePage user={user} handleLogout={handleLogout} />}
          />
          <Route
            path="/about"
            element={<About user={user} handleLogout={handleLogout} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage setUser={setUser}/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
