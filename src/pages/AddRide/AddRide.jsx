import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AddRideForm from '../../components/AddRideForm/AddRideForm';
import * as rideApi from '../../utils/rideApi';

export default function AddRide({ user }) {
    const [ride, setRide] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleAddRide(ride) {
        try {
            const data = rideApi.create(ride);
            console.log(data, 'response from server');
            setRide([data.ride, ...ride]);
            navigate()
        } catch(err) {
            console.log(err)
            setError(err.message);
        }
    }

    return (
        <>
            <Header user={user} />
            <AddRideForm handleAddRide={handleAddRide}/>
        </>
    )
}