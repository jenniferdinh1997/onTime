import React from 'react';
import Header from '../../components/Header/Header';

export default function Home({ user, handleLogout }) {
    return (
        <>
       <Header user={user} handleLogout={handleLogout} />
        <div className='p-5 text-center bg-light'>
            <h1 className='mb-3'>Heading</h1>
            <h4 className='mb-3'>Subheading</h4>
            <a className='btn btn-primary' href='' role='button'>Call to action</a>
        </div>
        </>
    )
}