import React from 'react';

export default function Header({ user }) {
    return (
        <>
            <h1>App Name</h1>
            <img src={user.photoUrl} />
            <h1>{user.name}</h1>
            <h1>See Ride History</h1>
            <h1>Log Out</h1>
        </>
    )
}