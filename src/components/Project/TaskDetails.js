import React, { Component } from "react";
import "./TaskDetails.css";

export default class TaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      // currentMembers: [],
      taskName: this.props.taskName,
      taskDescrption: this.props.description,
      taskDeadline: this.props.deadline,
      taskAssigneeId: this.props.assigneeID,
      taskStatus: this.props.status,
      projectID: this.props.projectID,
    };
  }

  activateEditMode = () => {
    this.setState({ editMode: true });
  }; //-----end of activate

  cancelEditMode = () => {
    this.setState({ editMode: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling Task Edit Submit --------------------");
    console.log(e.target);
    const updatedTask = {
      projectID: this.state.projectID,
      taskName: this.state.taskName,
      description: this.state.taskDescrption,
      deadline: this.state.taskDeadline,
      status: this.state.taskStatus,
      assigneeID: this.state.taskAssigneeId,
    };

    console.log(updatedTask);

    console.log(this.props.baseURL);

    fetch(`${this.props.baseURL}/tasks/${this.props._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  handleChange = (e) => {
    // console.log(e);
    console.log(e.target.id);
    console.log(e.target.value);
    this.setState({ [e.target.id]: e.target.value });
  };

  handleDelete = (e) => {
    console.log(`Deleting task with id of ${this.props._id}`);

    fetch(`${this.props.baseURL}/tasks/${this.props._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  render() {
    let content = this.state.editMode ? (
      <div className="taskDetails">
        <h2>EDIT MODE</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskName">Task Name: </label>
          <input
            onChange={this.handleChange}
            id="taskName"
            name="taskName"
            value={this.state.taskName}
          />
          <br></br>

          <label htmlFor="taskDescrption">Description: </label>
          <input
            onChange={this.handleChange}
            id="taskDescrption"
            name="taskDescrption"
            value={this.state.taskDescrption}
          />

          <br></br>

          <label htmlFor="taskDeadline">taskDeadline: </label>
          <input
            onChange={this.handleChange}
            id="taskDeadline"
            name="taskDeadline"
            value={this.state.taskDeadline}
            type="date"
          />

          <br></br>

          <label htmlFor="taskAsignee">Assignee: </label>
          <select
            name="taskAssigneeId"
            id="taskAssigneeId"
            onChange={this.handleChange}
          >
            {this.props.currentMembers.map((member) => {
              return (
                <option
                  selected={member._id === this.props.assigneeID ? true : false}
                  value={member._id}
                >{`${member.firstName} ${member.lastName}`}</option>
              );
            })}
          </select>

          <br></br>

          <label htmlFor="taskStatus">Status: </label>
          <input
            onChange={this.handleChange}
            id="taskStatus"
            name="taskStatus"
            value={this.state.taskStatus}
          />

          <button type="submit">SUBMIT</button>
        </form>
        <button onClick={this.cancelEditMode}>CANCEL</button>
      </div>
    ) : (
      <div className="taskDetails">
        <h2>Task Name: {this.props.taskName}</h2>
        <ul>
          <li key={1}>Description: {this.props.description}</li>
          <li key={2}>Deadline: {this.props.deadline}</li>
          <li key={3}>Assignee ID: {this.props.assigneeID} </li>
          <li key={4}>Status: {this.props.status}</li>
        </ul>

        <div className="taskDetails_editAndDelete">
          <p onClick={this.activateEditMode}>Edit</p>
          <p>|</p>
          <p onClick={this.handleDelete}>Delete</p>
        </div>
      </div>
    );

    return content;
  }
}

//To-do List:
//Pass ALL USERS into Task Details for dropdown options
//Integrate calendar and dropdown list
