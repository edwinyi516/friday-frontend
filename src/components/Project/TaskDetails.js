import React, { Component } from "react";
import "./TaskDetails.css";

export default class TaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
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
    let deadline = this.props.deadline;
    let deadlineString = new Date(deadline).toLocaleDateString();
    let deadlineIso = new Date(deadline).toISOString().split("T")[0];
    let content = this.state.editMode ? (
      <div className="taskDetails container">
        <h2>EDIT MODE</h2>

        <form onSubmit={this.handleSubmit} className="mb-3">
          <label htmlFor="taskName" className="form-label">
            Task Name:{" "}
          </label>
          <input
            className="form-control"
            onChange={this.handleChange}
            id="taskName"
            name="taskName"
            value={this.state.taskName}
            defaultValue={this.props.taskName}
          />
          <br></br>

          <label htmlFor="taskDescrption" className="form-label">
            Description:{" "}
          </label>
          <textarea
            rows={5}
            className="form-control"
            onChange={this.handleChange}
            id="taskDescrption"
            name="taskDescrption"
            value={this.state.taskDescrption}
            defaultValue={this.props.description}
          />

          <br></br>

          <label htmlFor="taskDeadline" className="form-label">
            Deadline:{" "}
          </label>
          <input
            className="form-control"
            onChange={this.handleChange}
            id="taskDeadline"
            name="taskDeadline"
            value={this.state.taskDeadline}
            defaultValue={deadlineIso}
            type="date"
          />

          <br></br>

          <label htmlFor="taskAsignee" className="form-label">
            Assignee:{" "}
          </label>
          <select
            name="taskAssigneeId"
            id="taskAssigneeId"
            onChange={this.handleChange}
            defaultValue={this.props.assigneeID}
          >
            {this.props.currentMembers.map((member) => {
              return (
                <option
                  // selected={member._id === this.props.assigneeID ? true : false}
                  value={member._id}
                >{`${member.firstName} ${member.lastName}`}</option>
              );
            })}
          </select>

          <br></br>

          <label htmlFor="taskStatus" className="form-label">
            Status:{" "}
          </label>
          <input
            className="form-control"
            onChange={this.handleChange}
            id="taskStatus"
            name="taskStatus"
            value={this.state.taskStatus}
            defaultValue={this.props.status}
          />

          <button type="submit" className="form-control taskDetailsSubmit">
            SUBMIT
          </button>
        </form>
        <button
          onClick={this.cancelEditMode}
          className="form-control taskDetailsCancel"
        >
          CANCEL
        </button>
      </div>
    ) : (
      <div className="taskDetails container">
        <h2>Task Name: {this.props.taskName}</h2>
        <ul>
          <li key={1}>Description: {this.props.description}</li>
          <li key={2}>Deadline: {deadlineString}</li>
          <li key={3}>
            Assignee:{" "}
            {`${this.props.userObj.firstName} ${this.props.userObj.lastName}`}
          </li>
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
