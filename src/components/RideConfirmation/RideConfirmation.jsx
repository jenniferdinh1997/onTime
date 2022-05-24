import React from 'react';

export default function RideConfirmation({ user, currentRide }) {
    return (
        <>
            <h1>Your driver is on the way!</h1>
            <img src={user.photoUrl} />
            <p>{user.name}</p>
            <h2>Ride Details</h2>
            <h3>{currentRide.date}</h3>
            <h3>Pick Up: {currentRide.pickup}</h3>
            <h3>Drop Off: {currentRide.dropoff}</h3>
        </>
    )
}