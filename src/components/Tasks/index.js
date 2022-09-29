import React,{Component} from 'react';
import TaskForm from '../TaskForm'
//add base URL
let baseURL =''
if (process.env.NODE_ENV ==='development'){
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'Heroku backend URL'
}
console.log('current base URL:', baseURL)
//class member
class Task extends Component {
  constructor(props){
    super(props)
    this.state={
      tasks:[]
    }
  }
  componentDidMount(){
    this.getTask()
  }
  getTask =()=>{
    fetch(baseURL + '/tasks')
    .then(res =>{
      if(res.status === 200){
        return res.json()
      }else{
        return[]
      }
    }).then(data=>{
      console.log('task data',data)
      this.setState({tasks:data})
    })
  }
  handleAddTask = (task) =>{
    const copyTasks = [...this.state.tasks]
    copyTasks.unshift(task)
    this.setState({tasks:copyTasks})
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
