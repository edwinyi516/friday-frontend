import React from "react";
import "./AllMembersList.css";
import MemberItem from "./MemberItem";

function AllMembersList(props) {
  // console.log(props);

  return (
    <div className="allMembersList">
      <ul>
        {props.notProjectMembersYet.length !== 0 &&
          props.notProjectMembersYet.map((member) => {
            return (
              <li className="memberItemLi" key={member._id}>
                <MemberItem
                  {...member}
                  handleSubmitNewMemberToProject={
                    props.handleSubmitNewMemberToProject
                  }
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default AllMembersList;
