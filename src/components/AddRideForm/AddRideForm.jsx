import React, { useState } from "react";
import "./AddRideForm.css";
import { getUser } from "../../utils/userService";

const AddRideForm = ({ handleAddRide }) => {
  const currentUser = getUser();

  const [trip, setTrip] = useState({
    user: currentUser.message,
    pickup: "",
    dropoff: ""
  });

  function handleChange(e) {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleAddRide(trip);
  };

  return (
    <div className="card">
      <h3>Where to?</h3>
      <form onSubmit={handleSubmit} className="addRideForm">
        <label className="formLabel">Pick Up Location</label>
        <input
          type="text"
          name="pickup"
          value={trip.pickup}
          className="input"
          onChange={handleChange}
        />
        <label className="formLabel">Drop Off Location</label>
        <input
          type="text"
          name="dropoff"
          value={trip.dropoff}
          className="input"
          onChange={handleChange}
        />
        <button type="submit" id="submit-add-ride-btn">
          <span className="label">Request a Ride</span>
        </button>
      </form>
    </div>
  );
};

export default AddRideForm;
