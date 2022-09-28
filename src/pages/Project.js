import React, { Component } from "react";
import LowerContent from "../components/Project/LowerContent";
import UpperContent from "../components/Project/UpperContent";
import "./Project.css";

export default class Project extends Component {
  render() {
    return (
      <div className="projectContainer">
        <UpperContent />
        <LowerContent />
      </div>
    );
  }
}
