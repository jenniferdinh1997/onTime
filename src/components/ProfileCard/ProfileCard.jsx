import React from 'react';
import './ProfileCard.css';
import { FaCreditCard, FaCar, FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ProfileCard({ user }) {
    return (
        <div className='prof-card'>
            <div className='row1'>
                <div className='info'>
                    <h1>{user.name}</h1>
                    <h6>{user.phone}</h6>
                    <h6>{user.email}</h6>
                </div>
                <img src={user.photoUrl} className='avatar' />
            </div>

            <div className='row2'>
                <div className='wallet'>
                    <FaCreditCard style={{fontSize: '2em', color: 'gray'}}/>
                    <p>Wallet</p>
                </div>

                <div className='trips'>
                    <Link to='/trip/#history'>
                        <FaCar style={{fontSize: '2em', color: 'gray'}}/>
                        <p>Trips</p>
                    </Link>
                </div>

                <div className='help'>
                    <FaQuestion style={{fontSize: '2em', color: 'gray'}}/>
                    <p>Help</p>
                </div>
            </div>
        </div>
    )
}