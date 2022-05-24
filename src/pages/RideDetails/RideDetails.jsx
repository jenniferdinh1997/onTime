import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AddRideForm from '../../components/AddRideForm/AddRideForm';
import RideConfirmation from '../../components/RideConfirmation/RideConfirmation';
import * as rideApi from '../../utils/rideApi';

export default function AddRide({ user }) {
    const [ride, setRide] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    //create a new ride
    async function handleAddRide(ride) {
        try {
            const data = await rideApi.create(ride);
            console.log(data, 'response from server');
            setRide([data.ride, ...ride]);
        } catch(err) {
            console.log(err, 'error')
            setError(err.message)
        }
    }

    //show current ride
    async function currentRide() {
        try {
            const data = await rideApi.getAll();
            console.log(data, 'this is data');
            setRide([data.ride]);
        } catch(err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        currentRide();
    }, []);

    return (
        <>
            <Header user={user} />
            <AddRideForm handleAddRide={handleAddRide}/>
            <RideConfirmation user={user} ride={ride}/>
        </>
    )
}