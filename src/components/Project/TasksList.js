import React, { Component } from "react";
import TaskItem from "./TaskItem";
import "./TasksList.css";

export default class TasksList extends Component {
  render() {
    return (
      <div className="tasksList">
        <h2>Tasks:</h2>
        <ul>
          <li>
            <TaskItem />
          </li>
          <li>
            <TaskItem />
          </li>
          <li>
            <TaskItem />
          </li>
          <li>
            <TaskItem />
          </li>
          <li>
            <TaskItem />
          </li>
          <li>
            <TaskItem />
          </li>
        </ul>
      </div>
    );
  }
}
