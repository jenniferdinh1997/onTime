import React from 'react';
import './ProfileCard.css';

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
        </div>
    )
}