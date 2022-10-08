import React, { Component } from "react";
//add base URL
let baseURL = "";

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
} else {
  baseURL = "http://localhost:3003";
}
// let baseURL = process.env.REACT_APP_BACKEND_URL

console.log("current base URL:", baseURL);
// let baseURL = process.env.REACT_APP_BACKEND_URL

//class

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectID: this.props.projectId ? this.props.projectId : "", //-LEILANNI CHANGE
      taskName: "",
      description: "",
      deadline: "",
      creatorID: this.props.userData._id,
      status: "",
      assigneeID: this.props.currentMembers[0]._id,
      assigneeName: "",
      allMembers: this.props.currentMembers ? this.props.currentMembers : [],
    };
  }
  //get member data for dropdown list
  componentDidMount() {
    this.props.currentMembers
      ? console.log("no need to fetch all users")
      : this.getAllMembers();
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
    console.log(
      JSON.stringify({
        projectID: this.state.projectID,
        taskName: this.state.taskName,
        description: this.state.description,
        deadline: this.state.deadline,
        creatorID: this.state.creatorID,
        status: this.state.status || "Not Started",
        assigneeID: this.state.assigneeID,
      })
    );
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
        status: this.state.status || "Not Started",
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
          projectID: this.props.projectId ? this.props.projectId : "",
          taskName: "",
          description: "",
          deadline: "",
          // creatorID: "",
          status: "",
          assigneeID: "",
        });
        window.location.reload();
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mb-3 taskFormForm">
        <label htmlFor="projectID" className="form-label">
          {" "}
        </label>
        <input
          type="text"
          id="projectID"
          name="projectID"
          onChange={this.handleProjectIDChange}
          value={this.state.projectID}
          hidden
        />
        <br />
        <label htmlFor="taskName" className="form-label">
          {" "}
          Task Name (required):{" "}
        </label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          onChange={this.handleTaskNameChange}
          value={this.state.taskName}
        />
        <br />
        <label
          htmlFor="taskDescription"
          className="form-label taskDescriptiononTaskForm"
        >
          {" "}
          Description (required):{" "}
        </label>
        <textarea
          rows={5}
          type="text"
          id="taskDescription"
          name="taskDescription"
          onChange={this.handleDescriptionChange}
          value={this.state.description}
        />
        <br />
        <label htmlFor="taskDeadline" className="form-label">
          {" "}
          Task Deadline (required):{" "}
        </label>
        <input
          type="date"
          id="taskDeadline"
          name="taskDeadline"
          onChange={this.handleDeadlineChange}
          value={this.state.deadline}
        />
        <br />
        <label htmlFor="creatorID" className="form-label"></label>
        <input
          type="text"
          id="creatorID"
          name="creatorID"
          onChange={this.handleCreatorIDChange}
          value={this.state.creatorID}
          hidden
        />
        <label htmlFor="taskStatus" className="form-label">
          {" "}
          Choose Task Status:{" "}
        </label>
        <select
          defaultValue={"Not Started"}
          name="taskStatus"
          id="taskStatus"
          onChange={this.handleStatusChange}
        >
          <option value="notStarted">Not Started</option>
          <option value="inProgress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <label htmlFor="assigneeName" className="form-label">
          {" "}
          Assignee Name (required):{" "}
        </label>
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
        <input type="submit" value="Submit" className="form-control" />
      </form>
    );
  }
}

export default TaskForm;
