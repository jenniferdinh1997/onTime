import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AddRideForm from '../../components/AddRideForm/AddRideForm';
import RideConfirmation from '../../components/RideConfirmation/RideConfirmation';
import RideHistory from '../../components/RideHistory/RideHistory';
import * as rideApi from '../../utils/rideApi';

export default function AddRide({ user }) {
    const [currentRide, setCurrentRide] = useState('');
    const [allRides, setAllRides] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // create a new ride
    async function handleAddRide(ride) {
        const data = await rideApi.create(ride);
        setCurrentRide(data.ride)
        setAllRides([data.ride, ...allRides])
    }

    //show all the rides
    async function getRides() {
        try {
            const data = await rideApi.getAll();
            setAllRides([...data.ride]);
        } catch(err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        getRides();
    }, []);

    //show form on load, delete form after user requests ride
    const [showForm, setShowForm] = useState(true)
    const [showConfirm, setShowConfirm] = useState(false)
    const [showHistory, setShowHistory] = useState(false)
    function handleShowForm(e) {
        e.preventDefault();
        setShowForm(false);
        setShowConfirm(true);
        setShowHistory(false);
    }

    //only show confirmation after user inputted ride
    function handleShowConfirm(e) {
        e.preventDefault();
        setShowConfirm(false)
        setShowHistory(true)
    }

    return (
        <>
            <Header user={user} />
            <AddRideForm handleAddRide={handleAddRide} handleShowForm={handleShowForm} showForm={showForm} />
            <RideConfirmation user={user} currentRide={currentRide} handleShowConfirm={handleShowConfirm} showConfirm={showConfirm} />
            <RideHistory user={user} allRides={allRides} showHistory={showHistory} />
        </>
    )
}