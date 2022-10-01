import React, {Component} from 'react';
//add base URL
let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'Heroku backend URL'
}
console.log('current base URL:', baseURL)

//class

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectId: '',
      taskName: '',
      description: '',
      deadline: '',
      creatorID: '',
      status: '',
      assigneeID: '',
      assigneeName: '',
      members: []
    }
  }
  componentDidMount(){
    this.getMember()
  }
  getMember =()=>{
    fetch(baseURL + '/users')
    .then(res =>{
      if(res.status === 200){
        return res.json()
      }else{
        return[]
      }
    }).then(data=>{
      console.log('member data',data)
      this.setState({members:data})
    })
  }
  handleProjectIdChange = (event) => {
    this.setState({
      projectId: event.target.value,
    })
  }
  handleTaskNameChange = (event) => {
    this.setState({
      taskName: event.target.value
    })
    console.log(this.state.taskName)
  }
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }
  handleDeadlineChange = (event) => {
    this.setState({
      deadline: event.target.value
    })
  }
  handleCreatorIDChange = (event) => {
    this.setState({
      creatorID: event.target.value
    })
      }

  handleStatusChange = (event) => {
    this.setState({
      status: event.target.value
    })
  }
  handleAssigneeNameChange = (event) => {
    const assigneeObj=this.state.members.find((obj)=>{
      return obj.firstName===event.target.value.split(' ')[0] && obj.lastName===event.target.value.split(' ')[1]
    })
    // console.log(event.target.value.split(' ')[0])
    // console.log(event.target.value.split(' ')[1])
    // console.log(assigneeObj)
    // console.log(assigneeObj._id)
    this.setState({
      assigneeName: event.target.value,
      assigneeID: assigneeObj._id
            })
    }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log (this.state.assigneeID)
    // console.log(this.state.assigneeName)
    // console.log (JSON.stringify({
    //   projectID: this.state.projectId,
    //   taskName: this.state.taskName,
    //   description: this.state.description,
    //   deadline: this.state.deadline,
    //   creatorID: this.state.creatorID,
    //   status: this.state.status,
    //   assigneeID: this.state.assigneeID,
    // }))
    fetch(baseURL + '/tasks', {
        method: 'POST',
        body: JSON.stringify({
          projectId: this.state.projectId,
          taskName: this.state.taskName,
          description: this.state.description,
          deadline: this.state.deadline,
          creatorID: this.state.creatorID,
          status: this.state.status,
          assigneeID: this.state.assigneeID,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(resJson => {
        console.log('NewForm - resJson', resJson)
        this.props.handleAddTask(resJson)
        this.setState({
          projectId: '',
          taskName: '',
          description: '',
          deadline: '',
          creatorID: '',
          status: '',
          assigneeID: ''
        })
      })
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label htmlFor = 'projectId' > Project ID(required): < /label>
        <input type = 'text' id = 'projectId' name = 'projectId' onChange = {this.handleProjectIdChange} value = {this.state.projectId}/><br / >
        <label htmlFor = 'taskName' > taskName(required): </label>
        <input type = 'text' id = 'taskName' name = 'taskName' onChange = {this.handleTaskNameChange} value = {this.state.taskName}/><br / >
        <label htmlFor = 'taskDescription' > Description(required): < /label>
        <input type = 'text' id = 'taskDescription' name = 'taskDescription' onChange = {this.handleDescriptionChange} value = {this.state.description}/><br / >
        <label htmlFor = 'taskDeadline' > Task Deadline(required): < /label>
        <input type = 'date' id = 'taskDeadline' name = 'taskDeadline' onChange = {this.handleDeadlineChange} value = {this.state.deadline}/><br / >
        <label htmlFor = 'creatorID' > CreatorID(required): < /label>
        <input type = 'text' id = 'creatorID' name = 'creatorID' onChange = {this.handleCreatorIDChange} value = {this.state.creatorID}/><br / >
        <label htmlFor = 'taskStatus' > Task Status: < /label>
        <input type = 'text' id = 'taskStatus' name = 'taskStatus' onChange = {this.handleStatusChange} value = {this.state.taskStatus}/><br / >
        <label htmlFor = 'assigneeName' > Assignee Name(required): < /label>
        <select name='assigneeName' id='assigneeName' onChange = {this.handleAssigneeNameChange} value = {this.state.assigneeName}>
        {this.state.members.map(members =>{
          return (
            <option key ={members._id}>{members.firstName+' '+members.lastName}</option>
          )
        })}
        </select><br / >
        <input type='submit' value='Submit'/>
        </form>
    )
  }
}
export default TaskForm
