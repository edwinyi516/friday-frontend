import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import TaskItem from "./components/Project/TaskItem";
import React from "react";
import ProjectsList from "./components/Projects/Projects";

//=======================================================================

let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "Heroku backend URL";
}

//=======================================================================
class App extends React.Component {
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
            <Route exact path="/projects" element={<ProjectsList />} />
            <Route
              path="/projects/:id"
              element={<Project baseUrl={baseURL} />} //passing baseURL as prop to use it on Project.js
            />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
