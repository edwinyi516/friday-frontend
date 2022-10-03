import React, { Component } from "react";
import "./MemberItem.css";

export default class MemberItem extends Component {
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
        <div className="memberItem">
          {this.state.deleteMode && (
            <div
              className="backdrop"
              onClick={() => {
                this.cancelDeleteModal();
              }}
            >
              <div className="deleteModal">
                <p>Are you sure you want to REMOVE Member?</p>
                <button
                  className="cancel"
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
            className="removeMemberButton"
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
