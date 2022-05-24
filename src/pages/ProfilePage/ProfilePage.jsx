import React, { useEffect, useState } from 'react';
import RideHistory from '../../components/RideHistory/RideHistory';
import * as rideApi from '../../utils/rideApi';
import userService from "../../utils/userService";
import Header from '../../components/Header/Header';
import { useParams } from "react-router-dom";

export default function ProfilePage() {
    const [allRides, setAllRides] = useState([]);
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const { name } = useParams();

    //show profile
    async function getProfile() {
        try {
            const data = await userService.getProfile(name);
            setUser(() => data.user);
        } catch(err) {
            console.log(err)
            setError('no profile');
        }
    }

    useEffect(() => {
        getProfile();
    }, []);

    //show all rides
    async function getRides() {
        try {
            const data = await rideApi.getAll();
            console.log(data, 'ride api data')
            setAllRides([data])
        } catch(err) {
            setError(err.message);
        }
    }
    
    useEffect(() => {
        getRides();
    }, []);

    return (
        <>
            <Header user={user} />
            <RideHistory allRides={allRides} user={user} />
        </>
    )
}