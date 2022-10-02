import React, { Component } from 'react'
import UsersTodaysTasks from '../components/UsersTodaysTasks'
import UsersUpcomingTasks from '../components/UsersUpcomingTasks'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <UsersTodaysTasks />
        <UsersUpcomingTasks />
      </>
    )
  }
}