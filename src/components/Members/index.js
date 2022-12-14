import React, { Component } from "react";

//add base URL
let baseURL = "";
if (process.env.REACT_APP_ENVIRONMENT === "production") {
  baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
} else {
  baseURL = "http://localhost:3003";
}
// let baseURL = process.env.REACT_APP_BACKEND_URL
console.log(process.env.REACT_APP_ENVIRONMENT)
console.log("current base URL:", baseURL);
//class member
class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    };
  }
  componentDidMount() {
    this.getMember();
  }
  getMember = () => {
    fetch(baseURL + "/users")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log("member data", data);
        this.setState({ members: data });
      });
  };
  render() {
    console.log(this.props);
    return (
      <ul>
        {this.state.members.map((members) => {
          return (
            <li key={members._id}>
              {members.firstName + " " + members.lastName}
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Member;
