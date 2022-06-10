import React from 'react';
import './RideHistory.css';

export default function RideHistory({ allRides, showHistory }) {
    const history = allRides.map((rides) => {
        return (
            <p key={rides._id}>Date: {rides.date} Pick Up: {rides.pickup} Drop Off: {rides.dropoff} </p>
        );
    })

    return (
        <>
        {showHistory && (
        <div className='card'>
            <h3 id='history'>Ride History</h3>
            <div className='card-body'>
                {history}
            </div>
        </div>
        )}
        </>
    )
}