import React, { Component } from "react";
import "./myTasksTaskItem.css";

export default class MyTasksTaskItem extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="taskItem">
        <h4>Name: {this.props.taskName}</h4>
        <ul>
          {/* <li>Subject</li>  <----- DO WE WANT A SUBJECT? */}
          <li>Deadline: {this.props.deadline}</li>
        </ul>
        {/* <div className="avatar">
          <div className="picture"></div>
        </div> */}
      </div>
    );
  }
}
