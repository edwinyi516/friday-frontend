import React, { Component } from "react";
// import Navbar from "../components/Navbar";
import creative from "../assets/images/creative.png"
import marketing from "../assets/images/marketing.png"
import projectManagement from "../assets/images/project_management.png"
import sales from "../assets/images/sales.png"
import taskManagement from "../assets/images/task_management.png"
import operation from "../assets/images/operation.png"



export default class Home extends Component {
  render() {
    return (
      <>
      <div id="homepageBody">
        <div id='intro'>A platform built for an<br></br>innovative way of collaboration</div>
        <div id='containers'>
          <div className="container" >
          <img className="containerImg" id="creative" src={creative} alt="img" />
          <div className="containerText">Software development</div>
          </div>
          <div className="container">
          <img className="containerImg" id="marketing" src={marketing} alt="img"/>
          <div className="containerText">Marketing</div>
          </div>
          <div className="container">
          <img className="containerImg" id="projectManagement" src={projectManagement} alt="img"/>
          <div className="containerText">Project management</div>
          </div>
          <div className="container">
          <img className="containerImg" id="sales" src={sales} alt="img"/>
          <div className="containerText">Sales and CRM</div>
          </div>
          <div className="container">
          <img className="containerImg" id="taskManagement" src={taskManagement} alt="img"/>
          <div className="containerText">Task Managment</div>
          </div>
          <div className="container">
          <img className="containerImg" id="operation" src={operation} alt="img"/>
          <div className="containerText">Operation</div>
          </div>
        </div>
      </div>
      <footer>
      <a href="#" className="fa fa-facebook"></a>
      <a href="#" className="fa fa-twitter"></a>
      <a href="#" className="fa fa-youtube"></a>
      <a href="#" className="fa fa-instagram"></a>
      <div>All Rights Reserved © friday.com</div>
      </footer>
      </>
    )
  }
}
