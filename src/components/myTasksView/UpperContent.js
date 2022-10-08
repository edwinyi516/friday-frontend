import React from "react";
import "./UpperContent.css";

export default function UpperContent(props) {
  return (
    <div className="myUpperContent">
      <div className="myUpperContent_myTopHalf">
        <h1 className="myProjectTitle">Project {props.title}</h1>
        <div className="myStatusAndDeadline">
          <p>Status: {props.status}</p>
          <p>Deadline: {props.deadline}</p>
        </div>
      </div>

      <h3>DESCRIPTION: </h3>
      <p>{props.description}</p>
    </div>
  );
}
