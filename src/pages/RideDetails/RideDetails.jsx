import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AddRideForm from '../../components/AddRideForm/AddRideForm';
import RideConfirmation from '../../components/RideConfirmation/RideConfirmation';
import * as rideApi from '../../utils/rideApi';

export default function AddRide({ user }) {
    const [currentRide, setCurrentRide] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // create a new ride
    async function handleAddRide(ride) {
        const data = await rideApi.create(ride);
        setCurrentRide(data.ride)
    }

    return (
        <>
            <Header user={user} />
            <AddRideForm handleAddRide={handleAddRide} />
            <RideConfirmation user={user} currentRide={currentRide} />
        </>
    )
}