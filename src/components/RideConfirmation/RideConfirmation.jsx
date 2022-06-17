import React, { useState } from 'react';
import './RideConfirmation.css';

export default function RideConfirmation({ user, currentRide, handleShowConfirm, showConfirm, handleEditRide }) {
    return (
        <>
        {showConfirm && (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Your driver is on the way!</h5>
                <img src={user.photoUrl} class='avatar' />
                <p>{user.name}</p>
                <h6>Ride Details</h6>
                <p>Date: {currentRide.date}</p>
                <p>Pick Up: {currentRide.pickup}</p>
                <p>Drop Off: {currentRide.dropoff}</p>
                <button onClick={handleShowConfirm}>
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Complete Ride</span>
                </button>
                <button onClick={handleEditRide}>
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Edit Ride</span>
                </button>
            </div>
        </div>
        )}
        </>
    )
}