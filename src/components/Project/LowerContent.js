import React, { Component, useEffect, useState } from "react";
import "./LowerContent.css";
import TasksList from "./TasksList";
import TaskDetails from "./TaskDetails";
import { useParams } from "react-router-dom";
import Members from "../Members/Members";

class LowerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "tasks",
      tasks: null,
      task: {},
      members: null,
      createMode: false,
    };
  }

  componentDidMount() {
    fetch(`${this.props.baseURL}/tasks/project/${this.props._id}`).then(
      (res) => {
        res.json().then((data) => {
          console.log(data);
          this.setState({ tasks: data, task: data[0] });
        });
      }
    );
  }

  handleClick = (taskId) => {
    const selectedTask = this.state.tasks.find((task) => task._id === taskId);
    // console.log(selectedTask);
    this.setState({ task: selectedTask });
  };

  handleTab = (clickedTab) => {
    console.log(clickedTab);
    this.setState({ tab: clickedTab });
  };

  // handleAddTaskFormButton = () => {
  //   this.setState((previousState) => {
  //     previousState.createMode = !previousState.createMode;
  //   });
  // };

  render() {
    return (
      <div className="lowerContent">
        <div className="lowerContent_topHalf">
          <p>
            <button
              onClick={() => {
                this.handleTab("tasks");
              }}
            >
              {" "}
              Tasks{" "}
            </button>
          </p>
          <p>|</p>
          <p>
            <button
              onClick={() => {
                this.handleTab("members");
              }}
            >
              Members
            </button>
          </p>
        </div>

        <div className="lowerContent_lowerHalf">
          {/* {this.state.tasks} <-- is passing down an array of tasks */}
          {this.state.tasks && this.state.tab === "tasks" && (
            <>
              <button
                id="createTask"
                onClick={() => {
                  this.handleAddTaskFormButton();
                }}
              >
                Create Task
              </button>

              <TasksList
                tasksArray={this.state.tasks}
                handleClick={this.handleClick}
              />

              {/* if (this.state.createMode === true) render(<TaskForm />) else, render <TaskDetials />*/}
              {this.state.createMode === true ? (
                <h2>task form</h2>
              ) : (
                <TaskDetails {...this.state.task} />
              )}
            </>
          )}
          {/* down here, we wnt to pass just ONE task from the task array */}

          {this.state.members && this.state.tab === "members" && <Members />}
        </div>
      </div>
    );
  }
}

export default LowerContent;
