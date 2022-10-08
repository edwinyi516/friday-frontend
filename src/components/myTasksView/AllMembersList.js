import React from "react";
import "./AllMembersList.css";
import MemberItem from "./MemberItem";

function AllMembersList(props) {
  console.log(props);

  return (
    <div className="myAllMembersList">
      <ul>
        {props.notProjectMembersYet.length !== 0 &&
          props.notProjectMembersYet.map((member) => {
            return (
              <li className="myMemberItemLi" key={member._id}>
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
