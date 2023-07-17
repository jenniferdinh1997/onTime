import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AddRideForm from '../../components/AddRideForm/AddRideForm';
import RideConfirmation from '../../components/RideConfirmation/RideConfirmation';
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map/Map';
import { addRide } from '../../utils/rideApi';
import './RideDetails.css';

export default function AddRide({ user, handleLogout }) {
    const [currentRide, setCurrentRide] = useState({});
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [showConfirm, setShowConfirm] = useState(false)
    const [showHistory, setShowHistory] = useState(false)

    // create a new ride, hide form after user requests ride
    const handleAddRide = async (ride) => {
        try {
            await addRide(ride).then((res) => {
                setCurrentRide(res.ride);
            });
            setShowForm(false);
            setShowConfirm(true);
            // setShowHistory(false);
        } catch(err) {
            setError(err.message);
        }
    };

    //show all the rides
    // async function getRides() {
    //     try {
    //         const data = await rideApi.getAll();
    //         setAllRides([...data.ride]);
    //     } catch(err) {
    //         setError(err.message);
    //     }
    // }

    // useEffect(() => {
    //     getRides();
    // }, []);

    //show ride form on click in header
    function handleShowForm(e) {
        e.preventDefault();
        setShowForm(true);
        setShowConfirm(false)
        setShowHistory(false);
    }

    //delete a ride
    // function deleteRide(_id) {
    //     setAllRides(allRides.filter((ride) => _id !== ride._id))
    // }

    return (
      <div className="rides">
        <Header
          user={user}
          handleShowForm={handleShowForm}
          handleLogout={handleLogout}
        />
        {showForm ? (
            <AddRideForm handleAddRide={handleAddRide} />
        ): null }
        {showConfirm ? (
            <RideConfirmation
                user={user}
                currentRide={currentRide}
            />
        ): null}
        <Footer />
      </div>
    );
}