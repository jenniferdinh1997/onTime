import React from 'react';
import {MDBBtn} from 'mdb-react-ui-kit';

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
            <h6 id='history'>Ride History</h6>
            <div className='card-body'>
                {history}
            </div>
        </div>
        )}
        </>
    )
}