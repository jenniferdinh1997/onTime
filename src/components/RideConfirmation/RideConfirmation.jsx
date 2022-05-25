import React from 'react';
import './RideConfirmation.css';

export default function RideConfirmation({ user, currentRide }) {
    return (
        <div class='card'>
            <div class='card-body'>
                <h5 class='card-title'>Your driver is on the way!</h5>
                <img src={user.photoUrl} class='avatar' />
                <p>{user.name}</p>
                <h6>Ride Details</h6>
                <p>{currentRide.date}</p>
                <p>Pick Up: {currentRide.pickup}</p>
                <p>Drop Off: {currentRide.dropoff}</p>
            </div>
        </div>
    )
}