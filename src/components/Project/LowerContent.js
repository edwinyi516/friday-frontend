import React, { Component } from "react";
import "./LowerContent.css";
import TasksList from "./TasksList";
import TaskDetails from "./TaskDetails";
import MembersList from "./MembersList";
import AllMembersList from "./AllMembersList";

class LowerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "tasks",
      tasks: null,
      task: {},
      createMode: false,
      addMemberMode: false,
      addMembersList: null,
      members: [],
    };
  }

  componentDidMount() {
    console.log(this.props);

    fetch(`${this.props.baseURL}/tasks/project/${this.props._id}`).then(
      (res) => {
        res.json().then((data) => {
          console.log(data);
          this.setState({
            tasks: data,
            task: data[0],
            members: this.props.members,
          });
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
        this.setState({ addMembersList: filteredMembers });
      });
    });
    //set state to (allUsers - this.props.members)
    //set state to addMembersMode: true
    //Pass allUsers to AllMembersList
    //

    this.setState({ addMemberMode: true }); //activates BACKDROP
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

          {this.state.tab === "members" && (
            <>
              {this.state.addMemberMode && (
                <div
                  className="backdrop"
                  onClick={() => {
                    this.cancelAddMember();
                  }}
                >
                  <div className="addMemberModal">
                    <p>Which member would you like to add?</p>
                    <button
                      className="cancel"
                      onClick={() => {
                        this.cancelAddMember();
                      }}
                    >
                      Cancel
                    </button>
                    {this.state.addMembersList && (
                      <AllMembersList
                        addMembersList={this.state.addMembersList}
                      />
                    )}
                  </div>
                </div>
              )}

              <MembersList
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
