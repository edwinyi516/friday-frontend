import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

let baseURL = "";

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
} else {
  baseURL = "http://localhost:3003";
}


export default function Login(props) {
  const navigate = useNavigate()
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const login = (event) => {
  event.preventDefault()
    axios({
    method: "POST",
    data: {
      email: loginEmail,
      password: loginPassword
    },
    withCredentials: true,
    url: baseURL + "/login"
  })
  .then((res) => {
    localStorage.setItem(
      'userData',
      JSON.stringify(
        {
          userData:res.data,
        }
      )

    )
    props.handleLogIn(res.data)
  }
    )
  .then(()=>{
    navigate ('/dashboard')
  })
}

  return (
    <>
    <h3 id='logInHeader'>Log into your account</h3>
    <form id='logInForm' className='mb-3'>
      <input className='form-control' placeholder="Email" onChange={e => setLoginEmail(e.target.value)}></input>
      <input className='form-control' type="password" placeholder="Password" onChange={e => setLoginPassword(e.target.value)}></input>
      <button className='form-control' onClick={login}>Submit</button>
    </form>
    </>
  )
}
