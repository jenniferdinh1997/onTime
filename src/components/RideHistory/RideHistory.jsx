import React from 'react';

export default function RideHistory({ allRides, showHistory }) {
    const history = allRides.map((rides) => {
        return (
            <p key={rides._id}>Date: {rides.date} Pick Up: {rides.pickup} Drop Off: {rides.dropoff}</p>
        );
    })

    return (
        <>
        {showHistory && (
        <div className='card'>
            <div className='card-body'>
                <h6 id='history'>Ride History</h6>
                {history}
            </div>
        </div>
        )}
        </>
    )
}