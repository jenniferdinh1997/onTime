import React, { useState, useRef, useEffect } from "react";
import "./AddRideForm.css";
import { getUser } from "../../utils/userService";

const AddRideForm = ({ handleAddRide }) => {
  const currentUser = getUser();
  const autoCompleteRef1 = useRef();
  const inputRef1 = useRef();
  const autoCompleteRef2 = useRef();
  const inputRef2 = useRef();
  
  useEffect(() => {
    autoCompleteRef1.current = new window.google.maps.places.Autocomplete(
      inputRef1.current
    );
    autoCompleteRef1.current.addListener("place_changed", async function () {
      const place1 = await autoCompleteRef1.current.getPlace();
      setTrip((prev) => ({...prev, pickup: place1.formatted_address}));
    });
    autoCompleteRef2.current = new window.google.maps.places.Autocomplete(
      inputRef2.current
    );
    autoCompleteRef2.current.addListener("place_changed", async function () {
      const place2 = await autoCompleteRef2.current.getPlace();
      setTrip((prev) => ({...prev, dropoff: place2.formatted_address}));
    });
  }, []);

  const [trip, setTrip] = useState({
    user: currentUser.message,
    pickup:"",
    dropoff: ""
  });

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
          className="input"
          ref={inputRef1}
        />
        <label className="formLabel">Drop Off Location</label>
        <input
          type="text"
          name="dropoff"
          className="input"
          ref={inputRef2}
        />
        <button type="submit" id="submit-add-ride-btn">
          <span className="label">Request a Ride</span>
        </button>
      </form>
    </div>
  );
};

export default AddRideForm;
