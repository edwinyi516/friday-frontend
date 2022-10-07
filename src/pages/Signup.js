import React, { useState, useNavigate } from 'react'
import axios from "axios"

let baseURL = "";

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
} else {
  baseURL = "http://localhost:3003";

}
// let baseURL = process.env.REACT_APP_BACKEND_URL

export default function Signup() {
  const navigate = useNavigate();
  const [registerFirstName, setRegisterFirstName] = useState("")
  const [registerLastName, setRegisterLastName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  const register = () => {
    axios({
      method: "POST",
      data: {
        firstName: registerFirstName,
        lastName: registerLastName,
        email: registerEmail,
        password: registerPassword
      },
      withCredentials: true,
      url: baseURL + "/register"
    })
    .then((res) => console.log(res))
    .then(() => {
      navigate("/login");
    });
  }

  return (
    <>
    <h3 id='signUpHeader'>Sign up </h3>
    <form id='signUpForm' className='mb-3'>
      <input className='form-control' placeholder="First Name" onChange={e => setRegisterFirstName(e.target.value)}></input><br/>
      <input className='form-control' placeholder="Last Name" onChange={e => setRegisterLastName(e.target.value)}></input><br/>
      <input className='form-control' placeholder="Email" onChange={e => setRegisterEmail(e.target.value)}></input><br/>
      <input className='form-control' type="password" placeholder="Password" onChange={e => setRegisterPassword(e.target.value)}></input><br/>
      <button className='form-control' onClick={register}>Submit</button>
    </form>
    </>
  )
}
