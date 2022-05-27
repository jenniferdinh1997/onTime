import React, { useState } from "react";
import "./LoginPage.css";
import Header from '../../components/Header/Header';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function LoginPage(props) {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  //submits contents of individual sections on the form
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  //submits entire form
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate('/')
    } catch(err) {
      setError(err.message)
    }
  }

  return (
    <>
    <Header />
      <h3>Login to onTime</h3>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <MDBInput 
          className='mb-4'
          type='email'
          label='Email Address'
          name='email' 
          value={state.email}
          onChange={handleChange}
          required />
        <MDBInput
          className='mb-4' 
          type='password'
          label='Password'
          name='password'
          value={state.password}
          onChange={handleChange}
          required />
        <div className='text-center'>
          <MDBBtn type='submit' className='mb-4' color='light'>Log In</MDBBtn>
        </div>
      </form>
      <MDBRow className='text-center'>
        <MDBCol>
          <a href=''>Forgot password?</a>
        </MDBCol>
      </MDBRow>
      <p className='text-center'>
          Not a member? <a href='/signup'>Register</a>
      </p>
      {error ? <ErrorMessage error={error} /> : null}
    </>
  );
}
