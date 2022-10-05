import axios from 'axios'
import React, { useState, useEffect } from 'react'
import UsersTodaysTasks from '../components/UsersTodaysTasks'
import UsersUpcomingTasks from '../components/UsersUpcomingTasks'

// let baseURL = "";
// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3003";
// } else {
//   baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
// }
let baseURL = process.env.REACT_APP_BACKEND_URL

export default function Dashboard() {
  const [user, setUser] = useState("")
  
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: baseURL + "/user"
    })
    .then((res) => setUser(res.data))
  }, [])

  return (
    <>
    <h1>Welcome back, {user.firstName}</h1>
    {
      user ? (
        <>
          <UsersTodaysTasks user={user} />
          <UsersUpcomingTasks user={user} />
        </>
      ) : <h2>No logged in user</h2>
    }
    </>
  )
}