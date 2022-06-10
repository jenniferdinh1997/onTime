import React, { useState } from 'react';
import './AddRideForm.css';

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
        {props.showForm && (
        <div className='card'>
        <h3>Where to?</h3>
            <form onSubmit={handleSubmit} className='addRideForm'>
                <label className='formLabel'>Date</label>
                <input
                    type='date' 
                    name='date'
                    value={state.date}
                    className='input'
                    onChange={handleChange} />
                <label className='formLabel'>Pick Up Location</label>
                <input
                    type='text'
                    name='pickup'
                    value={state.pickup}
                    className='input'
                    onChange={handleChange} />
                <label className='formLabel'>Drop Off Location</label>
                <input
                    type='text' 
                    name='dropoff'
                    value={state.dropoff}
                    className='input'
                    onChange={handleChange} />
                <button type='submit'>
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Request a Ride</span>
                </button>
            </form>
        </div>
        )}
        </>
    )
}