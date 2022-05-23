import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit}>
        <input 
          type='email'
          name='email' 
          placeholder='Email'
          value={state.email}
          onChange={handleChange} />
        <input 
          type='password'
          name='password'
          placeholder='Password'
          value={state.password}
          onChange={handleChange} />
        <input
          type='submit' />
      </form>
    </>
  );
}
