import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Project from "./pages/Project";
import CreateNewProject from "./pages/CreateNewProject"
import Navbar from "./components/Navbar";
import React from "react";
import ProjectsList from "./components/Projects";

let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "friday-project-mgmt-backend.herokuapp.com";
}
// let baseURL = process.env.REACT_APP_BACKEND_URL

export default class App extends React.Component {
  render() {

    return (
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/projects"
              element={<ProjectsList baseURL={baseURL} />}
            />
            <Route
              path="/projects/:id"
              element={<Project baseURL={baseURL} />} //passing baseURL as prop to use it on Project.js
            />
            <Route path="/new" element={<CreateNewProject/>} />
          </Routes>
        </main>
      </div>
    );
  }
}
