import React, { Component } from "react";
import Navbar from "../components/Navbar";
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
        <div id='intro'>A platform built for an innovative way of collabration</div>
        <div id='containers'>
          <div class="container" >
          <img class="containerImg" id="creative" src={creative} alt="img" />
          <div>Software development</div>
          </div>
          <div class="container">
          <img class="containerImg" id="marketing" src={marketing} alt="img"/>
          <div>Marketing</div>
          </div>
          <div class="container">
          <img class="containerImg" id="projectManagement" src={projectManagement} alt="img"/>
          <div>Project management</div>
          </div>
          <div class="container">
          <img class="containerImg" id="sales" src={sales} alt="img"/>
          <div>Sales & CRM</div>
          </div>
          <div class="container">
          <img class="containerImg" id="taskManagement" src={taskManagement} alt="img"/>
          <div>Task Managment</div>
          </div>
          <div class="container">
          <img class="containerImg" id="operation" src={operation} alt="img"/>
          <div>Operation</div>
          </div>
        </div>
      </div>
      <footer>
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-youtube"></a>
      <a href="#" class="fa fa-instagram"></a>
      <div>All Rights Reserved © friday.com</div>
      </footer>
      </>
    );
  }
}
