import React, { Component } from "react";
//add base URL
let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "friday-project-mgmt-backend.herokuapp.com";
}
console.log("current base URL:", baseURL);

//class

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectID: this.props.projectId ? this.props.projectId : "", //-LEILANNI CHANGE
      taskName: "",
      description: "",
      deadline: "",
      creatorID: "",
      status: "",
      assigneeID: "",
      assigneeName: "",
      allMembers: [],
    };
  }
  //get member data for dropdown list
  componentDidMount() {
    this.getAllMembers();
  }
  getAllMembers = () => {
    fetch(baseURL + "/users")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log("member data", data);
        this.setState({ allMembers: data });
      });
  };
  //set up onchange function for each input
  handleProjectIDChange = (event) => {
    this.setState({
      projectID: event.target.value,
    });
  };
  handleTaskNameChange = (event) => {
    this.setState({
      taskName: event.target.value,
    });
  };
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handleDeadlineChange = (event) => {
    this.setState({
      deadline: event.target.value,
    });
  };
  handleCreatorIDChange = (event) => {
    this.setState({
      creatorID: event.target.value,
    });
  };

  handleStatusChange = (event) => {
    this.setState({
      status: event.target.value,
    });

  };
  handleAssigneeNameChange = (event) => {
    //find member ID based on name chosen from drop down
    let selectedAssigneeID = Array.from(
      event.target.selectedOptions,
      (option) => option.id
    ).toString();
    // const assigneeObj=this.state.allMembers.find((obj)=>{
    //   return obj.firstName===event.target.value.split(' ')[0] && obj.lastName===event.target.value.split(' ')[1]
    // })
    // console.log(event.target.value.split(' ')[0])
    // console.log(event.target.value.split(' ')[1])
    // console.log(assigneeObj)
    // console.log(assigneeObj._id)
    this.setState({
      assigneeName: event.target.value,
      assigneeID: selectedAssigneeID,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
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
    fetch(baseURL + "/tasks", {
      method: "POST",
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
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log("NewForm - resJson", resJson);
        this.props.handleAddTask(resJson);
        this.setState({
          projectID: "",
          taskName: "",
          description: "",
          deadline: "",
          creatorID: "",
          status: "",
          assigneeID: "",
        });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="projectID"> Project ID(required): </label>
        <input
          type="text"
          id="projectID"
          name="projectID"
          onChange={this.handleProjectIDChange}
          value={this.state.projectID}
          hidden
        />
        <br />
        <label htmlFor="taskName"> taskName(required): </label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          onChange={this.handleTaskNameChange}
          value={this.state.taskName}
        />
        <br />
        <label htmlFor="taskDescription"> Description(required): </label>
        <input
          type="text"
          id="taskDescription"
          name="taskDescription"
          onChange={this.handleDescriptionChange}
          value={this.state.description}
        />
        <br />
        <label htmlFor="taskDeadline"> Task Deadline(required): </label>
        <input
          type="date"
          id="taskDeadline"
          name="taskDeadline"
          onChange={this.handleDeadlineChange}
          value={this.state.deadline}
        />
        <br />
        <label htmlFor="creatorID"> CreatorID(required): </label>
        <input
          type="text"
          id="creatorID"
          name="creatorID"
          onChange={this.handleCreatorIDChange}
          value={this.state.creatorID}
        />
        <br />
        <label htmlFor="taskStatus"> Choose Task Status: </label>
        <select name='taskStatus' id='taskStatus' onChange={this.handleStatusChange}>
          <option value='notStarted'>Not Started</option>
          <option value='inProgress'>In Progress</option>
          <option value='Completed'>Completed</option>
        </select>
        <br />
        <label htmlFor="assigneeName"> Assignee Name(required): </label>
        <select
          name="assigneeName"
          id="assigneeName"
          onChange={this.handleAssigneeNameChange}
          value={this.state.assigneeName}
        >
          {this.state.allMembers.map((members) => {
            return (
              <option key={members._id} id={members._id}>
                {members.firstName + " " + members.lastName}
              </option>
            );
          })}
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TaskForm;
