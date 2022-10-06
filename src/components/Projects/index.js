import React, { Component } from 'react';
import ProjectForm from '../ProjectForm'
//add base URL
let baseURL = "";

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
} else {
  baseURL = "http://localhost:3003";
}
// let baseURL = process.env.REACT_APP_BACKEND_URL
console.log(process.env.NODE_ENV)

console.log("current base URL:", baseURL);
//class member

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    this.getProject();
  }
  getProject = () => {
    fetch(`${this.props.baseURL}/projects`)
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
  // handleAddProject = (project) => {
  //   const copyProjects = [...this.state.projects];
  //   copyProjects.unshift(project);
  //   this.setState({ projects: copyProjects });
  // };
  render() {
    return (
      <>
      <ul>
        {this.state.projects.map((project) => {
          //changed it from 'projects' to 'project'  -LEILANNI
          return (
            <li key={project._id}>
              <a href={`http://localhost:3000/projects/${project._id}`}>
                {project.title}
              </a>
            </li>
          );
        })}
        </ul>
        <ProjectForm handleAddProject={this.handleAddProject}/>
        </>
    );
  }
}
export default Project;
