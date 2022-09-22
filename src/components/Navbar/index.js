import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
        </nav>
      </>
    )
  }
}
