import React, { useState } from 'react';
import './RideConfirmation.css';
import {MDBBtn} from 'mdb-react-ui-kit';

export default function RideConfirmation({ user, currentRide, handleShowConfirm, showConfirm }) {
    return (
        <>
        {showConfirm && (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Your driver is on the way!</h5>
                <img src={user.photoUrl} class='avatar' />
                <p>{user.name}</p>
                <h6>Ride Details</h6>
                <p>{currentRide.date}</p>
                <p>Pick Up: {currentRide.pickup}</p>
                <p>Drop Off: {currentRide.dropoff}</p>
                <MDBBtn onClick={handleShowConfirm}>Complete Ride</MDBBtn>
            </div>
        </div>
        )}
        </>
    )
}