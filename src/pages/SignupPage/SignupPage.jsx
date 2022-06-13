import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Header from '../../components/Header/Header';
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import './SignupPage.css';

export default function SignUpPage(props) {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    name: '',
    dob: '',
    email: '',
    phone: '',
    language: '',
    accessibility: '',
    password: ''
  });
  const [file, setFile] = useState('');
  const navigate = useNavigate();

  //submits contents of each individual section on the form
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  //submits the user's avatar photo
  function handleFileInput(e) {
    setFile(e.target.files[0]) //places our uploaded file in the first place of files array
  }

  //submits entire contents of the form
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData()
    formData.append('photo', file)

    for (let fieldName in state) {
      formData.append(fieldName, state[fieldName])
    }

    try {
      await userService.signup(formData)
      props.handleSignUpOrLogin();
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <Header />
      <h3 className='loginh3'>Sign up for onTime</h3>
      <form autoComplete='off' onSubmit={handleSubmit} className='signupForm'>
        <div className='nameSU'>
          <label className='formLabel'>Name (required)</label>
          <input
            type='text' 
            name='name' 
            value={state.name}
            className='input'
            onChange={handleChange} />
        </div>

        <div className='dobSU'>
          <label className='formLabel'>Date of Birth</label>
          <input
            type='date' 
            name='dob' 
            value={state.dob}
            className='input'
            onChange={handleChange} />
        </div>

        <div className='phoneSU'>
          <label className='formLabel'>Phone Number</label>
          <input
            type='tel' 
            name='phone'
            value={state.phone} 
            className='input'
            onChange={handleChange} />
        </div>

        <div className='emailSU'>
          <label className='formLabel'>Email (required)</label>
          <input
            type='text' 
            name='email' 
            value={state.email} 
            className='input'
            onChange={handleChange} />
        </div>

        <div className='langSU'>
          <label className='formLabel'>Language</label>
          <input
            type='text' 
            name='language' 
            value={state.language} 
            className='input'
            onChange={handleChange} />
        </div>

        <div className='accSU'>
          <label className='formLabel'>Accessibility Issues</label>
          <div className='radio'>
            <input
              type='radio'
              name='accessibility' 
              value='yes'
              id='yes'
              className='input'
              onChange={handleChange} />
            <label for='yes'>Yes</label>
            <input
              type='radio'
              name='accessibility' 
              value='no'
              id='no' 
              className='input'
              onChange={handleChange}  />
            <label for='no'>No</label>
          </div>
        </div>

        <div className='pwSU'>
          <label className='formLabel'>Password</label>
          <input
            type='password' 
            name='password' 
            value={state.password} 
            className='input'
            onChange={handleChange} />
        </div>

        <div className='uploadSU'>
          <label className='formLabel'>Upload Photo</label>
          <input
            type='file' 
            name='photo'
            onChange={handleFileInput} />
        </div>

        <div className='buttonSU'>
          <button type='submit'>
            <span className="transition"></span>
            <span className="gradient"></span>
            <span className="label">Sign Up</span>
          </button>
        </div>
      </form>
    </div>
  );
}
