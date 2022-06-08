import React from 'react';
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';
import { HashLink } from 'react-router-hash-link';
import './Home.css';

export default function Home({ user, handleLogout }) {
    return (
        <div className='whole-body'>
            <Header user={user} handleLogout={handleLogout} />
            <Intro />
            <div className='p-5 text-center bg-light'>
                <h4 id="about">About Us</h4>
                <p>Our founder had previously worked as a medical assistant at a clinic and noticed that many of
                the patients would either be late or cancel their appointments due to missing the bus, not having
                any family members to provide rides, or miscommunicating with their rideshare drivers.</p>
                <br />
                <p>How do we get these patients to their doctor's appointments in the most efficient and patient friendly 
                way possible? Enter onTime. onTime is a rideshare app that matches patients specifically to a driver that
                speaks the same language and has a wheelchair accessible vehicle if needed. Gone are the days where 
                language barriers prevent patients from getting to their destination. Patients will no longer have to struggle
                to fit their walking devices and wheelchairs into their cars because onTime will specifically match a patient
                with special accommodations to a car that fits exactly what they need.
                </p>
                <br />
                <p>Drivers are questioned and interviewed thoroughly to ensure quality and compassionate care to passengers.</p>
            </div>
        </div>
    )
}