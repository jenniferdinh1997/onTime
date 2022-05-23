import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

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
      <form autoComplete='off' onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='name' 
          placeholder='Name' 
          value={state.name} 
          onChange={handleChange} />
        Date of Birth: <input 
          type='date' 
          name='dob' 
          placeholder='Date of Birth' 
          value={state.dob} 
          onChange={handleChange} />
        <input 
          type='text' 
          name='email' 
          placeholder='Email' 
          value={state.email} 
          onChange={handleChange} />
        <input 
          type='tel' 
          name='phone' 
          placeholder='Phone Number' 
          value={state.phone} 
          onChange={handleChange} />
        <input 
          type='text' 
          name='language' 
          placeholder='Preferred Language' 
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
        <input 
          type='password' 
          name='password' 
          placeholder='Password' 
          value={state.password} 
          onChange={handleChange} />
        Upload Profile Picture: <input 
          type='file' 
          name='photo' 
          onChange={handleFileInput} />
        <input 
          type='submit' />
      </form>
    </>
  );
}
