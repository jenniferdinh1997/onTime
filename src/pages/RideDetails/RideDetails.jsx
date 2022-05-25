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

    return (
        <>
            <Header user={user} />
            <AddRideForm handleAddRide={handleAddRide} />
            <RideConfirmation user={user} currentRide={currentRide} />
            <RideHistory user={user} allRides={allRides} />
        </>
    )
}