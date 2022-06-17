import React, { useEffect, useState } from 'react';
import userService from "../../utils/userService";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { useParams } from "react-router-dom";
import './ProfilePage.css';

export default function ProfilePage() {
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const { name } = useParams();

    //show profile
    async function getProfile() {
        try {
            const data = await userService.getProfile(name);
            setUser(() => data.user);
        } catch(err) {
            setError('no profile');
        }
    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className='profile-page'>
            <Header user={user} />
            <ProfileCard user={user} />
            <Footer />
        </div>
    )
}