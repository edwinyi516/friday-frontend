import React, { Component } from "react";
import "./TaskItem.css";

export default class TaskItem extends Component {
  render() {

    return (
      <div className="taskItem">
        <h4>Name: {this.props.taskName}</h4>
        <ul>
          {/* <li>Subject</li>  <----- DO WE WANT A SUBJECT? */}
          <li>Deadline: {this.props.deadline}</li>
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
