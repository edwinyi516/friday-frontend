import React, { Component } from "react";
import ProjectForm from "../components/ProjectForm/ProjectForm"; //CHANGED -LM
//add base URL

//class member

//Can we change the name of the file and component to ProjectsList?
class ProjectsList extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       projects: [],
  //     };
  //   }

  //   componentDidMount() {
  //     this.getProject();
  //   }

  //   handleAddProject = (project) => {
  //     const copyProjects = [...this.state.projects];
  //     copyProjects.unshift(project);
  //     this.setState({ projects: copyProjects });
  //   };

  render() {
    // console.log(this.props.projectsArray);
    return (
      <ul>
        {this.props.projectsArray.map((project) => {
          return <li key={project._id}>{project.title}</li>;
        })}
        <ProjectForm handleAddProject={this.handleAddProject} />
      </ul>
    );
  }
}
export default ProjectsList;
