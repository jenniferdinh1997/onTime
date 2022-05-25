import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Header from '../../components/Header/Header';
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBFile
} from 'mdb-react-ui-kit';

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
    <>
      <Header />
      <form autoComplete='off' onSubmit={handleSubmit}>
        <MDBInput className='mb-3'
          type='text' 
          name='name' 
          label='Name' 
          value={state.name} 
          onChange={handleChange} />
        <MDBInput className='mb-4'
          type='date' 
          name='dob' 
          label='Date of Birth' 
          value={state.dob} 
          onChange={handleChange} />
        <MDBInput className='mb-4'
          type='text' 
          name='email' 
          label='Email' 
          value={state.email} 
          onChange={handleChange} />
        <MDBInput className='mb-4'
          type='tel' 
          name='phone' 
          label='Phone Number' 
          value={state.phone} 
          onChange={handleChange} />
        <MDBInput className='mb-4'
          type='text' 
          name='language' 
          label='Preferred Language' 
          value={state.language} 
          onChange={handleChange} />
        Accessibility Issues: <input
          type='radio' 
          name='accessibility' 
          value='yes' 
          onChange={handleChange} /> Yes
        <input 
          type='radio' 
          name='accessibility' 
          value='no' 
          onChange={handleChange} /> No
        <MDBInput className='mb-4'
          type='password' 
          name='password' 
          label='Password' 
          value={state.password} 
          onChange={handleChange} />
        <MDBFile className='mb-4'
          type='file' 
          name='photo'
          label='Upload Profile Picture' 
          onChange={handleFileInput} />
        <MDBBtn type='submit'>Submit</MDBBtn>
      </form>
    </>
  );
}
