import React, { useState } from 'react';

export default function AddRideForm(props) {
    const [state, setState] = useState({
        date: '',
        pickup: '',
        dropoff: ''
    });

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData()
        for (let fieldName in state) {
            formData.append(fieldName, state[fieldName])
          }
        props.handleAddRide(formData);
    }

    return(
        <>
        <h1>Where to?</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='date' 
                    name='date'
                    value={state.date}
                    onChange={handleChange} />
                Pick Up Location: <input 
                    type='text'
                    name='pickup'
                    placeholder='Address' 
                    value={state.pickup}
                    onChange={handleChange} />
                Drop Off Location: <input 
                    type='text' 
                    name='dropoff'
                    placeholder='Address' 
                    value={state.dropoff}
                    onChange={handleChange} />
                <input 
                    type='submit' />
            </form>
        </>
    )
}