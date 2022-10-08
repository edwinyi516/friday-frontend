import React, { Component } from "react";
import "./myTasksTaskItem.css";

export default class MyTasksTaskItem extends Component {
  render() {
    // console.log(this.props);
    let deadline = this.props.deadline
    let deadlineString = new Date(deadline).toLocaleDateString("en-us")
    return (
      <div className="taskItem card">
        <h4>{this.props.taskName}</h4>
        <ul>
          {/* <li>Subject</li>  <----- DO WE WANT A SUBJECT? */}
          <li>Deadline: {deadlineString}</li>
        </ul>
        {/* <div className="avatar">
          <div className="picture"></div>
        </div> */}
      </div>
    );
  }
}
