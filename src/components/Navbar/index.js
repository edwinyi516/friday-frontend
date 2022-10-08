import React, { Component } from "react";
import "./index.css";
import icon from "../../assets/images/friday-icon.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="container1">
            <img id="icon" src={icon} alt="icon" />
            <a className="navbar-brand" id="friday">
              Friday.com
            </a>
          </div>
          <div className="container1">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Home
                      </a>
<<<<<<< HEAD
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Home</a></li>
                        <li><a className="dropdown-item" href="/mytasks">Dashboard</a></li>
                        <li><a className="dropdown-item" href="/login">Login</a></li>
                        <li><a className="dropdown-item" href="/signup">Sign Up</a></li>
                        <li><a className="dropdown-item" href="/new">New Project</a></li>
                        <li><a className="dropdown-item" onClick={this.props.handleLogOut}>Log Out</a></li>
                      </ul>
=======
>>>>>>> 966cbebc977f8adfa854ca5c1f886e55ab99f59b
                    </li>
                    <li>
                      <a className="dropdown-item" href="/myTasks">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/login">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signup">
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/new">
                        New Project
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={this.props.handleLogOut}
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
