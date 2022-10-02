import axios from 'axios'
import React, { useState } from 'react'
import UsersTodaysTasks from '../components/UsersTodaysTasks'
import UsersUpcomingTasks from '../components/UsersUpcomingTasks'

export default function Dashboard() {
  const [user, setUser] = useState("")
  
  axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:3003/user"
  })
  .then((res) => setUser(res.data))

  return (
    <>
    <h1>Welcome back, {user.firstName}</h1>
      <UsersTodaysTasks />
      <UsersUpcomingTasks />
    </>
  )
}