import React, { useState } from 'react';
import Header from '../../components/Header/Header';

export default function AddRide({ user }) {
    const [state, setState] = useState({
        date: '',
        pickup: '',
        dropoff: ''
    });

    function handleChange() {

    }
    
    function handleSubmit() {

    }

    return (
        <>
            <Header user={user} />
            <h1>Where to?</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='date' 
                    onChange={handleChange} />
                Pick Up Location: <input 
                    type='text' 
                    placeholder='Address' 
                    onChange={handleChange} />
                Drop Off Location: <input 
                    type='text' 
                    placeholder='Address' 
                    onChange={handleChange} />
                <input 
                    type='submit' />
            </form>
        </>
    )
}