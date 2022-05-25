import React, { useState } from 'react';
import {
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function AddRideForm(props) {
    const [state, setState] = useState({
        date: '',
        pickup: '',
        dropoff: ''
    });
    const [showForm, setShowForm] = useState(true)

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

    function handleShowForm(e) {
        e.preventDefault();
        setShowForm(false)
    }

    return(
        <div className='card'>
        {showForm && (
        <>
        <h5>Where to?</h5>
            <form onSubmit={handleSubmit}>
                <MDBInput className='mb-3'
                    type='date' 
                    name='date'
                    value={state.date}
                    onChange={handleChange} />
                <MDBInput className='mb-3'
                    type='text'
                    name='pickup'
                    label='Pick Up Location' 
                    value={state.pickup}
                    onChange={handleChange} />
                <MDBInput className='mb-3'
                    type='text' 
                    name='dropoff'
                    label='Drop Off Location' 
                    value={state.dropoff}
                    onChange={handleChange} />
                <MDBBtn type='submit' onClick={handleShowForm}>Request Ride</MDBBtn>
            </form>
        </>
        )}
        </div>
    )
}