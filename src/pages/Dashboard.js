import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UsersTodaysTasks from '../components/UsersTodaysTasks'
import UsersUpcomingTasks from '../components/UsersUpcomingTasks'

let baseURL = "";

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
} else {
  baseURL = "http://localhost:3003";

}
// let baseURL = process.env.REACT_APP_BACKEND_URL

// export default class Dashboard extends Component {
//   // const [user, setUser] = useState("")
  
//   // useEffect(() => {
//   //   axios({
//   //     method: "GET",
//   //     withCredentials: true,
//   //     url: baseURL + "/user"
//   //   })
//   //   .then((res) => setUser(res.data))
//   // }, [])

//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <>
//       <h1>Welcome back, {this.props.user.firstName}</h1>
//       {
//         this.props.user ? (
//           <>
//             <UsersTodaysTasks user={this.props.user} />
//             <UsersUpcomingTasks user={this.props.user} />
//           </>
//         ) : <h2>No logged in user</h2>
//       }
//       </>
//     )
//   }
// }

export default function Dashboard(props) {
  return (
    <div className="dashboardContainer">
      <UsersTodaysTasks user={props.user} />
      <UsersUpcomingTasks user={props.user} />
    </div>
  )


}