import React, { Component } from "react";
//add base URL
let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "Heroku backend URL";
}
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
<<<<<<< HEAD:src/components/Members/Members.js
    fetch(`${baseURL}/users/many/users/?`) //MADE A CHANGE -LEILANNI
=======
    fetch(baseURL + "/users")
    // fetch(`${baseURL}/users/many/users/?`)
>>>>>>> f570877789378b609210c1af7eb41704006bb182:src/components/Members/index.js
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
