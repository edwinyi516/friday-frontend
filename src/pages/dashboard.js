import axios from 'axios'
import React, { useState, useEffect } from 'react'
import UsersTodaysTasks from '../components/UsersTodaysTasks'
import UsersUpcomingTasks from '../components/UsersUpcomingTasks'

export default function Dashboard() {
  const [user, setUser] = useState("")
  
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "friday-project-mgmt-backend.herokuapp.com/user"
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