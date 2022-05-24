import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Image } from 'semantic-ui-react';

export default function Header({ user }) {
    if (user) {
        return (
            <>
            <Link to='/'>App Name</Link>
            <Link to='/trip'>Request a Ride</Link>
            <HashLink smooth to='/trip/#history'>See Ride History</HashLink>
            <Link to='/'>Log Out</Link>
            <Image src={user.photoUrl} avatar></Image>
            <Link to={`/${user.name}`}>{user.name}</Link>
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