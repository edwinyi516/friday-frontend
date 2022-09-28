import React, { Component } from "react";
import "./UpperContent.css";

export default class UpperContent extends Component {
  render() {
    return (
      <div className="upperContent">
        <div className="upperContent_topHalf">
          <h1 className="projectTitle">Project Title</h1>
          <div className="statusAndDeadline">
            <p>Status: 🟢New</p>
            <p>Deadline: 10/20/2022</p>
          </div>
        </div>

        <h3>DESCRIPTION: </h3>
        <p>
          Actual description purus sit amet luctus venenatis lectus magna
          fringilla urna. Massa sapien faucibus et molestie ac feugiat sed
          lectus vestibulum. Nibh mauris cursus mattis molestie a. Mi quis
          hendrerit dolor magna eget est lorem ipsum. Mauris nunc…
        </p>
      </div>
    );
  }
}
