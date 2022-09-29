import React, {
  Component
} from 'react';
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
      projectID: '',
      taskName: '',
      description: '',
      deadline: '',
      creatorID: '',
      status: '',
      assigneeID: ''
    }
  }
  handleProjectIDChange = (event) => {
    this.setState({
      projectID: event.target.value
    })
  }
  handleTaskNameChange = (event) => {
    this.setState({
      taskName: event.target.value
    })
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
  handleAssigneeIDChange = (event) => {
    this.setState({
      assigneeID: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch(baseURL + '/tasks', {
        method: 'POST',
        body: JSON.stringify({
          projectID: this.state.projectID,
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
          projectID: '',
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
    return ( <
      form onSubmit = {
        this.handleSubmit
      } >
      <
      label htmlFor = 'projectID' > Project ID(required): < /label> <
      input type = 'text'
      id = 'projectID'
      name = 'projectID'
      onChange = {
        this.handleProjectIDChange
      }
      value = {
        this.state.projectID
      }
      /><br / >
      <
      label htmlFor = 'taskName' > taskName(required): < /label> <
      input type = 'text'
      id = 'taskName'
      name = 'taskName'
      onChange = {
        this.handleTaskNameChange
      }
      value = {
        this.state.taskName
      }
      /><br / >
      <
      label htmlFor = 'taskDescription' > Description(required): < /label> <
      input type = 'text'
      id = 'taskDescription'
      name = 'taskDescription'
      onChange = {
        this.handleDescriptionChange
      }
      value = {
        this.state.description
      }
      /><br / >
      <
      label htmlFor = 'taskDeadline' > Task Deadline(required): < /label> <
      input type = 'date'
      id = 'taskDeadline'
      name = 'taskDeadline'
      onChange = {
        this.handleDeadlineChange
      }
      value = {
        this.state.deadline
      }
      /><br / >
      <
      label htmlFor = 'creatorID' > CreatorID(required): < /label> <
      input type = 'text'
      id = 'creatorID'
      name = 'creatorID'
      onChange = {
        this.handleCreatorIDChange
      }
      value = {
        this.state.creatorID
      }
      /><br / >
      <
      label htmlFor = 'taskStatus' > Task Status: < /label> <
      input type = 'text'
      id = 'taskStatus'
      name = 'taskStatus'
      onChange = {
        this.handleStatusChange
      }
      value = {
        this.state.taskStatus
      }
      /><br / >
      <
      label htmlFor = 'assigneeID' > assigneeID(required): < /label> <
      input type = 'text'
      id = 'assigneeID'
      name = 'assigneeID'
      onChange = {
        this.handleAssigneeIDChange
      }
      value = {
        this.state.assigneeID
      }
      /><br / >
      <
      input type = 'submit'
      value = 'Submit' / >
      <
      /form>
    )
  }
}
export default TaskForm
