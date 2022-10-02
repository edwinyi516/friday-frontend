import React, { Component } from 'react'
import "./index.css"
import icon from "../../assets/images/friday-icon.png"

export default class Navbar extends Component {

  render() {
    return (
      <>
        <nav>
            <img id="icon" src={icon} />
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
        </nav>
      </>
    )
  }
}