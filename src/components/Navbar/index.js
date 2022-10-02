import React, { Component } from 'react'
import "./index.css"
import icon from "../../assets/images/friday-icon.png"

export default class Navbar extends Component {

  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div class="container1">
            <img id="icon" src={icon} alt='icon'/>
            <a class="navbar-brand" id="friday">Friday.com</a>
          </div>
          <div class="container1">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/">Home</a></li>
                        <li><a class="dropdown-item" href="/dashboard">Dashboard</a></li>
                        <li><a class="dropdown-item" href="/login">Login</a></li>
                        <li><a class="dropdown-item" href="/signup">Sign Up</a></li>
                      </ul>
                    </li>
                </ul>
              </div>
            </div>
        </div>
      </nav>
)
  }
}
