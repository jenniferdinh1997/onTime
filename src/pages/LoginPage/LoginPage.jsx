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
  MDBCheckbox,
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
      <form onSubmit={handleSubmit}>
        <MDBInput 
          className='mb-4'
          type='email'
          label='Email Address'
          name='email' 
          value={state.email}
          onChange={handleChange} />
        <MDBInput
          className='mb-4' 
          type='password'
          label='Password'
          name='password'
          value={state.password}
          onChange={handleChange} />

        <MDBRow className='mb-4'>
          <MDBCol className='d-flex justify-content-center'>
            <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
          </MDBCol>
          <MDBCol>
            <a href='#!'>Forgot password?</a>
          </MDBCol>
        </MDBRow>

        <MDBBtn type='submit' className='mb-4'>Log In</MDBBtn>
      </form>

      <p>
          Not a member? <a href='/signup'>Register</a>
      </p>
    </>
  );
}
