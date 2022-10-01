import React, { Component } from "react";
import "./TaskDetails.css";

export default class TaskDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="taskDetails">
        <h2>Task Name: {this.props.taskName}</h2>
        <ul>
          <li>Project Name:</li>
          <li>Description: {this.props.description}</li>
          <li>Deadline: {this.props.deadline}</li>
          <li>Assignee: </li>
          <li>Status: {this.props.status}</li>
        </ul>

        <div className="taskDetails_editAndDelete">
          <p>Edit</p>
          <p>|</p>
          <p>Delete</p>
        </div>
      </div>
    );
  }
}
