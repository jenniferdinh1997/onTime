import React from 'react';

export default function RideHistory({ allRides }) {
    const history = allRides.map((rides) => {
        return (
            <p key={rides._id}>Date: {rides.date} Pick Up: {rides.pickup} Drop Off: {rides.dropoff}</p>
        );
    })

    return (
        <div>
            <h1 id='history'>Ride History</h1>
            {history}
        </div>
    )
}