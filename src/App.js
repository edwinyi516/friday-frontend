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
import ProjectsList from "./pages/ProjectsList";

let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "Heroku backend URL";
}
console.log("current base URL:", baseURL);

//=======================================================================
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      users: [],
      tasks: [],
    };
  }

  getProject = () => {
    fetch(baseURL + "/projects")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log("project data", data);
        this.setState({ projects: data });
      });
  };

  componentDidMount() {
    // fetch("http://localhost:3003/projects").then((data) => {
    //   data.json().then((projectsData) => {
    //     // console.log(projectsData);
    //     this.setState({ projects: projectsData });
    //   });
    // });
    this.getProject();
  } //End of ComponentDidMount()

  render() {
    // const projectList = this.state.projects.map((proj) => {
    //   return (
    //     <li>
    //       <Project projectData={proj} />
    //     </li>
    //   );
    // });
    // console.log(projectList);

    return (
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/projects"
              element={<ProjectsList projectsArray={this.state.projects} />}
            />
            <Route path="/projects/:id" element={<Project />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
