import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

export default function Header({ user }) {
    if (user) {
        return (
            <>
            <Link to='/'>App Name</Link>
            <Link to='/trip'>Request a Ride</Link>
            <Link to={`/${user.name}`}>See Ride History</Link>
            <Link to='/'>Log Out</Link>
            <Image src={user.photoUrl} avatar></Image>
            <h1>{user.name}</h1>
            </>
        )
    }

    return (
        <>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
        </>
    )
}