import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RideHistory.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getRides } from "../../utils/rideApi";
import "./RideHistory.css";

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
        <table className="driver-history-table">
            <thead>
              <tr>
                <td>Date</td>
                <td>Driver</td>
                <td>Pickup</td>
                <td>Dropoff</td>
                <td>Cost</td>
              </tr>
            </thead>
            <tbody>
              {rides.map((item, index) => {
                const dateObject = new Date(item.date);

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
                  <tr key={index}>
                    <td>{formattedDate}</td>
                    <td>{item.driver?.name ? item.driver.name : "Driver details unavailable"}</td>
                    <td>{item.pickup}</td>
                    <td>{item.dropoff}</td>
                    <td>$10</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
      </div>
    </>
  );
};

export default RideHistory;
