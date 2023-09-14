import React, { useState } from "react";
import "./Passenger.css";
import { useNavigate, Link } from "react-router-dom";
import Default from "../../assets/default.jpg";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { acceptRide, getDriver } from "../../utils/driverService";

const Passenger = ({ ride, setUpdated }) => {
    const driver = getDriver().message;

    const accept = () => {
        acceptRide(ride._id, driver._id).then((res) => {
            setUpdated(res);
        });
    };

    return (
        <div className="passenger-container">
            <img
                src={Default}
                className="passenger-photo"
            />
            <p id="passenger-name">{ride.user?.name}</p>
            <p id="passenger-request-time">15 min. ago</p>
            <div className="passenger-destinations">
                <p>{ride.pickup}</p>
                <HiOutlineEllipsisVertical />
                <p>{ride.dropoff}</p>
            </div>
            <button id="accept-passenger-btn" onClick={accept}>
                Accept
            </button>
        </div>
    )
};

export default Passenger;