import React from "react";
import "./UpperContent.css";

export default function UpperContent(props) {
  return (
    <div className="upperContent container">
      <div className="upperContent_topHalf">
        <h1 className="projectTitle">Project {props.title}</h1>
        <div className="statusAndDeadline">
          <p>Status: {props.status}</p>
          <p>Deadline: {props.deadline}</p>
        </div>
      </div>

      <h3>DESCRIPTION: </h3>
      <p>{props.description}</p>
    </div>
  );
}
