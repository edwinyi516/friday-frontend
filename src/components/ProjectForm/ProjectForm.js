import React,{Component} from 'react';
//add base URL
let baseURL =''
if (process.env.NODE_ENV ==='development'){
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'Heroku backend URL'
}
console.log('current base URL:', baseURL)
//class
class ProjectForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title:'',
      description:'',
      deadline:'',
      status:'',
      members:[],
      creatorID:''
    }
  }
  handleTitleChange = (event) =>{
    this.setState ({
      title: event.target.value
    })
    console.log(this.state.title)
    }

  handleDescriptionChange = (event) =>{
    this.setState ({
      description: event.target.value
    })
  }

  handleDeadlineChange = (event) =>{
    this.setState ({
      deadline: event.target.value
    })
  }
  handleStatusChange = (event) =>{
    this.setState ({
      status: event.target.value
    })
  }
  handleMembersChange = (event) =>{
    this.setState ({
      members: event.target.value
    })
  }
  handleCreatorIDChange = (event) =>{
    this.setState ({
      creatorID: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    // console.log(this.state.title)
    // console.log(this.state.description)
    // console.log(JSON.stringify({title:this.state.title,description:this.state.description}))
    fetch(baseURL + '/projects',{
      method:'POST',
        body: JSON.stringify(
        {title: this.state.title,
        description:this.state.description,
        deadline:this.state.deadline,
        status:this.state.status,
        members:this.state.members,
        creatorID:this.state.creatorID
      }),
      headers: {
          'Content-Type': 'application/json'
          }
    }).then (res => res.json())
    .then (resJson =>{
      console.log('NewForm - resJson', resJson)
      this.props.handleAddProject(resJson)
      this.setState ({
      title:'',
      description:'',
      deadline:'',
      status:'',
      members:[],
      creatorID:''
    })
    })
      }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label htmlFor='projectTitle'>Project Title(required): </label>
      <input type='text' id='projectTitle' name='projectTitle' onChange={this.handleTitleChange} value={this.state.title} /><br />
      <label htmlFor='projectDescription'>Project Description(required): </label>
      <input type='text' id='projectDescription' name='projectDescription' onChange={this.handleDescriptionChange} value={this.state.description} /><br />
      <label htmlFor='projectDeadline'>Project Deadline(required): </label>
      <input type='date' id='projectDeadline' name='projectDeadline' onChange={this.handleDeadlineChange} value={this.state.deadline} /><br />
      <label htmlFor='projectStatus'>Project Status: </label>
      <input type='text' id='projectStatus' name='projectStatus' onChange={this.handleStatusChange} value={this.state.status} /><br />
      <label htmlFor='projectMembers'>Project Members: </label>
      <input type='text' id='projectMembers' name='projectMembers' onChange={this.handleMembersChange} value={this.state.members} /><br />
      <label htmlFor='projectCreatorID'>Project Creator ID(required): </label>
      <input type='text' id='projectCreatorID' name='projectCreatorID' onChange={this.handleCreatorIDChange} value={this.state.creatorID} /><br />
      <input type='submit' value='Submit'/>
      </form>
    )
  }
}
export default ProjectForm
