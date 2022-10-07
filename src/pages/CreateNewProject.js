import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ProjectForm from "../components/ProjectForm";


class CreateNewProject extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
// const [user, setUser] = useState("")

//   useEffect(() => {
//     axios({
//       method: "GET",
//       withCredentials: true,
//       url: "http://localhost:3003/user"
//     })
//     .then((res) => setUser(res.data))
//   }, [])
// console.log(user)

handleAddProject = (project) => {
  const copyProjects = [...this.state.projects];
  copyProjects.unshift(project);
  this.setState({ projects: copyProjects });
};
render(){
  return(
    <>
      <h3 id='projectFormHeader'>Create a new project here, {this.props.user.firstName}!</h3>
      {
        this.props.user ? (
          <>
            <ProjectForm user={this.props.user} handleAddProject={this.handleAddProject}/>
          </>
        ) : <h2>No logged in user</h2>
      }
      </>

  )
}


}
export default CreateNewProject
