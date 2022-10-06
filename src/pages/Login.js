import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "http://friday-project-mgmt-backend.herokuapp.com";
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
    <h1>Login page</h1>
    <form>
      <input placeholder="Email" onChange={e => setLoginEmail(e.target.value)}></input>
      <input type="password" placeholder="Password" onChange={e => setLoginPassword(e.target.value)}></input>
      <button onClick={login}>Submit</button>
    </form>
    </>
  )
}
