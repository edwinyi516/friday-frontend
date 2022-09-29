import React, { Component } from "react";
import "./LowerContent.css";
import TasksList from "./TasksList";
import TaskDetails from "./TaskDetails";

export default class LowerContent extends Component {
  render() {
    return (
      <div className="lowerContent">
        <div className="lowerContent_topHalf">
          <p>Tasks </p>
          <p>|</p>
          <p>Members</p>
        </div>

        <div className="lowerContent_lowerHalf">
          <TasksList />
          <TaskDetails />
          {
            //If Clicked on MEMBERS TAB, render <Members />
          }
        </div>
      </div>
    );
  }
}
