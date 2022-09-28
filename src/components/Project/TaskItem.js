import React, { Component } from "react";
import "./TaskItem.css";

export default class TaskItem extends Component {
  render() {
    return (
      <div className="taskItem">
        <h4>Task Name</h4>
        <ul>
          <li>Subject</li>
          <li>Deadline</li>
          <li>details button</li>
        </ul>
        <p>Delete</p>
        <div className="avatar">
          <p>Assignee</p>
          <div className="picture"></div>
        </div>
      </div>
    );
  }
}
