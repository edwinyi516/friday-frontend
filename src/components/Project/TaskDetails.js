import React, { Component } from "react";
import "./TaskDetails.css";

export default class TaskDetails extends Component {
  render() {
    return (
      <div className="taskDetails">
        <h2>Task Name</h2>
        <ul>
          <li>Project Name</li>
          <li>Description</li>
          <li>Deadline</li>
          <li>Assignee</li>
          <li>Status</li>
          <li>Members</li>
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
