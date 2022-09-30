import React, { Component } from "react";
import "./LowerContent.css";
import TasksList from "./TasksList";
import TaskDetails from "./TaskDetails";

export default class LowerContent extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  getTasksByProjectId = () => {
    console.log(this.props);
    //    //http://localhost:3003/tasks/project/632e8aaee8057b3dd3756c22

    fetch(`${this.props.baseUrl}/tasks/project/${this.props._id}`).then(
      (response) => {
        console.log(response);
        return response.json().then((data) => this.setState({ task: data }));
      }
    );
  };

  componentDidMount() {
    this.getTasksByProjectId();
  }

  render() {
    console.log(this.props);
    return (
      <div className="lowerContent">
        <div className="lowerContent_topHalf">
          <p>Tasks </p>
          <p>|</p>
          <p>Members</p>
        </div>

        <div className="lowerContent_lowerHalf">
          <TasksList tasksArray={this.state.tasks} />
          <TaskDetails />

          {
            //If Clicked on MEMBERS TAB, render <Members />
          }
        </div>
      </div>
    );
  }
}
