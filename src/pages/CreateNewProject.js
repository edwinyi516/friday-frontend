import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ProjectForm from "../components/ProjectForm";

function CreateNewProject() {
  const [user, setUser] = useState("")

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "friday-project-mgmt-backend.herokuapp.com/user"
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
