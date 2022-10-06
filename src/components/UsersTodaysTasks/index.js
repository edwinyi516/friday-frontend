import React, { Component } from 'react'


let baseURL = "";
if (process.env.REACT_APP_ENVIRONMENT === "production") {
  baseURL = "https://friday-project-mgmt-backend.herokuapp.com";
} else {
  baseURL = "http://localhost:3003";

}
// let baseURL = process.env.REACT_APP_BACKEND_URL

export default class UsersTodaysTasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todaysTasks: []
        }
    }
    componentDidMount() {
        this.getUsersTodaysTasks()
    }

    getUsersTodaysTasks = () => {
        fetch(baseURL + `/tasks/user/${this.props.user._id}/today`)
            .then(res => {
                if(res.status === 200) {
                    return res.json()
                }
                else {
                    return []
                }
            }).then(data => {
                console.log("tasks data", data)
                this.setState({ todaysTasks: data })
            })
    }

    render() {
        return (
            <>
                <h3>Today's Tasks</h3>
                <ul>
                    {
                        this.state.todaysTasks.map((task, i) => (
                            <li key={i}>{task.taskName}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
}