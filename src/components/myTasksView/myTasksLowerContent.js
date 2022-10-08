import React, { Component } from "react";
import "./myTasksLowerContent.css";
import MyTasksTasksList from "./myTasksTasksList";
import MyTasksTaskDetails from "./myTasksTaskDetails";

class MyTasksLowerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: null,
      task: {},
    };
  }

  componentDidMount() {
    const fetchTasksUrl = `${this.props.baseURL}/tasks/user/${this.props.userData.userData._id}`;
    fetch(fetchTasksUrl)
      .then((res) => res.json())
      .then((userTasks) => {
        console.log(userTasks);
        this.setState({
          task: userTasks[0],
          tasks: userTasks,
        });
      });
  }

  handleClick = (taskId) => {
    const selectedTask = this.state.tasks.find((task) => task._id === taskId);
    this.setState({ task: selectedTask });
  };

  render() {
    return (
      <div className="lowerContent container" id="projectContainer">
        <div className="lowerHalfMyTasks">
          {/* {this.state.tasks} <-- is passing down an array of tasks */}
          {this.state.tasks && (
            <>
              <MyTasksTasksList
                tasksArray={this.state.tasks}
                handleClick={this.handleClick}
              />

              <MyTasksTaskDetails
                {...this.state.task}
                members={this.state.members}
                currentMembers={this.state.currentMembers}
                baseURL={this.props.baseURL}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default MyTasksLowerContent;
