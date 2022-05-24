import React from 'react';

export default function RideConfirmation({ user,ride }) {
    return (
        <>
            <h1>Your driver is on the way!</h1>
            <img src={user.photoUrl} />
            <p>{user.name}</p>
            <h2>Ride Details</h2>
            <h3>From:{ride.pickup}</h3>
        </>
    )
}