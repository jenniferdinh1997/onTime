import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AddRideForm from '../../components/AddRideForm/AddRideForm';
import RideConfirmation from '../../components/RideConfirmation/RideConfirmation';
import RideHistory from '../../components/RideHistory/RideHistory';
import Footer from '../../components/Footer/Footer';
import * as rideApi from '../../utils/rideApi';
import './RideDetails.css';

export default function AddRide({ user }) {
    const [currentRide, setCurrentRide] = useState('');
    const [allRides, setAllRides] = useState([]);
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(true)
    const [showConfirm, setShowConfirm] = useState(false)
    const [showHistory, setShowHistory] = useState(false)

    // create a new ride, hide form after user requests ride
    async function handleAddRide(ride) {
        try {
            const data = await rideApi.create(ride);
            setCurrentRide(data.ride)
            setAllRides([data.ride, ...allRides])
            setShowForm(false);
            setShowConfirm(true);
            setShowHistory(false);
        } catch(err) {
            setError(err.message);
        }
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

    //only show confirmation after user inputted ride, show history after ride is finished
    function handleShowConfirm(e) {
        e.preventDefault();
        setShowForm(false)
        setShowConfirm(false)
        setShowHistory(true)
    }

    //show ride history on click in header
    function handleShowHistory(e) {
        e.preventDefault();
        setShowForm(false);
        setShowHistory(true);
    }

    //take user back to form to edit ride
    function handleEditRide(e) {
        e.preventDefault();
        setShowForm(true)
        setShowConfirm(false);
    }

    return (
        <>
            <Header user={user} handleShowHistory={handleShowHistory} />
            <AddRideForm handleAddRide={handleAddRide} showForm={showForm} />
            <RideConfirmation user={user} currentRide={currentRide} handleShowConfirm={handleShowConfirm} showConfirm={showConfirm} handleEditRide = {handleEditRide} />
            <RideHistory user={user} allRides={allRides} showHistory={showHistory} />
            <Footer />
        </>
    )
}