import React, { Component } from "react";
import "./TaskItem.css";

export default class TaskItem extends Component {
  render() {
    console.log(this.props);
    let deadline = this.props.deadline;
    let deadlineString = new Date(deadline).toLocaleDateString();

    return (
      <div className="taskItem card">
        <h4> {this.props.taskName}</h4>
        <ul>
          {/* <li>Subject</li>  <----- DO WE WANT A SUBJECT? */}
          <li>Deadline: {deadlineString}</li>
        </ul>
        <div className="avatar">
          <p>{`${this.props.userObj.firstName} ${this.props.userObj.lastName}`}</p>
          <div className="picture"></div>
        </div>
      </div>
    );
  }
}
