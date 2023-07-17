import React, { useState } from "react";
import "./RideConfirmation.css";
import { useNavigate } from "react-router-dom";
import Map from "../Map/Map";

const RideConfirmation = ({ user, currentRide }) => {
    const navigate = useNavigate();

    const showHistory = () => {
        navigate("/trip/history");
    };

    return (
        <div className="ride-confirm-container">
            <div className="ride-confirm-profile-info">
                <h5 className="card-title">Your driver is on the way!</h5>
                <img src={user.photoUrl} id="confirm-avatar" />
                <p>{user.message.name}</p>
            </div>
            <h5>Ride Details</h5>
            <p>Date: {currentRide.date}</p>
            <p>Pick Up: {currentRide.pickup}</p>
            <p>Drop Off: {currentRide.dropoff}</p>
            <button id="confirm-ride-btn" onClick={showHistory}>
                Complete Ride
            </button>
        </div>
    );
};

export default RideConfirmation;
