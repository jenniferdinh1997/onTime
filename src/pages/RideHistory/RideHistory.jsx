import React , { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './RideHistory.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getRides } from "../../utils/rideApi";
import "./RideHistory.css";
import { MdLocationOn } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const RideHistory = () => {
    const [rides, setRides] = useState([]);
    const userId = useParams().userId;

    useEffect(() => {
        getRides(userId).then((res) => {
            setRides(res.ride);
        });
    }, []);

    return (
        <>
            <Header />
            <div className="ride-history-container">
                <h1>Ride History</h1>
                <div className="ride-history-container_rides">
                    {rides.map((ride, index) => {
                        const dateObject = new Date(ride.date);

                        const optionsDate = { year: "numeric", month: "long", day: "numeric"};
                        const formattedDate = dateObject.toLocaleDateString("en-US", optionsDate);

                        const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true};
                        const formattedTime = dateObject.toLocaleTimeString("en-US", optionsTime);

                        return (
                            <div key={index} id="ride-history-container_ride">
                                <div id="ride-history-time">
                                    <p id="ride-history-icon"><BiTimeFive /></p> &nbsp;
                                    <p>{formattedDate} - {formattedTime}</p>
                                </div>
                                <div id="ride-history-location">
                                    <p id="ride-history-icon"><MdLocationOn /></p> &nbsp;
                                    <p>{ride.pickup}  <BsArrowRight /> {ride.dropoff}</p>
                                </div>
                            </div>   
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
};

export default RideHistory;