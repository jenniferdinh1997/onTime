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

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Name: <input type='text' onChange={handleChange} />
        Date of Birth: <input type='date' onChange={handleChange} />
        Email: <input type='text' onChange={handleChange} />
        Phone Number: <input type='tel' onChange={handleChange} />
        Language: <input type='text' onChange={handleChange} />
        Accessibility Issues:
        <input type='radio' onChange={handleChange} /> Yes
        <input type='radio' onChange={handleChange} /> No
        Password: <input type='password' onChange={handleChange} />
        Upload Profile Picture: <input type='file' onChange={handleFileInput} />
      </form>
    </>
  );
}
