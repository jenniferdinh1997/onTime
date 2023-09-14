import React from "react";
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import Footer from "../../components/Footer/Footer";
import { HashLink } from "react-router-hash-link";
import Home1 from "../../assets/home1.png";
import Home2 from "../../assets/home2.png";
import "./Home.css";

export default function Home({ user, handleLogout }) {
  return (
    <div className="whole-body">
      <Header user={user} handleLogout={handleLogout} />
      <Intro />
      <div className="description">
        <h4 id="description-header">
          Let us take care of your transportation so you can take care of
          yourself
        </h4>
        <div className="desc-left">
          <img src={Home1} className="home1" />
          <h6>Quality Care </h6>
          <p>
            Drivers are interviewed thoroughly and required CPR certification to
            ensure quality and compassionate care to passengers. Your safety and
            well-being is our highest priority.{" "}
          </p>
        </div>

        <div className="desc-right">
          <img src={Home2} className="home2" />
          <h6>Patient-Driver Compatibility</h6>
          <p>
            Patients are matched specifically to a driver that speaks the same
            language and has a WAV if needed.
          </p>
        </div>
      </div>
      
      <div className="reviews">
        <div className="review-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="reivew-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="reivew-e">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
