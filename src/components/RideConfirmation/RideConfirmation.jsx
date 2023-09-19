import React, { useState } from "react";
import "./RideConfirmation.css";
import { useNavigate } from "react-router-dom";
import Map from "../Map/Map";

const RideConfirmation = ({ user, currentRide }) => {
    const navigate = useNavigate();

    const showHistory = () => {
        navigate(`/trip/history/${user.message._id}`);
    };

    const dateObject = new Date(currentRide.date);

    const optionsDate = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = dateObject.toLocaleDateString(
      "en-US",
      optionsDate
    );

    const optionsTime = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formattedTime = dateObject.toLocaleTimeString(
      "en-US",
      optionsTime
    );

    return (
        <div className="ride-confirm-container">
            <div className="ride-confirm-profile-info">
                <h5 className="card-title">Your driver is on the way!</h5>
                <img src={user.photoUrl} id="confirm-avatar" />
            </div>
            <h5>Ride Details</h5>
            <p>Date: {formattedDate}</p>
            <p>Time: {formattedTime}</p>
            <p>Pick Up: {currentRide.pickup}</p>
            <p>Drop Off: {currentRide.dropoff}</p>
            <button id="confirm-ride-btn" onClick={showHistory}>
                Complete Ride
            </button>
        </div>
    );
};

export default RideConfirmation;
