import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './About.css';

export default function About({ user }) {
    return (
        <div>
            <Header user={user} />
            <div className='about1'>
                <img src={'/about-header.png'} className='about-header' />
                <h1 className='h1-about'>About Us</h1>
            </div>

            <div className='about2'>
                <h4>description</h4>
                <p>Our founder had previously worked as a medical assistant at a clinic and noticed that many of
                the patients would either be late or cancel their appointments due to missing the bus, not having
                any family members to provide rides, or miscommunicating with their rideshare drivers.</p>
            </div>

            <div className='about3'>
                <img src={'/about3.png'} className='about3img' />
            </div>

            <div className='about4'>
                <h4>description</h4>
                <p>How do we get these patients to their doctor's appointments in the most efficient and patient friendly 
                way possible? Enter onTime. onTime is a rideshare app that matches patients specifically to a driver that
                speaks the same language and has a wheelchair accessible vehicle if needed. Gone are the days where 
                language barriers prevent patients from getting to their destination. Patients will no longer have to struggle
                to fit their walking devices and wheelchairs into their cars because onTime will specifically match a patient
                with special accommodations to a car that fits exactly what they need.</p>
            </div>
            <Footer />
        </div>
    )
}