import React from 'react';
import Header from '../../components/Header/Header';
import { HashLink } from 'react-router-hash-link';
import './Home.css';

export default function Home({ user, handleLogout }) {
    return (
        <>
       <Header user={user} handleLogout={handleLogout} />
        <div className='p-5 text-center bg-light'>
            <h1 className='mb-3'>OnCall</h1>
            <h4 className='mb-3'>Your doctors are on call, so you can call on us.</h4>
            <HashLink className='btn btn-primary' to='/#about' role='button'>Learn More</HashLink>
        </div>

        <div className='about'>
            <h5 id="about">About Us</h5>
        </div>
        </>
    )
}