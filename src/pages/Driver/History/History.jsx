import React, { useState, useEffect } from "react";
import "./History.css";
import { useNavigate, Link, useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { getTrips } from "../../../utils/driverService";

const History = () => {
    const [trip, setTrip] = useState([]);
    const driverId = useParams().driverId;

    useEffect(() => {
        getTrips(driverId).then((res) => {
            setTrip(res.trips);
        });
    }, []);

    return (
      <>
        <Header />
        <div className="driver-history-container">
          <h3>Recent Trips</h3>
          <table className="driver-history-table">
            <thead>
              <tr>
                <td>Date</td>
                <td>Patient</td>
                <td>Pickup</td>
                <td>Dropoff</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              {trip.map((item, index) => {
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
                    <td>{item.user?.name}</td>
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

export default History;