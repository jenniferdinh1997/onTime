import React, { useState } from "react";
import "./LoginPage.css";
import Header from '../../components/Header/Header';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";

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
      <div className='loginPage'>
        <div className='login-border'></div>
        <div className='mainLogo'>
          <h1>onTime</h1>
        </div>

        <div className='loginCard'>
          <h3>Get Started</h3>
          <form autoComplete='off' onSubmit={handleSubmit} className='loginForm'>
            <div className='emailLI'>
              <label className='formLabel'>Email</label>
              <input 
                type='email'
                name='email' 
                value={state.email}
                className='input'
                onChange={handleChange}
                required />
            </div>
            <div className='pwLI'>
              <label className='formLabel'>Password</label>
              <input
                type='password'
                label='Password'
                name='password'
                value={state.password}
                className='input'
                onChange={handleChange}
                required />
            </div>
            <button type='submit'>
              <span className="transition"></span>
              <span className="gradient"></span>
              <span className="label">Log In</span>
            </button>
          </form>

          <div className='signup'>
            <p className='member'>Not a member?</p> 
            <Link to='/signup' className='signup-link'>Sign Up</Link>
          </div>

          {error ? <ErrorMessage error={error} /> : null}
        </div>
      </div>
    </>
  );
}
