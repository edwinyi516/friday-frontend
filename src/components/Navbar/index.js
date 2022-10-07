import React, { Component } from 'react'
import "./index.css"
import icon from "../../assets/images/friday-icon.png"

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <a className="container1" href="/">
            <img id="icon" src={icon} alt='icon'/>
            <a className="navbar-brand" id="friday">Friday.com</a>
          </a>
          <div className="container2">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="menu-text" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="/">Home</a></li>
                        {
                          this.props.user ? (
                            <>
                              <li><a className="dropdown-item" href="/mytasks">Dashboard</a></li>
                              <li><a className="dropdown-item" href="/projects">All Projects</a></li>
                              <li><a className="dropdown-item" href="/new">New Project</a></li>
                              <li><a className="dropdown-item" onClick={this.props.handleLogOut}>Log Out</a></li> 
                            </>
                          ) : (
                            <>
                              <li><a className="dropdown-item" href="/login">Login</a></li>
                              <li><a className="dropdown-item" href="/signup">Sign Up</a></li>
                            </>
                          )
                        }

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
