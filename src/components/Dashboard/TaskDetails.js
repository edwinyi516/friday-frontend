import React, { Component } from "react";
import "./TaskDetails.css";

export default class TaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      taskName: this.props.taskName,
      currentMembers: [],
    };
  }

  activateEditMode = () => {
    // const membersIds = this.props.members;
    //   .map((member) => {
    //     return `member=${member}&`;
    //   })
    //   .join("");

    // fetch(`${this.props.baseURL}/users/many/users?${membersIds}`).then(
    //   (res) => {
    //     res.json().then((data) => {
    //       this.setState({ /*currentMembers: data,*/ editMode: true });
    //     });
    //   }
    // );
  };

  cancelEditMode = () => {
    this.setState({ editMode: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling Task Edit Submit --------------------");
    console.log(e.target);
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ taskName: e.target.value });
  };

  render() {
    let content = this.state.editMode ? (
      <div className="taskDetails">
        <h2>EDIT MODE</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskName">Task Name: </label>
          <input
            onChange={this.handleChange}
            id="taskName"
            name="taskName"
            value={this.state.taskName}
          />
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            name="description"
            value={this.props.description}
          />
          <li>Deadline: {this.props.deadline}</li>
          <li>Assignee ID: {this.props.assigneeID} </li>
          <label htmlFor="status">Status: </label>
          <input id="status" name="status" value={this.props.status} />
          <button type="submit">SUBMIT</button>
        </form>
        <button onClick={this.cancelEditMode}>CANCEL</button>
      </div>
    ) : (
      <div className="taskDetails">
        <h2>Task Name: {this.props.taskName}</h2>
        <ul>
          <li>Description: {this.props.description}</li>
          <li>Deadline: {this.props.deadline}</li>
          <li>Assignee ID: {this.props.assigneeID} </li>
          <li>Status: {this.props.status}</li>
        </ul>

        <div className="taskDetails_editAndDelete">
          <p onClick={this.activateEditMode}>Edit</p>
          <p>|</p>
          <p>Delete</p>
        </div>
      </div>
    );

    return content;
  }
}

//To-do List:
//Pass ALL USERS into Task Details for dropdown options
//Integrate calendar and dropdown list
