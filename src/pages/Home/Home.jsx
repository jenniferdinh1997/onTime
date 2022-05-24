import React from 'react';
import Header from '../../components/Header/Header';

export default function Home({ user }) {
    return (
        <>
            <Header user={user} />
            <h1>App Name and Caption</h1>
            <p>About Us</p>
        </>
    )
}