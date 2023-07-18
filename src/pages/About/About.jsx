import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";

export default function About({ user, handleLogout }) {
  return (
    <div className="about-page">
      <Header user={user} handleLogout={handleLogout} />
      <div className="about1">
        <img src={"/about-header.png"} className="about-header" />
        <h1 className="h1-about">About Us</h1>
      </div>

      <div className="about2">
        <img
          src={"/about2.jpg"}
          className="about2img"
        />
        <div className="about2-text-container">
          <h4>The Inspiration</h4>
          <p>
            Our founder had previously worked as a medical assistant at a clinic
            and noticed that many of the patients would either be late or cancel
            their appointments due to missing the bus, not having any family
            members to provide rides, or miscommunicating with their rideshare
            drivers.
          </p>
          <p>
            Not everyone knows to ask for special accommodations and language
            barriers can lead to an inconvenient experience for both the driver
            and passenger.
          </p>
        </div>
      </div>

      <div className="about3">
        <div className="about3-text-container">
          <h4>The Idea</h4>
          <p>
            How do we get these patients to their doctor's appointments in the
            most efficient and patient friendly way possible? Enter Healthshare.
            A rideshare for healthcare. 
          </p>
          <p>
            Healthshare is a rideshare app that matches patients specifically to a
            driver that speaks the same language and has a wheelchair accessible
            vehicle if needed. Gone are the days where language barriers prevent
            patients from getting to their destination. Patients will no longer
            have to struggle to fit their walking devices and wheelchairs into
            their cars because onTime will specifically match a patient with
            special accommodations to a car that fits exactly what they need.
          </p>
        </div>
        <img src={"/about3.png"} className="about3img" />
      </div>
      <Footer />
    </div>
  );
}
