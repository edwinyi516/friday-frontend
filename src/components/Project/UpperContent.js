import React from "react";
import "./UpperContent.css";

export default function UpperContent(props) {
  let deadline = props.deadline
  let deadlineString = new Date(deadline).toLocaleDateString("en-us")
  return (
    <div className="upperContent container" id="projectContainer">
      <div className="upperContent_topHalf">
        <h1 className="projectTitle">Project {props.title}</h1>
        <div className="statusAndDeadline">
          <p>Status: {props.status}</p>
          <p>Deadline: {deadlineString}</p>
        </div>
      </div>
      <p id="props-description">{props.description}</p>
    </div>
  );
}
