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

  //submits contents of each individual section on the form
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleFileInput(e) {
    setFile(e.target.files[0]) //places our uploaded file in the first place of files array
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData()
    formData.append('photo', selectedFile)
    for (let fieldName in state) {
      formData.append(fieldName, state[fieldName])
    }

    try {
      await userService.signup(formData)
    } catch (err) {
      setError(err.message)
    }

  }

  return (
    <>
      <form autocomplete='off' onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' onChange={handleChange} />
        <input type='date' placeholder='Date of Birth' onChange={handleChange} />
        <input type='text' placeholder='Email' onChange={handleChange} />
        <input type='tel' placeholder='Phone Number' onChange={handleChange} />
        <input type='text' placeholder='Preferred Language' onChange={handleChange} />
        Accessibility Issues:
        <input type='radio' onChange={handleChange} /> Yes
        <input type='radio' onChange={handleChange} /> No
        <input type='password' placeholder='password' onChange={handleChange} />
        Upload Profile Picture: <input type='file' name='photo' onChange={handleFileInput} />
      </form>
    </>
  );
}
