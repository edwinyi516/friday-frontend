import React,{Component} from 'react';
import TaskForm from '../TaskForm'
//add base URL
// let baseURL =''
// if (process.env.NODE_ENV ==='development'){
//   baseURL = 'http://localhost:3003'
// } else {
//   baseURL = 'friday-project-mgmt-backend.herokuapp.com'
// }
let baseURL = process.env.REACT_APP_BACKEND_URL
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
        {this.state.tasks.map(tasks =>{
          return (
            <li key ={tasks._id}>{tasks.taskName}</li>
          )
        })}
        <TaskForm handleAddTask={this.handleAddTask}/>
      </ul>
    )
  }
}
export default Task
