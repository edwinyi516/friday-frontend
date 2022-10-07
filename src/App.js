import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Project from "./pages/Project";
import CreateNewProject from "./pages/CreateNewProject"
import Navbar from "./components/Navbar";
import React from "react";
import ProjectsList from "./components/Projects";
import axios from "axios"

let baseURL = "";

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
} else {
  baseURL = "http://localhost:3003";
}
console.log(process.env)

// let baseURL = process.env.REACT_APP_BACKEND_URL

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'',
      userdata: JSON.parse(localStorage.getItem('userData'))
    };
  }

componentDidMount(){
  axios({
        method: "GET",
        withCredentials: true,
        url: baseURL+'/user'
      })
      .then((res) => this.setState({user:res.data}))
}

  handleLogIn =(user)=> {
    this.setState(
      {
        user
      }
    )
    }
 handleLogOut =()=> {
   console.log('logging out')
   axios({
         method: "POST",
         withCredentials: true,
         url: baseURL+'/logout'
       })
       .then(() => {
         localStorage.removeItem('userData')
       })
       .then(() => {
         this.setState({user:''})
       })
 }

  render() {
  let userData = JSON.parse(localStorage.getItem('userData'))
  console.log(userData)
  let routes;
  if(userData){
    console.log(this.state.user)
    routes=(
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard baseURL={baseURL} user={userData.userData} />} />
        <Route
          path="/projects"
          element={<ProjectsList baseURL={baseURL} />}
        />
        <Route
          path="/projects/:id"
          element={<Project baseURL={baseURL} />} //passing baseURL as prop to use it on Project.js
        />
        <Route path="/new" element={<CreateNewProject user={this.state.user}/>} />
      </Routes>
    )
  }else{
    routes=(
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login handleLogIn={this.handleLogIn}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    )
  }


    return (
      <div className="app">
        <Navbar handleLogOut={this.handleLogOut}/>
        <main>
        {
          routes
        }
        </main>
      </div>
    );
  }
}
