import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ProjectForm from "../components/ProjectForm";

let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "friday-project-mgmt-backend.herokuapp.com";
}
// let baseURL = process.env.REACT_APP_BACKEND_URL

function CreateNewProject() {
  const [user, setUser] = useState("")

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: baseURL + "/user"
    })
    .then((res) => setUser(res.data))
  }, [])

  return(
    <>
      <h1>Please enter a new project here, {user.firstName}!</h1>
      {
        user ? (
          <>
            <ProjectForm user={user} />
          </>
        ) : <h2>No logged in user</h2>
      }
      </>

  )
}
export default CreateNewProject
