import React,{Component} from 'react';
import ProjectForm from '../ProjectForm/ProjectForm.js'
//add base URL
let baseURL =''
if (process.env.NODE_ENV ==='development'){
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'Heroku backend URL'
}
console.log('current base URL:', baseURL)
//class member
class Project extends Component {
  constructor(props){
    super(props)
    this.state={
      projects:[]
    }
  }
  componentDidMount(){
    this.getProject()
  }
  getProject =()=>{
    fetch(baseURL + '/projects')
    .then(res =>{
      if(res.status === 200){
        return res.json()
      }else{
        return[]
      }
    }).then(data=>{
      console.log('project data',data)
      this.setState({projects:data})
    })
  }
  handleAddProject = (project) =>{
    const copyProjects = [...this.state.projects]
    copyProjects.unshift(project)
    this.setState({projects:copyProjects})
  }
  render(){
    return(
      <ul>
        {this.state.projects.map(projects =>{
          return (
            <li key ={projects._id}>{projects.title}</li>
          )
        })}
        <ProjectForm handleAddProject={this.handleAddProject}/>
      </ul>
    )
  }
}
export default Project
