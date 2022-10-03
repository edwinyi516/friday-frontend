import React from "react";
import MemberItem from "./MemberItem";

function AllMembersList(props) {
  console.log(props);

  return (
    <div>
      <h2>AllMembersList</h2>
      <ul>
        {props.addMembersList.length !== 0 &&
          props.addMembersList.map((member) => {
            return (
              <li key={member._id}>
                <MemberItem {...member} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default AllMembersList;
