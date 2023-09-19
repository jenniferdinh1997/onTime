import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AddRideForm from '../../components/AddRideForm/AddRideForm';
import RideConfirmation from '../../components/RideConfirmation/RideConfirmation';
import Footer from '../../components/Footer/Footer';
import MapBackground from '../../components/Map/Map';
import { addRide } from '../../utils/rideApi';
import './RideDetails.css';
// import { useJsApiLoader } from "@react-google-maps/api";

export default function AddRide({ user, handleLogout }) {
    const [currentRide, setCurrentRide] = useState({});
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [showConfirm, setShowConfirm] = useState(false)

    const handleAddRide = async (ride) => {
        try {
            await addRide(ride).then((res) => {
                setCurrentRide(res.ride);
            });
            setShowForm(false);
            setShowConfirm(true);
        } catch(err) {
            setError(err.message);
        }
    };

    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: process.env.MAPS_API_KEY,
    // });

    // if (!isLoaded) {
    //     console.log("loading in progress")
    // }

    return (
      <div>
        <Header
          user={user}
          handleLogout={handleLogout}
        />
        <div className="ride-container">
            {showForm ? (
                <AddRideForm handleAddRide={handleAddRide} />
            ): null }
            {showConfirm ? (
                <RideConfirmation
                    user={user}
                    currentRide={currentRide}
                />
            ): null}
        </div>
        <MapBackground />
      </div>
    );
}