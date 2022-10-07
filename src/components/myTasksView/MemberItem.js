import React, { Component } from "react";
import "./MemberItem.css";

export default class MemberItem extends Component {
  render() {
    return (
      <div className="memberItem">
        <h4>{`${this.props.firstName} ${this.props.lastName}`}</h4>
        <button
          onClick={() => {
            this.props.handleSubmitNewMemberToProject(this.props._id);
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
