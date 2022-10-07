import React, { Component } from "react";
import "./LowerContent.css";
import TasksList from "./TasksList";
import TaskDetails from "./TaskDetails";
import ProjectMembers from "./ProjectMembers";
import AllMembersList from "./AllMembersList";
import TaskForm from "../TaskForm";

class LowerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "tasks",
      tasks: null,
      task: {},
      createMode: false,
      activateAddMemberMode: false,
      notProjectMembersYet: null,
      members: [],
      currentMembers: [],
      editTaskMode: false,
    };
  }

  componentDidMount() {
    console.log(this.props);

    const membersIds = this.props.members;
    const memberIdQuery = membersIds
      .map((member) => {
        return `member=${member}&`;
      })
      .join("");

    const fetchTasksUrl = `${this.props.baseURL}/tasks/project/${this.props._id}`;
    const fetchMembersUrl = `${this.props.baseURL}/users/many/users?${memberIdQuery}`;

    Promise.all([fetch(fetchTasksUrl), fetch(fetchMembersUrl)])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        const taskAssignee = res2.find(
          (user) => user._id === res1[0].assigneeID
        );
        this.setState({
          tasks: res1,
          task: res1[0],
          taskAssignee,
          members: this.props.members,
          currentMembers: res2,
        });
      });
  }

  handleClick = (taskId) => {
    const selectedTask = this.state.tasks.find((task) => task._id === taskId);
    const taskAssignee = this.state.currentMembers.find(
      (user) => user._id === selectedTask.assigneeID
    );
    this.setState({ task: selectedTask, taskAssignee });
  };

  handleTab = (clickedTab) => {
    console.log(clickedTab);
    this.setState({ tab: clickedTab });
  };

  handleRemoveMember = (memberId) => {
    const currentMembersArray = this.props.members;

    const newMembersArray = currentMembersArray.filter((member) => {
      return member !== memberId;
    });

    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ members: newMembersArray }),
    };

    fetch(
      `${this.props.baseURL}/projects/${this.props._id}`,
      fetchOptions
    ).then((res) =>
      res.json().then((data) => {
        console.log(data);
        window.location.reload();
      })
    );
  };

  handleAddMember = () => {
    console.log(`adding new member`);
    //fetch all users

    const currentMembers = {};
    console.log(this.props);
    this.props.members.forEach((member) => {
      currentMembers[member] = member;
    });
    console.log(currentMembers); //object of current Members

    fetch(this.props.baseURL + "/users").then((res) => {
      res.json().then((data) => {
        console.log(data);
        const filteredMembers = data.filter((user) => {
          return user._id !== currentMembers[user._id];
        });
        console.log(filteredMembers);
        this.setState({ notProjectMembersYet: filteredMembers });
      });
    });

    this.setState({ activateAddMemberMode: true }); //activates BACKDROP
  };

  cancelAddMember = (event) => {
    console.log("nevermind");
    // event.stopPropagation();
    this.setState({ activateAddMemberMode: false });
  };

  handleSubmitNewMemberToProject = (memberId) => {
    console.log(`adding ${memberId} to current project`);
    const currentMembers = this.state.members;
    currentMembers.push(memberId);
    console.log(currentMembers);

    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ members: currentMembers }),
    };

    fetch(
      `${this.props.baseURL}/projects/${this.props._id}`,
      fetchOptions
    ).then((res) => {
      res.json().then((data) => {
        console.log(data);
        window.location.reload();
      });
    });
  };

  activateCreateTaskForm = () => {
    console.log("creating new task");
    this.setState({ createMode: true });
  };

  handleAddTask = (task) => {
    console.log(`FAKE handleAddTask is being called `);
    const currentTasks = this.state.tasks;
    currentTasks.push(task);
    this.setState({ tasks: currentTasks });
  };

  deactivateCreateTaskForm = () => {
    console.log("creatorMode: false");
    this.setState({ createMode: false });
  };

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
                  this.activateCreateTaskForm();
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
                <div className="taskFormContainer">
                  <button
                    className="cancelTaskForm"
                    onClick={() => {
                      this.deactivateCreateTaskForm();
                    }}
                  >
                    Cancel
                  </button>
                  <TaskForm
                    projectId={this.props._id}
                    handleAddTask={this.handleAddTask}
                  />
                </div>
              ) : (
                <TaskDetails
                  {...this.state.task}
                  members={this.state.members}
                  currentMembers={this.state.currentMembers}
                  baseURL={this.props.baseURL}
                />
              )}
            </>
          )}
          {/* down here, we wnt to pass just ONE task from the task array */}

          {this.state.tab === "members" && (
            <>
              {this.state.activateAddMemberMode && (
                <div
                  className="addMemberBackdrop"
                  // onClick={(e) => {
                  //   this.cancelAddMember(e);
                  // }}
                >
                  <div className="addOrCancelMember">
                    <p>Which member would you like to add?</p>

                    <button
                      className="cancel"
                      onClick={() => {
                        this.cancelAddMember();
                      }}
                    >
                      Cancel
                    </button>
                  </div>

                  {this.state.notProjectMembersYet && (
                    <AllMembersList
                      notProjectMembersYet={this.state.notProjectMembersYet}
                      handleSubmitNewMemberToProject={
                        this.handleSubmitNewMemberToProject
                      }
                    />
                  )}
                </div>
              )}

              <ProjectMembers
                baseURL={this.props.baseURL}
                members={this.props.members}
                handleRemoveMember={this.handleRemoveMember}
                handleAddMember={this.handleAddMember}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default LowerContent;
