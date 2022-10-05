import React, { useState } from 'react'
import axios from "axios"

// let baseURL = "";
// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3003";
// } else {
//   baseURL = "friday-project-mgmt-backend.herokuapp.com";
// }
let baseURL = process.env.REACT_APP_BACKEND_URL

export default function Signup() {
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
  }

  return (
    <>
    <h1>Register</h1>
    <form>
      <input placeholder="First Name" onChange={e => setRegisterFirstName(e.target.value)}></input>
      <input placeholder="Last Name" onChange={e => setRegisterLastName(e.target.value)}></input>
      <input placeholder="Email" onChange={e => setRegisterEmail(e.target.value)}></input>
      <input type="password" placeholder="Password" onChange={e => setRegisterPassword(e.target.value)}></input>
      <button onClick={register}>Submit</button>
    </form>
    </>
  )
}
