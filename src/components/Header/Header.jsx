import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ user }) {
    if (user) {
        return (
        <>
            <Link to='/'>App Name</Link>
            <img src={user.photoUrl} />
            <h1>{user.name}</h1>
            <h1>See Ride History</h1>
            <h1>Log Out</h1>
        </>
        )
        }

    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
        </>
    )
}