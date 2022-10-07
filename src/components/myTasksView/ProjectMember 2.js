import React, { Component } from "react";
import "./ProjectMember.css";

export default class ProjectMember extends Component {
  constructor(props) {
    super(props);
    this.state = { deleteMode: false };
  }

  cancelDeleteModal() {
    this.setState({ deleteMode: false });
  }

  activateDeleteModal() {
    console.log("remove member");
    this.setState({ deleteMode: true });
  }

  render() {
    return (
      <>
        <div className="myProjectMember">
          {this.state.deleteMode && (
            <div
              className="myProjectMemberBackdrop"
              onClick={() => {
                this.cancelDeleteModal();
              }}
            >
              <div className="myRemoveProjectMemberModal">
                <p>Are you sure you want to REMOVE Member?</p>
                <button
                  className="myCancelRemovingProjectMember"
                  onClick={() => {
                    this.cancelDeleteModal();
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    this.props.handleRemoveMember(this.props._id);
                  }}
                >
                  Yes, Delete Member
                </button>
              </div>
            </div>
          )}

          <ul>
            <li>Name: {`${this.props.firstName} ${this.props.lastName}`}</li>
            <li>E-mail: {this.props.email}</li>
          </ul>
          <p
            className="myRemoveProjectMemberButton"
            onClick={() => {
              this.activateDeleteModal();
            }}
          >
            Remove
          </p>
        </div>
      </>
    );
  }
}
