import React, { Component } from "react";
import "./ProjectMembers.css";
import ProjectMember from "./ProjectMember";

export default class ProjectMembers extends Component {
  constructor(props) {
    super(props);
    this.state = { members: [] };
  }

  componentDidMount() {
    const membersIds = this.props.members
      .map((member) => {
        return `member=${member}&`;
      })
      .join("");

    fetch(`${this.props.baseURL}/users/many/users?${membersIds}`).then(
      (res) => {
        res.json().then((data) => {
          this.setState({ members: data });
        });
      }
    );
  }

  render() {
    // console.log(this.props);
    return (
      <div className="projectMembersList">
        <h2> Members List</h2>
        <button
          onClick={() => {
            this.props.handleAddMember();
          }}
        >
          Add Member
        </button>
        <ul>
          {this.state.members !== [] &&
            this.state.members.map((member) => {
              return (
                <li key={member._id}>
                  <ProjectMember
                    {...member}
                    handleRemoveMember={this.props.handleRemoveMember}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
