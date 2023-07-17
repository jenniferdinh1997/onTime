import React , { useState, useEffect } from 'react';
import './RideHistory.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getRides } from "../../utils/rideApi";
import "./RideHistory.css";

const RideHistory = () => {
    // console.log(allRides)
    // const history = allRides.map((rides) => {
    //     return (
    //         <div className='historyCard' key={rides._id}>
    //             <p className='historyList'><span style={{fontWeight:'bold'}}>Date: </span>{rides.date}</p>
    //             <p className='historyList'><span style={{fontWeight:'bold'}}>Pick Up: </span> {rides.pickup}</p>
    //             <p className='historyList'><span style={{fontWeight:'bold'}}>Drop Off: </span> {rides.dropoff}</p>
    //             {/* <button id="edit-ride">Edit Ride</button> */}
    //             <button id="delete-ride" onClick={() => deleteRide(rides._id)}>Delete Ride</button>
    //         </div>
    //     );
    // })

    // return (
    //     <>
    //     {showHistory && (
    //     <div className='card'>
    //         <h3 id='history'>Ride History</h3>
    //         <div className='card-body'>
    //             {history}
    //         </div>
    //     </div>
    //     )}
    //     </>
    // )
    const [rides, setRides] = useState([]);

    useEffect(() => {
        getRides().then((res) => {
            setRides(res.ride);
        });
    }, []);

    return (
        <>
            <Header />
            <div className="ride-history-container">
                <h1>Ride History</h1>
                <div className="ride-history-container_rides">
                    {rides.map((ride, index) => {
                        return (
                            <div key={index} id="ride-history-container_ride">
                                <p>{ride.date}</p>
                            </div>   
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
};

export default RideHistory;