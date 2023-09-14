import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate, Link, useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { getDriver, getTrips } from "../../../utils/driverService";

const Home = () => {
    const driver = getDriver().message;
    const [tripCount, setTripCount] = useState(0);

    useEffect(() => {
        getTrips(driver._id).then((res) => {
            let amount = res.trips.length;
            setTripCount(amount);
        });
    }, []);

    return (
        <>
            <Header />
            <div className="driver-home-container">
                <h1>Welcome back, {driver.name}</h1>
                <section className="driver-stats-container">
                    <div className="driver-stats">
                        <p>Total Trips:</p>
                        <p>{tripCount}</p>
                    </div>
                    <div className="driver-stats">
                        <p>Total Earnings:</p>
                        <p>$ 100</p>
                    </div>
                </section>
            </div>
        </>
    )
};

export default Home;