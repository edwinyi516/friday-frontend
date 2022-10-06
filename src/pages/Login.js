import React, { useState } from 'react'
import axios from "axios"

let baseURL = "";
if (process.env.REACT_APP_ENVIRONMENT === "production") {
  baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
} else {
  baseURL = "http://localhost:3003";
}
// let baseURL = "https://friday-project-mgmt-frontend.herokuapp.com"

export default function Login() {
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
    .then((res) => console.log(res))
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
