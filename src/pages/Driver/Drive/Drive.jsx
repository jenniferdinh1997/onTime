import React, { useState, useEffect } from "react";
import "./Drive.css";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Passenger from "../../../components/Passenger/Passenger";
import {getAvailable} from "../../../utils/driverService";

const Drive = () => {
    const [available, setAvailable] = useState([]);
    const [updated, setUpdated] = useState({});

    useEffect(() => {
        getAvailable().then((res) => {
            setAvailable(res.available);
        })
    }, [updated]);

    return (
        <>
            <Header />
                <div className="drive-container">
                    <h1>Available Rides</h1>
                    <p>Accept a ride to get started</p>
                    <div className="drive-container_section">
                        {available.map((ride, index) => {
                            return (
                                <Passenger ride={ride} key={index} setUpdated={setUpdated}/>
                            )
                        })}
                    </div>
                </div>
        </>
    )
};

export default Drive;