import React from 'react';
import './RideHistory.css';

export default function RideHistory({ allRides, showHistory, deleteRide }) {
    console.log(allRides)
    const history = allRides.map((rides) => {
        return (
            <div className='historyCard' key={rides._id}>
                <p className='historyList'><span style={{fontWeight:'bold'}}>Date: </span>{rides.date}</p>
                <p className='historyList'><span style={{fontWeight:'bold'}}>Pick Up: </span> {rides.pickup}</p>
                <p className='historyList'><span style={{fontWeight:'bold'}}>Drop Off: </span> {rides.dropoff}</p>
                {/* <button id="edit-ride">Edit Ride</button> */}
                <button id="delete-ride" onClick={() => deleteRide(rides._id)}>Delete Ride</button>
            </div>
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