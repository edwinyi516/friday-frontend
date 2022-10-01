import React, { useState } from 'react'
import axios from "axios"

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
      url: "http://localhost:3003/login"
    })
    .then((res) => console.log(res))
  }

  return (
    <>
    <h1>Login page</h1>
    <form>
      <input placeholder="Email" onChange={e => setLoginEmail}></input>
      <input type="password" placeholder="Password" onChange={e => setLoginPassword}></input>
      <button onClick={login}>Submit</button>
    </form>
    </>
  )
}
