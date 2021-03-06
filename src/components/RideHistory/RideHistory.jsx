import React from 'react';
import './RideHistory.css';

export default function RideHistory({ allRides, showHistory }) {
    const history = allRides.map((rides) => {
        return (
            <div className='historyCard'>
                <p key={rides._id} className='historyList'><span style={{fontWeight:'bold'}}>Date: </span>{rides.date}</p>
                <p className='historyList'><span style={{fontWeight:'bold'}}>Pick Up: </span> {rides.pickup}</p>
                <p className='historyList'><span style={{fontWeight:'bold'}}>Drop Off: </span> {rides.dropoff}</p>
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